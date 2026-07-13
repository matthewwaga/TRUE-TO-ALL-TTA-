/* TRUE TO ALL — Product Catalog
   Static data source, no backend required.
   Each product carries an "art" field: an inline SVG technical flat sketch
   (the line-art spec drawing style used on real cut sheets) matching
   that specific garment — in place of a stock photo. */

const TTA_PRODUCTS = [
  {
    id: "tta-001",
    name: "Kilimani Boxy Hoodie",
    cat: "Hoodies",
    price: 4500,
    stock: "In Stock",
    desc: "Heavyweight 400gsm fleece, boxy cut, dropped shoulder. Screen-printed hang-tag graphic on the chest, embroidered eyelet logo on the sleeve.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sku: "TTA-HD-001",
    care: "Cold wash, line dry",
    art: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 95 L60 80 Q60 60 80 55 L95 45 Q120 33 145 45 L160 55 Q180 60 180 80 L180 95 L205 110 L205 145 L180 132 L180 215 L60 215 L60 132 L35 145 L35 110 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <path d="M95 45 Q120 68 145 45" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <line x1="106" y1="62" x2="102" y2="102" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="4 3"/>
      <line x1="134" y1="62" x2="138" y2="102" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="4 3"/>
      <circle cx="102" cy="105" r="3" fill="var(--stitch)"/>
      <circle cx="138" cy="105" r="3" fill="var(--stitch)"/>
      <rect x="93" y="155" width="54" height="34" rx="5" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: "tta-002",
    name: "Ngong Cargo Pants",
    cat: "Bottoms",
    price: 3800,
    stock: "In Stock",
    desc: "Ripstop cotton cargos with a tapered leg and six utility pockets. Adjustable drawcord waist, reinforced stitching at stress points.",
    sizes: ["30", "32", "34", "36", "38"],
    sku: "TTA-CG-002",
    care: "Machine wash cold, inside out",
    art: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <rect x="63" y="42" width="114" height="18" rx="4" fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3"/>
      <path d="M65 60 L65 205 L104 205 L108 108 L120 90 L132 108 L136 205 L175 205 L175 60 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <rect x="70" y="130" width="34" height="26" rx="3" fill="none" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="3 3"/>
      <rect x="136" y="130" width="34" height="26" rx="3" fill="none" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="3 3"/>
      <line x1="120" y1="60" x2="120" y2="90" stroke="var(--ink)" stroke-width="2"/>
    </svg>`
  },
  {
    id: "tta-003",
    name: "254 Graphic Tee",
    cat: "Tees",
    price: 2200,
    stock: "In Stock",
    desc: "Mid-weight 220gsm combed cotton. Puff-print numeral graphic across the chest, ribbed crew neck, double-stitched hem.",
    sizes: ["S", "M", "L", "XL"],
    sku: "TTA-TE-003",
    care: "Cold wash, do not tumble dry",
    art: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <path d="M70 72 L95 55 Q120 72 145 55 L170 72 L197 92 L180 112 L170 102 L170 208 L70 208 L70 102 L60 112 L43 92 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <path d="M95 55 Q120 78 145 55" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <rect x="95" y="110" width="50" height="42" rx="4" fill="none" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="3 3"/>
      <text x="120" y="138" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700" fill="var(--ink)" text-anchor="middle">254</text>
    </svg>`
  },
  {
    id: "tta-004",
    name: "Matatu Route Cap",
    cat: "Headwear",
    price: 1800,
    stock: "Low Stock",
    desc: "Structured 6-panel cap with a curved brim. Woven route-number label at the back strap, embroidered front patch.",
    sizes: ["One Size"],
    sku: "TTA-CP-004",
    care: "Spot clean only",
    art: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <path d="M55 150 Q55 78 122 70 Q175 74 182 122 L182 150 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <path d="M182 138 Q222 136 228 150 Q222 164 182 156 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <path d="M122 70 L118 150" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="3 3"/>
      <path d="M90 78 Q95 115 92 150" fill="none" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="3 3"/>
      <path d="M155 78 Q150 115 152 150" fill="none" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="3 3"/>
      <rect x="95" y="105" width="40" height="26" rx="3" fill="none" stroke="var(--ink)" stroke-width="2"/>
    </svg>`
  },
  {
    id: "tta-005",
    name: "Karura Windbreaker",
    cat: "Outerwear",
    price: 5200,
    stock: "In Stock",
    desc: "Lightweight water-resistant shell with a packable hood. Taped seams, zippered chest pocket, reflective hang-tag hem print.",
    sizes: ["S", "M", "L", "XL"],
    sku: "TTA-OW-005",
    care: "Wipe clean, do not iron",
    art: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 95 L60 80 Q60 60 80 55 L95 45 Q120 33 145 45 L160 55 Q180 60 180 80 L180 95 L205 110 L205 145 L180 132 L180 215 L60 215 L60 132 L35 145 L35 110 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <path d="M95 45 Q120 68 145 45" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <line x1="120" y1="60" x2="120" y2="212" stroke="var(--ink)" stroke-width="2.5"/>
      <circle cx="120" cy="75" r="3.5" fill="var(--stitch)"/>
      <rect x="132" y="95" width="28" height="22" rx="3" fill="none" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="3 3"/>
      <line x1="140" y1="106" x2="152" y2="106" stroke="var(--stitch)" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: "tta-006",
    name: "Uhuru Track Jacket",
    cat: "Outerwear",
    price: 4800,
    stock: "In Stock",
    desc: "Full-zip track jacket in brushed tricot. Contrast side stripes, ribbed cuffs and hem, embroidered wordmark at the chest.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sku: "TTA-JK-006",
    care: "Cold wash, hang dry",
    art: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <path d="M62 92 L62 78 Q62 62 82 58 L95 50 L120 58 L145 50 L158 58 Q178 62 178 78 L178 92 L203 108 L203 143 L178 130 L178 212 L62 212 L62 130 L37 143 L37 108 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <path d="M95 50 L120 66 L145 50" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <line x1="120" y1="66" x2="120" y2="210" stroke="var(--ink)" stroke-width="2.5"/>
      <path d="M62 100 L45 138 L62 205" fill="none" stroke="var(--stitch)" stroke-width="4" stroke-linecap="round"/>
      <path d="M178 100 L195 138 L178 205" fill="none" stroke="var(--stitch)" stroke-width="4" stroke-linecap="round"/>
      <line x1="62" y1="200" x2="178" y2="200" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="2 3"/>
    </svg>`
  },
  {
    id: "tta-007",
    name: "Origin Crewneck",
    cat: "Sweaters",
    price: 3600,
    stock: "In Stock",
    desc: "Loopback cotton crewneck with a raw-edge collar finish. Minimal ink-stamp graphic at the lower back.",
    sizes: ["S", "M", "L", "XL"],
    sku: "TTA-CR-007",
    care: "Cold wash, line dry",
    art: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <path d="M62 95 L62 80 Q62 62 82 57 L98 48 Q120 40 142 48 L158 57 Q178 62 178 80 L178 95 L203 112 L203 145 L178 133 L178 212 L62 212 L62 133 L37 145 L37 112 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <ellipse cx="120" cy="58" rx="22" ry="10" fill="var(--canvas)" stroke="var(--ink)" stroke-width="2.5"/>
      <line x1="62" y1="200" x2="178" y2="200" stroke="var(--stitch)" stroke-width="1.5" stroke-dasharray="2 3"/>
      <line x1="37" y1="120" x2="37" y2="140" stroke="var(--stitch)" stroke-width="1.5" stroke-dasharray="2 3"/>
      <line x1="203" y1="120" x2="203" y2="140" stroke="var(--stitch)" stroke-width="1.5" stroke-dasharray="2 3"/>
    </svg>`
  },
  {
    id: "tta-008",
    name: "Nyayo Cargo Shorts",
    cat: "Bottoms",
    price: 2800,
    stock: "In Stock",
    desc: "Above-knee ripstop shorts with cargo pockets and an elasticated back waist for movement.",
    sizes: ["S", "M", "L", "XL"],
    sku: "TTA-SH-008",
    care: "Machine wash cold",
    art: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <rect x="63" y="60" width="114" height="18" rx="4" fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3"/>
      <path d="M65 78 L65 168 L104 168 L108 118 L120 100 L132 118 L136 168 L175 168 L175 78 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <rect x="140" y="105" width="30" height="24" rx="3" fill="none" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="3 3"/>
      <line x1="120" y1="78" x2="120" y2="100" stroke="var(--ink)" stroke-width="2"/>
      <line x1="70" y1="150" x2="100" y2="150" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="2 3"/>
      <line x1="140" y1="150" x2="170" y2="150" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="2 3"/>
    </svg>`
  },
  {
    id: "tta-009",
    name: "Hang-Tag Crossbody",
    cat: "Accessories",
    price: 2400,
    stock: "In Stock",
    desc: "Compact utility crossbody bag shaped like an oversized swing tag, complete with an eyelet grommet strap anchor.",
    sizes: ["One Size"],
    sku: "TTA-AC-009",
    care: "Wipe clean",
    art: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <path d="M115 40 L190 100 Q198 108 190 118 L130 195 Q120 205 110 195 L45 130 Q37 122 45 112 L95 47 Q100 40 115 40 Z"
        fill="var(--canvas-dim)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="112" cy="65" r="10" fill="var(--canvas)" stroke="var(--ink)" stroke-width="3"/>
      <circle cx="112" cy="65" r="4" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="1.5 2"/>
      <path d="M112 65 Q40 30 20 90" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>
      <path d="M75 110 L145 175" stroke="var(--stitch)" stroke-width="2" stroke-dasharray="3 3"/>
      <rect x="95" y="125" width="45" height="32" rx="4" fill="none" stroke="var(--ink)" stroke-width="2" transform="rotate(-8 117 141)"/>
    </svg>`
  }
];

function formatKES(amount){
  return "KES " + amount.toLocaleString("en-KE");
}
