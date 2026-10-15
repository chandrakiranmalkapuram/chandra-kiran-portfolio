export interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
  CHECK_CHARACTER_ORIGIN?: string;
}

const DEFAULT_UPSTREAM_ORIGIN =
  'https://argos-check-character.chandrakiranmalkapuram2000.workers.dev';

interface ElementWithAttributes {
  getAttribute: (name: string) => string | null;
  setAttribute: (name: string, value: string) => void;
}

declare class HTMLRewriter {
  on(
    selector: string,
    handlers: {
      element?: (el: ElementWithAttributes) => void;
    }
  ): this;
  transform(response: Response): Response;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // 1. Canonical 301 redirect: /checkcharacter -> /checkcharacter/ (preserving query string)
    if (url.pathname === '/checkcharacter') {
      url.pathname = '/checkcharacter/';
      return Response.redirect(url.toString(), 301);
    }

    // 2. Proxy Check Character traffic under /checkcharacter/*
    if (url.pathname.startsWith('/checkcharacter/')) {
      const upstreamOrigin = env.CHECK_CHARACTER_ORIGIN || DEFAULT_UPSTREAM_ORIGIN;
      return handleCheckCharacterProxy(request, url, upstreamOrigin);
    }

    // 3. Fallback: serve existing portfolio static assets with SPA routing
    return env.ASSETS.fetch(request);
  },
};

async function handleCheckCharacterProxy(
  request: Request,
  clientUrl: URL,
  upstreamOrigin: string
): Promise<Response> {
  // Strip the leading "/checkcharacter" prefix
  // e.g. "/checkcharacter/" -> "/"
  // e.g. "/checkcharacter/assets/app.js" -> "/assets/app.js"
  // e.g. "/checkcharacter/logo.svg" -> "/logo.svg"
  const strippedPath = clientUrl.pathname.slice('/checkcharacter'.length) || '/';
  const upstreamUrl = new URL(strippedPath + clientUrl.search, upstreamOrigin);

  // Clone headers and set appropriate host for upstream Worker
  const upstreamHeaders = new Headers(request.headers);
  upstreamHeaders.set('host', upstreamUrl.host);
  upstreamHeaders.set('X-Forwarded-Host', clientUrl.host);
  upstreamHeaders.set('X-Forwarded-Proto', clientUrl.protocol.replace(':', ''));

  // Prepare proxy request preserving method, headers, and body
  const hasBody = request.method !== 'GET' && request.method !== 'HEAD';
  const proxyRequest = new Request(upstreamUrl.toString(), {
    method: request.method,
    headers: upstreamHeaders,
    body: hasBody ? request.body : undefined,
    redirect: 'manual', // Intercept redirects to safely rewrite Location headers
  });

  try {
    const upstreamResponse = await fetch(proxyRequest);

    // Handle redirects from upstream (301, 302, 307, 308)
    if ([301, 302, 307, 308].includes(upstreamResponse.status)) {
      const responseHeaders = new Headers(upstreamResponse.headers);
      const location = responseHeaders.get('location');

      if (location) {
        // Safe redirect rewriting:
        // Do NOT touch external URLs (e.g. Supabase, OAuth) or protocol-relative URLs (//...)
        const upstreamOriginObj = new URL(upstreamOrigin);
        try {
          const locUrl = new URL(location, upstreamOrigin);
          // Only rewrite if the location points to the upstream origin
          if (locUrl.origin === upstreamOriginObj.origin) {
            const cleanPath = locUrl.pathname.startsWith('/checkcharacter')
              ? locUrl.pathname
              : '/checkcharacter' + (locUrl.pathname === '/' ? '/' : locUrl.pathname);
            responseHeaders.set('location', cleanPath + locUrl.search + locUrl.hash);
          }
        } catch {
          // If relative path and not protocol-relative (//)
          if (location.startsWith('/') && !location.startsWith('//')) {
            const cleanPath = location.startsWith('/checkcharacter')
              ? location
              : '/checkcharacter' + (location === '/' ? '/' : location);
            responseHeaders.set('location', cleanPath);
          }
        }
      }

      return new Response(upstreamResponse.body, {
        status: upstreamResponse.status,
        statusText: upstreamResponse.statusText,
        headers: responseHeaders,
      });
    }

    // Handle HTML rewriting for root-relative asset paths
    const contentType = upstreamResponse.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      const rewriter = new HTMLRewriter()
        .on('script[src]', {
          element(el) {
            prefixAttribute(el, 'src');
          },
        })
        .on('link[href]', {
          element(el) {
            prefixAttribute(el, 'href');
          },
        })
        .on('img[src]', {
          element(el) {
            prefixAttribute(el, 'src');
          },
        })
        .on('form[action]', {
          element(el) {
            prefixAttribute(el, 'action');
          },
        })
        .on('a[href]', {
          element(el) {
            const href = el.getAttribute('href');
            // Only rewrite root-relative links (not external, mailto:, #hash, or protocol-relative //)
            if (
              href &&
              href.startsWith('/') &&
              !href.startsWith('/checkcharacter/') &&
              !href.startsWith('//')
            ) {
              if (href === '/checkcharacter' || href === '/') {
                el.setAttribute('href', '/checkcharacter/');
              } else {
                el.setAttribute('href', '/checkcharacter' + href);
              }
            }
          },
        });

      const transformedResponse = rewriter.transform(upstreamResponse);
      const headers = new Headers(transformedResponse.headers);
      headers.set('content-type', 'text/html; charset=utf-8');
      return new Response(transformedResponse.body, {
        status: transformedResponse.status,
        statusText: transformedResponse.statusText,
        headers,
      });
    }

    // For non-HTML assets (JS, CSS, images, etc.), return upstream response directly
    return upstreamResponse;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown upstream error';
    return new Response(
      `Check Character Service Unavailable: Failed to connect to upstream (${message}). The original application remains accessible directly at ${upstreamOrigin}`,
      {
        status: 502,
        headers: { 'content-type': 'text/plain; charset=utf-8' },
      }
    );
  }
}

function prefixAttribute(el: ElementWithAttributes, attrName: string): void {
  const val = el.getAttribute(attrName);
  // Safely prefix only single-slash root-relative paths
  if (
    val &&
    val.startsWith('/') &&
    !val.startsWith('/checkcharacter/') &&
    !val.startsWith('//')
  ) {
    if (val === '/checkcharacter' || val === '/') {
      el.setAttribute(attrName, '/checkcharacter/');
    } else {
      el.setAttribute(attrName, '/checkcharacter' + val);
    }
  }
}
