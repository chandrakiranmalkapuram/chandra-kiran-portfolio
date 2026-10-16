import type { Article } from '../types';

export const authorProfile = {
  name: 'Chandra Kiran Malkapuram',
  title: 'AI & Cloud / DevOps Engineer',
  bio: 'Specialist in cloud-native architectures, containerised microservices, and warehouse operational tooling. Currently reading for an MSc in Cloud Computing at the University of East London.'
};

export const articles: Article[] = [
  {
    slug: 'warehouse-voice-picking-guide',
    title: 'The Architecture of Voice-Directed Picking in Modern Logistics',
    subtitle: 'How Speech-Driven Headset Loops, Hands-Free Ergonomics, and Warehouse Verification Systems Eliminate Fulfillment Errors',
    summary: 'A deep architectural dive into voice-directed picking systems in high-volume retail fulfillment and distribution warehouses, exploring audio dialog flows, ambient noise challenges, and verification loops.',
    publishedDate: '2026-10-14',
    lastUpdated: '2026-10-16',
    author: authorProfile,
    category: 'Voice Logistics',
    readTimeMinutes: 7,
    tags: ['Voice Picking', 'Warehouse Operations', 'Speech Terminals', 'Supply Chain', 'Logistics'],
    relatedProject: {
      title: 'Check Character & Voice Confusion Risk System',
      url: '/checkcharacter/',
      label: 'Explore the Live Check Character Tool'
    },
    sections: [
      {
        heading: 'Introduction: The Paradigm Shift to Hands-Free Logistics',
        id: 'introduction',
        paragraphs: [
          'In modern high-velocity retail fulfillment centers and store stockrooms, order picking accounts for over 50% of total operational warehouse labor costs. Historically, pickers operated with paper pick-sheets or bulky handheld Radio Frequency (RF) barcode scanners. While RF barcode scanners improved inventory tracking over paper, they introduced a major physical constraint: operators were required to hold a device in one hand, repeatedly orient a laser scanner against high or low racking, and continually look down at an LCD screen.',
          'Voice-Directed Picking (VDP)—often deployed on industrial wearable computers and rugged Bluetooth headsets—transforms this interaction into an eyes-up, hands-free conversational loop. Workers receive audio directions through a single-ear headset, walk directly to target storage bays, confirm locations by reciting verification characters, and report picked quantities verbally.',
          'By removing the cognitive and physical overhead of repeatedly handling a scanner, enterprise supply chain case studies commonly report a 15% to 25% improvement in picking throughput alongside reductions in physical operator fatigue.'
        ],
        callout: {
          type: 'info',
          text: 'Voice-directed picking allows warehouse associates to operate with both hands completely unobstructed, which is essential when handling heavy, fragile, or multi-item retail consignments.'
        }
      },
      {
        heading: 'The Voice Dialog Cycle: A State Machine of Operational Checks',
        id: 'dialog-cycle',
        paragraphs: [
          'Industrial voice-picking terminals do not process open-ended natural conversation. Instead, they operate as deterministic, low-latency finite state machines. The standard cycle executes in five sequential phases:',
          '1. Direct: The warehouse management system (WMS) routes the picker to an optimized sequence of bays via speech synthesis (e.g., "Aisle One Two, Bay Alpha, Shelf Kilo").',
          '2. Navigate & Locate: The picker travels to the physical location without looking at a screen or sheet.',
          '3. Verification Challenge: Upon reaching the shelf, the worker reads out a physical "Check Character" or check digit displayed on the shelf label.',
          '4. Confirmation & Quantity: If the spoken check character matches the algorithmic expectation, the terminal announces the target quantity (e.g., "Pick Three"). If incorrect, the headset immediately warns the picker with an audible error tone and prompts re-verification.',
          '5. Acknowledge & Advance: The worker picks the items and responds with confirmation phrasing (e.g., "Grab Three" or "Done"), advancing the WMS batch.'
        ],
        table: {
          caption: 'Comparison of Warehouse Picking Methodologies (Indicative Logistics Industry Benchmarks)',
          headers: ['Parameter', 'Paper Pick Lists', 'Handheld RF Scanners', 'Voice-Directed Picking (VDP)'],
          rows: [
            ['Operator Posture', 'Hands occupied by list & pencil', 'Single-handed device hold', 'Completely hands-free & eyes-up'],
            ['Visual Distraction', 'High (reading paper lines)', 'Medium (checking screen display)', 'Near zero (audio cues only)'],
            ['Verification Step', 'Manual eye check / tick-box', 'Optical barcode laser scan', 'Acoustic check-character challenge'],
            ['Typical Industry Error Range', '1.0% – 3.0% (manual logging)', '0.2% – 0.5% (scan verification)', '0.05% – 0.15% (audio validation)'],
            ['Typical Onboarding Speed', 'Low (complex layout reading)', 'Medium (UI menu training)', 'High (standard spoken vocabulary)']
          ]
        }
      },
      {
        heading: 'Acoustic Environments and Hardware Realities',
        id: 'acoustic-challenges',
        paragraphs: [
          'Deploying voice recognition in an enterprise warehouse involves extreme ambient noise challenges far beyond typical consumer environments. Fulfillment floors experience background noise levels regularly fluctuating between 75 dBA and 88 dBA, generated by motorized roller conveyors, hydraulic pallet jacks, diesel forklift horns, metal security cages, and ambient industrial reverberation.',
          'To overcome this, industrial terminals rely on differential noise-cancelling microphone arrays combined with constrained acoustic vocabulary models. Rather than large-vocabulary general models, industrial engines prioritize high-confidence phonetic classification of numbers (ZERO through NINE) and the standard 26 NATO phonetic words (ALPHA, BRAVO, CHARLIE... ZULU).',
          'Despite advanced hardware filtering, high noise levels still cause acoustic confusion—particularly between phonetically adjacent plosives and vowels. This phenomenon makes deterministic check-digit calculation algorithms an indispensable safeguard against stockroom picking errors.'
        ]
      },
      {
        heading: 'The Role of Independent Calculation Tools in Stockroom Resilience',
        id: 'stockroom-resilience',
        paragraphs: [
          'In operational reality, warehouse shelf labels get damaged, covered by misplaced pallets, or scuffed by wire cages. Furthermore, stock stored on upper mezzanine levels or bulk holding areas may lack immediate label visibility. When a picker cannot read the physical check character, warehouse workflows typically stall, requiring an aisle supervisor to look up the location in an office desktop system.',
          'Self-contained, deterministic check-character tools—such as our Check Character project—solve this bottleneck by providing frontline workers with an instant, verified reference right from their mobile browser, restoring operational velocity without bypassing validation checks.'
        ]
      }
    ]
  },
  {
    slug: 'check-character-calculation-algorithms',
    title: 'Check Character Calculation Algorithms: Modulo 26 and Modulo 99 Verification in High-Volume Warehouses',
    subtitle: 'A Mathematical and Implementation Breakdown of Weighted Modulo Check Digits used in Retail Stockrooms and Regional Fulfilment Centres',
    summary: 'An in-depth mathematical dissection of the weighted ASCII modulo 26 and modulo 99 check-digit algorithms used in retail supply chains, complete with formulas, position weights, and TypeScript reference implementations.',
    publishedDate: '2026-10-14',
    lastUpdated: '2026-10-16',
    author: authorProfile,
    category: 'Algorithms & Verification',
    readTimeMinutes: 9,
    tags: ['Algorithms', 'Check Characters', 'Modulo 26', 'Modulo 99', 'TypeScript', 'Validation'],
    relatedProject: {
      title: 'Check Character Calculation Engine',
      url: '/checkcharacter/',
      label: 'Test Store & RFC Algorithms in Live Tool'
    },
    sections: [
      {
        heading: 'Why Warehouses Need Check Characters',
        id: 'why-check-characters',
        paragraphs: [
          'In high-volume retail fulfillment networks (such as Argos and Sainsbury’s logistics networks), human pickers navigate thousands of shelf bays per shift. If verification relied simply on reciting the shelf code itself (e.g., location "10AK"), confirmation bias would lead pickers to glance at the location code on their terminal, walk to an adjacent bay (e.g., "10AL"), and sub-consciously repeat "10AK" from memory.',
          'To break this confirmation bias, warehouse systems decouple the shelf coordinate from the verification response. Each shelf label displays a prominently printed "Check Character" (or check digit) that cannot be deduced by simple visual inspection of the shelf code. The worker must read the physical check character printed on the shelf label into the microphone.',
          'Behind the scenes, the warehouse system calculates this character deterministically using weighted mathematical algorithms.'
        ]
      },
      {
        heading: 'The Store Location Algorithm: Weighted ASCII Modulo 26',
        id: 'store-algorithm',
        paragraphs: [
          'In store stockrooms, locations typically follow a 4-character alphanumeric structure (e.g., "10AK", where "10" denotes the aisle, "A" denotes the bay, and "K" denotes the shelf level).',
          'The algorithm processes each character by its 7-bit ASCII value and applies a position-dependent weight vector: W = [5, 7, 7, 3]. The weights ensure that adjacent digit swaps or single-character substitutions produce distinct mathematical sums.',
          'The mathematical formulation is defined as:'
        ],
        codeBlock: {
          language: 'typescript',
          code: `/**
 * Store Check Character Mathematical Formulation
 *
 * Location: c0, c1, c2, c3 (e.g. '1', '0', 'A', 'K')
 * Position Weights: W = [5, 7, 7, 3]
 *
 * Sum = (ASCII(c0) * 5) + (ASCII(c1) * 7) + (ASCII(c2) * 7) + (ASCII(c3) * 3)
 * Remainder = Sum % 26
 * Check Character = NATO_PHONETIC_ALPHABET[Remainder]
 */

export function calculateStoreCheckChar(location: string): string {
  const chars = location.trim().toUpperCase().substring(0, 4);
  const weights = [5, 7, 7, 3];
  let sum = 0;

  for (let i = 0; i < 4; i++) {
    sum += chars.charCodeAt(i) * weights[i];
  }

  const remainder = sum % 26;
  const NATO = [
    'ALPHA', 'BRAVO', 'CHARLIE', 'DELTA', 'ECHO', 'FOXTROT',
    'GOLF', 'HOTEL', 'INDIA', 'JULIET', 'KILO', 'LIMA',
    'MIKE', 'NOVEMBER', 'OSCAR', 'PAPA', 'QUEBEC', 'ROMEO',
    'SIERRA', 'TANGO', 'UNIFORM', 'VICTOR', 'WHISKEY', 'X-RAY',
    'YANKEE', 'ZULU'
  ];

  return NATO[remainder];
}`,
          caption: 'TypeScript implementation of the Store weighted ASCII modulo 26 calculation.'
        }
      },
      {
        heading: 'Step-by-Step Calculation Walkthrough: Location "10AK"',
        id: 'calculation-walkthrough',
        paragraphs: [
          'Let us trace the exact arithmetic for location "10AK":',
          '• Position 1: Character "1" → ASCII 49 × weight 5 = 245',
          '• Position 2: Character "0" → ASCII 48 × weight 7 = 336',
          '• Position 3: Character "A" → ASCII 65 × weight 7 = 455',
          '• Position 4: Character "K" → ASCII 75 × weight 3 = 225',
          'Total Sum: 245 + 336 + 455 + 225 = 1,261',
          'Modulo Operation: 1,261 mod 26 = 13',
          'NATO Alphabet Mapping: Index 13 maps to "NOVEMBER".',
          'Therefore, when a picker arrives at shelf "10AK", the printed label displays "NOVEMBER" (or phonetic "N"), confirming exact location alignment.'
        ],
        table: {
          caption: 'Special Store Zone Prefixes and Operational Spoken Conventions',
          headers: ['Prefix Code', 'Operational Zone Name', 'Spoken Voice Convention', 'Example Location'],
          rows: [
            ['J', 'Jewellery', 'JEWELLERY [Bay] [Shelf]', 'J1PG → "JEWELLERY ONE PAPA GOLF"'],
            ['S', 'Security', 'SECURITY [Bay] [Shelf]', 'S1PG → "SECURITY ONE PAPA GOLF"'],
            ['L', 'Linbin (Small Parts Bin)', '[Aisle] LINBIN [Shelf]', 'L10A → "ONE ZERO LINBIN ALPHA"'],
            ['Z', 'Bulk Overstock', '[Aisle] BULK [Shelf]', 'Z10A → "ONE ZERO BULK ALPHA"'],
            ['CA', 'Cash Office', 'CASH OFFICE [Number]', 'CA12 → "CASH OFFICE ONE TWO"'],
            ['CP', 'Collection Point', 'COLLECTION POINT [Number]', 'CP12 → "COLLECTION POINT ONE TWO"'],
            ['RETS', 'Returns Holding', 'Fixed Static Assignment', 'RETS → "OSCAR" (Store) / "FOUR EIGHT" (RFC)']
          ]
        }
      },
      {
        heading: 'The Regional Fulfilment Centre (RFC) Algorithm: Modulo 99',
        id: 'rfc-algorithm',
        paragraphs: [
          'In massive Regional Fulfilment Centres (RFCs), warehouse layouts scale across multiple mezzanine floors and high-bay aisles. RFC locations use a 4-letter alphabetical coordinate system (e.g., "ABCD", "RETS", "ZZZZ").',
          'Rather than mapping to a NATO word, the RFC engine outputs a two-digit spoken number (00 through 98) using an additive base offset of 45 and a modulo 99 operator.',
          'The zero-indexed alphabetical value v_i is computed as ASCII(c_i) - 65, ensuring values range strictly between 0 and 25:'
        ],
        codeBlock: {
          language: 'typescript',
          code: `/**
 * RFC Check Character Formulation
 *
 * Location: 4 letters (e.g. 'R', 'E', 'T', 'S')
 * Letter Value: v_i = ASCII(char) - 65 (0 to 25)
 * Base Offset: 45
 * Position Weights: W = [5, 7, 7, 3]
 *
 * Sum = 45 + (v0 * 5) + (v1 * 7) + (v2 * 7) + (v3 * 3)
 * Check Digit = Sum % 99
 * Format: Spoken tens and units (e.g. 48 -> "FOUR EIGHT")
 */

export function calculateRfcCheckChar(location: string): { checkDigits: string; spokenWords: string } {
  const chars = location.trim().toUpperCase().substring(0, 4);
  const weights = [5, 7, 7, 3];
  let sum = 45; // Base offset constant

  for (let i = 0; i < 4; i++) {
    const letterValue = chars.charCodeAt(i) - 65;
    sum += letterValue * weights[i];
  }

  const checkVal = sum % 99;
  const tens = Math.floor(checkVal / 10);
  const units = checkVal % 10;
  const DIGIT_WORDS = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];

  return {
    checkDigits: checkVal.toString().padStart(2, '0'),
    spokenWords: \`\${DIGIT_WORDS[tens]} \${DIGIT_WORDS[units]}\`
  };
}`,
          caption: 'RFC Modulo 99 calculation with base 45 offset and digit expansion.'
        }
      },
      {
        heading: 'Mathematical Comparison: Luhn vs Modulo 26 vs Modulo 99',
        id: 'comparison',
        paragraphs: [
          'How does this approach compare to standard commercial checksums like the Luhn algorithm (used in ISO/IEC 7812 credit card validation) or ISBN-10 (modulo 11)?',
          '• Luhn Algorithm: Highly effective at detecting single-digit substitutions and adjacent digit transpositions for purely numeric strings, but relies on base-10 doubling and cannot natively handle mixed alphanumeric strings without character map tables.',
          '• Store Modulo 26 with [5, 7, 7, 3] Weights: Tailored specifically for speech interaction. By mapping remainders to the 26 NATO words, it converts an abstract mathematical verification step into an unmistakable acoustic phrase.',
          '• RFC Modulo 99: Expands the remainder space from 26 potential outcomes to 99 potential outcomes (00 to 98), reducing the probability of random accidental collision from 1 in 26 (~3.8%) down to approximately 1 in 99 (~1.01%).'
        ]
      }
    ]
  },
  {
    slug: 'acoustic-confusion-voice-picking-accuracy',
    title: 'Acoustic Confusion in Voice Picking: Mitigating Misrecognition in Industrial Stockrooms',
    subtitle: 'Analyzing Noise Floors, Phonetic Consonant Collisions, and the Engineering of Warehouse Mistake Alerts',
    summary: 'An operational investigation into how ambient warehouse decibels and speech recognition errors cause mis-picks, and how our Voice Confusion Risk system flags acoustic collisions.',
    publishedDate: '2026-10-15',
    lastUpdated: '2026-10-16',
    author: authorProfile,
    category: 'Acoustic Reliability',
    readTimeMinutes: 8,
    tags: ['Acoustic Confusion', 'Speech Recognition', 'Industrial Audio', 'Voice Picking', 'Error Mitigation'],
    relatedProject: {
      title: 'Voice Confusion Risk Reporting System',
      url: '/checkcharacter/',
      label: 'View Voice Confusion Risk Database'
    },
    sections: [
      {
        heading: 'The Industrial Speech Recognition Challenge',
        id: 'industrial-speech',
        paragraphs: [
          'Automatic Speech Recognition (ASR) in an industrial fulfillment center operates under constraints fundamentally different from consumer smart speakers. Pickers wear monaural headsets for 8-hour shifts, often speaking with regional British, European, or international dialects while navigating reverberant warehouse architecture.',
          'Consonants in the English language carry the vast majority of semantic distinctiveness, but their acoustic energy is concentrated in high frequencies (2 kHz to 8 kHz) where warehouse noise—such as steel-wheel carts and pneumatics—is most intense.',
          'When plosive consonants (such as /p/, /b/, /t/, /d/) lose their high-frequency burst signatures in noisy audio channels, the voice terminal’s classification engine can misinterpret an intended phrase without throwing an immediate acoustic error.'
        ],
        callout: {
          type: 'warning',
          text: 'Plosive pairs (/p/ vs /b/ and /t/ vs /d/) share identical mouth shapes (bilabial and alveolar) and differ only in vocal cord voicing onset time, making them vulnerable to industrial noise masking.'
        }
      },
      {
        heading: 'Why Voice Mistake Alerts Matter: The Identical Check Character Hazard',
        id: 'voice-mistake-hazard',
        paragraphs: [
          'The most dangerous failure mode in a voice-directed warehouse occurs when two distinct locations share both acoustic phonetic similarity AND the exact same check character.',
          'Consider two shelves in close proximity: location "10AK" and a hypothetical neighbor location "10BK". If both locations happen to calculate the same check character (e.g. "NOVEMBER"), and a picker mishears or mispronounces the location identifier, the voice terminal will accept the check character without error! The picker proceeds to pick the wrong merchandise from the wrong bay, contaminating inventory records.',
          'To eradicate this operational blind spot, our Check Character engine implements an active "Voice Mistake Alert" scanner (`similarLocations.ts`).'
        ]
      },
      {
        heading: 'Algorithmic Detection of 1-Mistake Neighbors',
        id: 'algorithmic-detection',
        paragraphs: [
          'The detection engine tests every candidate location against two classes of acoustic mistakes:',
          '1. Single-Character Substitution: Systematically replacing each character at positions 0 through 3 with every alphanumeric alternative [0-9, A-Z] to find locations where a single misheard character yields an identical check character.',
          '2. Adjacent Character Transposition: Swapping adjacent digits or adjacent letters (e.g., swapping "01" and "10") to evaluate whether transposed codes generate an identical check digit.',
          'When a candidate location matches the primary location’s check character, the tool displays an alert banner explaining the exact risk (e.g., "10BK produces identical check character NOVEMBER: B heard as A").'
        ],
        codeBlock: {
          language: 'typescript',
          code: `// Verified logic from check-character-by-chandra/src/logic/similarLocations.ts
export function findSimilarLocations(rawInput: string): SimilarLocation[] {
  const location = rawInput.trim().toUpperCase().substring(0, 4);
  const primaryResult = calculateStoreCheckChar(location);
  const targetCheckChar = primaryResult.checkChar;
  const matchesMap = new Map<string, SimilarLocation>();

  // 1. Single-character replacement across all 4 positions
  for (let pos = 0; pos < 4; pos++) {
    for (const char of ALPHANUMERIC_CHARS) {
      const candidate = location.substring(0, pos) + char + location.substring(pos + 1);
      if (candidate !== location && isValidStorePattern(candidate)) {
        const candidateResult = calculateStoreCheckChar(candidate);
        if (candidateResult.checkChar === targetCheckChar) {
          matchesMap.set(candidate, {
            location: candidate,
            spokenText: candidateResult.spokenText,
            checkChar: candidateResult.checkChar,
            reason: \`\${getWordAtPosition(candidate, pos)} heard as \${getWordAtPosition(location, pos)}\`
          });
        }
      }
    }
  }

  // 2. Adjacent character transposition (digits with digits, letters with letters)
  // ... evaluated across positions 0..2
  return Array.from(matchesMap.values());
}`,
          caption: 'Detection logic for acoustic collisions sharing identical check characters.'
        }
      },
      {
        heading: 'Operational Case Study: Zone Words vs Number Classifiers',
        id: 'case-study',
        paragraphs: [
          'A key operational heuristic modeled in the Check Character application involves prefix zone confusions (such as Jewellery "J"). In retail layouts, location "J1PG" is spoken as "JEWELLERY ONE PAPA GOLF". In warehouse voice picking environments where ambient noise masks initial consonants or where words are spoken in rapid succession, speech recognition terminals can confuse zone prefix words with numeric classifiers (such as interpreting "JEWELLERY ONE" as "ZERO ONE", mapping to location "01PG").',
          'Because the Check Character application implements specialized prefix-mapping dictionaries (J -> JEWELLERY, S -> SECURITY, L -> LINBIN, Z -> BULK) and voice-mistake neighbor scanning, associates can verify whether an unexpected validation error stems from an incorrect shelf or an acoustic zone misrecognition.'
        ]
      }
    ]
  },
  {
    slug: 'reverse-lookup-warehouse-indexing-engineering',
    title: 'Reverse Indexing 67,600 Locations: Inverted Index Engineering in TypeScript',
    subtitle: 'Inverting Check Character Formulas Across 67,600 Stockroom Locations for Instant Client-Side Mezzanine Recovery',
    summary: 'How we engineered an inverted index over 67,600 warehouse shelf coordinates in client-side TypeScript to enable instant reverse lookups when shelf labels are missing or damaged.',
    publishedDate: '2026-10-15',
    lastUpdated: '2026-10-16',
    author: authorProfile,
    category: 'Algorithms & Verification',
    readTimeMinutes: 7,
    tags: ['Inverted Index', 'Data Structures', 'TypeScript', 'Reverse Lookup', 'Performance Optimization'],
    relatedProject: {
      title: 'Inverted Index Reverse Lookup',
      url: '/checkcharacter/',
      label: 'Test Reverse Lookup in Live App'
    },
    sections: [
      {
        heading: 'The Missing Label Bottleneck on Warehouse Mezzanines',
        id: 'the-problem',
        paragraphs: [
          'During physical stock audits, replenishments, or peak-season order picking, warehouse operators frequently encounter shelf locations where the physical label has been torn by a metal pallet, scraped off by a rolling tote, or obscured on a high mezzanine tier.',
          'In standard workflows, the forward calculation function is trivial: given a 4-character coordinate, calculate the single check character. However, if a worker is standing in front of an unlabelled shelf and only knows the check character that the voice terminal is requesting, the problem inverts: Find all location coordinates in this aisle that yield check character X.',
          'In standard store stockrooms, standard alphanumeric locations span from aisle "00" to "99", with bays "A" through "Z" and shelves "A" through "Z". The candidate search space for this standard pattern is 100 aisles × 26 bays × 26 shelves = 67,600 distinct locations. (Non-standard operational prefix zones, such as Jewellery "J", Security "S", Linbin "L", Bulk "Z", Cash Office "CA", or Collection Point "CP", follow distinct formatting rules and are evaluated on demand rather than pre-indexed in this 67,600-entry matrix).'
        ]
      },
      {
        heading: 'Why Brute-Force Scanning Fails Frontline Mobile Devices',
        id: 'brute-force-drawbacks',
        paragraphs: [
          'If a mobile web application executes a brute-force calculation across 67,600 locations on every keystroke, mobile CPU cores throttle, JavaScript execution locks the single-threaded UI event loop, and battery life degrades rapidly on shift floor devices.',
          'Instead of on-demand linear search, the solution lies in building an Inverted Index during application idle time and caching the resulting map in browser memory.'
        ]
      },
      {
        heading: 'Architecture of the Precomputed Inverted Index',
        id: 'index-architecture',
        paragraphs: [
          'The inverted index structure maps each of the 26 NATO phonetic check characters to a nested map of aisles, where each aisle contains an array of matching locations:',
          '`Map<CheckCharacter, Map<AisleKey, LocationString[]>>`',
          'By partitioning the inverted index by aisle (`00` to `99`), any subsequent reverse query for a check character like "CHARLIE" executes in constant time O(1) to retrieve the aisle map, allowing pickers to instantly filter candidate shelves to the exact aisle they are standing in.'
        ],
        codeBlock: {
          language: 'typescript',
          code: `// Verified implementation from check-character-by-chandra/src/logic/reverseLookup.ts
export function buildReverseIndex(): Map<string, Map<string, string[]>> {
  if (cachedReverseIndex) return cachedReverseIndex;

  const index = new Map<string, Map<string, string[]>>();
  for (const word of NATO_PHONETIC_ALPHABET) {
    index.set(word, new Map<string, string[]>());
  }

  // Pre-calculate ASCII tables for digits 0..9 and letters A..Z
  const w0 = 5, w1 = 7, w2 = 7, w3 = 3;

  for (let a = 0; a <= 99; a++) {
    const d0 = Math.floor(a / 10), d1 = a % 10;
    const aisleStr = a.toString().padStart(2, '0');
    const sumAisle = (48 + d0) * w0 + (48 + d1) * w1;

    for (let b = 0; b < 26; b++) {
      const sumBay = sumAisle + (65 + b) * w2;

      for (let s = 0; s < 26; s++) {
        const total = sumBay + (65 + s) * w3;
        const remainder = total % 26;
        const checkWord = NATO_PHONETIC_ALPHABET[remainder];

        const aisleMap = index.get(checkWord)!;
        let list = aisleMap.get(aisleStr);
        if (!list) {
          list = [];
          aisleMap.set(aisleStr, list);
        }
        list.push(\`\${aisleStr}\${String.fromCharCode(65 + b)}\${String.fromCharCode(65 + s)}\`);
      }
    }
  }

  cachedReverseIndex = index;
  return index;
}`,
          caption: 'Precomputed inverted index generator covering 67,600 shelf coordinates.'
        }
      },
      {
        heading: 'Memory Footprint and Performance Characteristics',
        id: 'benchmarks-and-memory',
        paragraphs: [
          'Because the calculation relies on mathematical integers and string templates rather than external HTTP API queries, in reproducible local benchmarks on Node.js / V8, generating the complete 67,600-entry inverted index takes approximately 8 to 15 milliseconds, with an allocation delta of approximately 2.8 MB during construction and approximately 2.7 MB of retained in-memory heap after garbage collection.',
          'Because the remainder arithmetic is uniformly distributed across the 26 NATO words, each phonetic character maps to exactly 2,600 locations (26 matches per aisle across 100 aisles). Once cached in memory, subsequent reverse lookups execute in approximately 0.05 to 0.1 milliseconds per query, allowing instant client-side filtering without freezing the UI thread or issuing network requests.'
        ]
      }
    ]
  },
  {
    slug: 'offline-warehouse-web-apps-architecture',
    title: 'Building Resilient Edge Web Applications for Warehouse Environments',
    subtitle: 'Offline-First Architectures, LocalStorage State, Web Speech Synthesis, and Zero-Trust Supabase Incident Tracking',
    summary: 'Architectural strategies for designing web applications that survive metal racking dead zones, featuring local-first storage, Web Speech API fallbacks, and secure crowd-sourced telemetry.',
    publishedDate: '2026-10-15',
    lastUpdated: '2026-10-16',
    author: authorProfile,
    category: 'Systems Architecture',
    readTimeMinutes: 8,
    tags: ['Offline-First', 'Web Speech API', 'Supabase', 'PostgreSQL', 'Cloud Architecture', 'Edge Computing'],
    relatedProject: {
      title: 'Voice Confusion Risk Reporting System',
      url: '/checkcharacter/',
      label: 'Explore Voice Confusion Reporting'
    },
    sections: [
      {
        heading: 'The Warehouse Connectivity Reality',
        id: 'connectivity-reality',
        paragraphs: [
          'Fulfillment centers are hostile wireless radio environments. Dense steel racking systems extending 10 meters into the air, wire-mesh pallet cages, and foil-insulated cladding create severe Faraday cage attenuation.',
          'Frontline workers frequently traverse Wi-Fi dead zones where latency spikes or packet loss reaches 100%. Web applications designed for warehouse productivity cannot rely on constant client-server round trips. An architectural "offline-first" foundation is mandatory.'
        ]
      },
      {
        heading: 'Pure Calculation Decoupling and Local Storage Caching',
        id: 'decoupled-architecture',
        paragraphs: [
          'In the Check Character application, all mathematical formulas (`src/logic/`) are engineered as pure, side-effect-free TypeScript functions. They have zero dependencies on DOM APIs, React state, or network connections.',
          'Recent calculation history and reverse-lookup results are persisted in the browser’s `localStorage` via custom React hooks (`useSearchHistory`). When an associate operates in a dead zone, all previously calculated locations remain accessible instantly without a network connection.'
        ],
        codeBlock: {
          language: 'typescript',
          code: `// Offline search history hook pattern
export function useSearchHistory(key: string, limit: number = 10) {
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const addItem = (item: HistoryItem) => {
    setHistory((prev) => {
      const filtered = prev.filter((h) => h.location !== item.location);
      const updated = [item, ...filtered].slice(0, limit);
      try {
        localStorage.setItem(key, JSON.stringify(updated));
      } catch (e) {
        console.warn('localStorage write failure in offline mode', e);
      }
      return updated;
    });
  };

  return { history, addItem };
}`,
          caption: 'Resilient client-side persistence surviving offline warehouse dead zones.'
        }
      },
      {
        heading: 'Audio Feedback via the Native Web Speech API',
        id: 'web-speech-synthesis',
        paragraphs: [
          'To simulate industrial voice terminals and assist auditory verification, the system uses the browser-native `window.speechSynthesis` API rather than downloading remote audio MP3 files.',
          'The speech synthesizer converts phonetic strings (e.g., "ONE ZERO ALPHA KILO ... NOVEMBER") into localized speech output directly on the device hardware, consuming zero cellular bandwidth and ensuring instant auditory playback even in offline mode.'
        ]
      },
      {
        heading: 'Crowd-Sourced Reporting with Supabase and Row Level Security',
        id: 'supabase-architecture',
        paragraphs: [
          'While calculations run offline, warehouse teams benefit immensely from shared knowledge regarding recurring speech recognition errors. To capture frontline reports without imposing complex authentication hurdles on workers, the Voice Confusion Risk system leverages a Supabase PostgreSQL backend configured with fine-grained Row Level Security (RLS):',
          '• Open Public Submissions: Frontline associates submit misrecognition reports (e.g., location, actual word, heard word, shift notes) without creating individual user accounts.',
          '• Data Normalization & Anti-Duplication: Incoming inputs pass through a strict normalizer that trims whitespace and standardizes casing while explicitly preserving critical alphanumeric distinctions (such as letter "O" vs digit "0" and letter "I" vs digit "1"). Unique database indices prevent duplicate submissions.',
          '• Zero-Trust Moderation: Submitted records default to a `pending` status. A public search interface queries only `approved` incidents, while authenticated supervisors use a dedicated moderator portal to verify and approve community reports.'
        ],
        callout: {
          type: 'tip',
          text: 'Combining client-side offline determinism with asynchronous cloud data synchronization delivers high operational reliability without compromising warehouse security standards.'
        }
      }
    ]
  }
];
