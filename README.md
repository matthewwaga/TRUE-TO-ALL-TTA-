# True To All (TTA)

A static website for **True To All**, a Nairobi-based streetwear label. Built as a fully client-side site — no backend, no build step, no dependencies to install. Open it or push it straight to GitHub Pages.

## Pages

| Page | Description |
|---|---|
| `index.html` | Home — hero, featured products, brand values |
| `shop.html` | Full catalog with category filters |
| `product.html` | Product detail page (reads `?id=` from the URL) |
| `cart.html` | Cart with quantity controls and an M-Pesa checkout simulation |
| `about.html` | Brand story |
| `contact.html` | Contact form (client-side only, no email sending) |

## Stack

Plain HTML, CSS, and vanilla JavaScript. Cart state is kept in the browser's `localStorage`, so it persists across page loads but is local to each visitor's browser — there is no server or database.

- `assets/style.css` — design system and all page styles
- `assets/products.js` — the product catalog (edit this to add/remove products)
- `assets/cart.js` — cart logic (add/remove/update, totals, toast notifications)
- `assets/main.js` — shared behavior (mobile nav toggle, footer year)

## Running locally

No install needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally for cleaner relative-path behavior:
  ```bash
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000`

## Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit: True To All site"
git branch -M main
git remote add origin https://github.com/kitone-coder/true-to-all.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from branch → main / (root)**. The site will publish at `https://kitone-coder.github.io/true-to-all/`.

## Notes on the M-Pesa checkout

The checkout on `cart.html` **simulates** an M-Pesa STK push (the phone prompt Kenyans see when paying via M-Pesa). It validates the phone number format and shows a realistic pending → confirmed flow, but it does not move real money — there's no Safaricom Daraja API integration here. Wiring up real M-Pesa payments requires a backend (to hold API credentials securely) and Safaricom developer account, which is a natural next step if this becomes a real store.

## Editing the catalog

Add or edit products in `assets/products.js`. Each product needs an `id`, `name`, `cat`, `price` (in KES, number only), `glyph` (short initials used as placeholder art), `stock`, `desc`, `sizes`, `sku`, and `care`. No other file needs to change — shop, home, and product pages all read from this one array.

## License

MIT — see `LICENSE`.
