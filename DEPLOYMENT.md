# Deployment Guide: Cloudflare Pages & Custom Domain (chandrakiran.dev)

This guide provides step-by-step instructions to deploy your portfolio website to **Cloudflare Pages** from GitHub and connect your domain **`chandrakiran.dev`** (purchased via Namecheap).

---

## 1. Quick Verification & Local Preview

Make sure dependencies are installed and test the production build locally:

```bash
# From inside the project directory:
npm run build
npm run preview
```

Open `http://localhost:4173` to preview the production build.

---

## 2. Push Your Portfolio to GitHub

You already have a remote repository initialized at [`github.com/chandrakiranmalkapuram/chandra-kiran-portfolio`](https://github.com/chandrakiranmalkapuram/chandra-kiran-portfolio).

To commit and push this new React + Vite codebase to your repository:

```bash
cd /Users/chandrakiran/.gemini/antigravity-ide/scratch/chandrakiran-dev

# Initialize git if not already initialized
git init
git branch -M main

# Add files
git add .
git commit -m "feat: complete modern portfolio website for chandrakiran.dev"

# Link to your remote GitHub repository
git remote add origin https://github.com/chandrakiranmalkapuram/chandra-kiran-portfolio.git

# Push to main
git push -u origin main --force
```

---

## 3. Deploy on Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, click **Workers & Pages**.
3. Click **Create application** &rarr; select the **Pages** tab &rarr; click **Connect to Git**.
4. Authorize Cloudflare to access your GitHub account and select the repository:
   - **Repository:** `chandrakiranmalkapuram/chandra-kiran-portfolio`
5. Configure the Build Settings:
   - **Project Name:** `chandrakiran-dev` (or your choice)
   - **Production branch:** `main`
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** *(leave blank if repository root)*
6. Click **Save and Deploy**.
7. Cloudflare Pages will run `npm run build` and publish your site to a live preview URL (e.g. `chandrakiran-dev.pages.dev`) in ~30 seconds.

---

## 4. Connect Your Custom Domain (`chandrakiran.dev`)

You purchased `chandrakiran.dev` on Namecheap. Here is how to route it to Cloudflare Pages:

### Step 4.1: Add Custom Domain in Cloudflare Pages
1. In Cloudflare Pages, open your deployed project (`chandrakiran-dev`).
2. Go to the **Custom domains** tab.
3. Click **Set up a custom domain**.
4. Enter `chandrakiran.dev` and click **Continue**.
5. Repeat for `www.chandrakiran.dev` so both URLs work seamlessly.

### Step 4.2: Update Namecheap DNS

You can configure DNS using either of the following two methods:

#### Method A: Full Cloudflare Nameservers (Recommended)
1. Add `chandrakiran.dev` to your Cloudflare account under **Websites &rarr; Add a site** (choose the Free plan).
2. Cloudflare will assign two nameservers (e.g. `adam.ns.cloudflare.com` and `eve.ns.cloudflare.com`).
3. Open [Namecheap Dashboard](https://ap.www.namecheap.com/) &rarr; click **Manage** next to `chandrakiran.dev`.
4. Under **Nameservers**, change from *Namecheap BasicDNS* to **Custom DNS**.
5. Paste Cloudflare's two nameservers and save (green checkmark).
6. SSL certificates, DDoS mitigation, and global edge caching are automatically handled.

#### Method B: Namecheap CNAME Record (Direct)
If you prefer keeping Namecheap BasicDNS:
1. In Namecheap, click **Manage** next to `chandrakiran.dev` &rarr; go to **Advanced DNS**.
2. Delete any existing parking page URL redirect records.
3. Add a **CNAME Record**:
   - **Type:** `CNAME Record`
   - **Host:** `@` (or apex/root)
   - **Value:** `chandrakiran-dev.pages.dev`
   - **TTL:** `Automatic`
4. Add a second **CNAME Record** for www:
   - **Type:** `CNAME Record`
   - **Host:** `www`
   - **Value:** `chandrakiran-dev.pages.dev`
   - **TTL:** `Automatic`

---

## 5. Security & Caching Built-In

This project includes pre-configured Cloudflare Pages headers in `public/_headers`:
- `X-Frame-Options: DENY` (Anti-clickjacking)
- `X-Content-Type-Options: nosniff` (MIME sniffing prevention)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Cache-Control: public, max-age=31536000, immutable` for hashed `/assets/*`
- SPA fallback rule in `public/_redirects` (`/* /index.html 200`)

---

## 6. How to Update Content in the Future

All personal data, skills, projects, and work history live in **one centralized file**:
`src/data/portfolioData.ts`

To change or add a project, adjust your bio, or update your live links:
1. Edit [`src/data/portfolioData.ts`](file:///Users/chandrakiran/.gemini/antigravity-ide/scratch/chandrakiran-dev/src/data/portfolioData.ts).
2. Commit and push:
   ```bash
   git add src/data/portfolioData.ts
   git commit -m "update: portfolio projects & bio"
   git push origin main
   ```
3. Cloudflare Pages automatically rebuilds and deploys the updates live in seconds.
