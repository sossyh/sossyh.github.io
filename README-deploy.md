# sossyh.github.io — files checklist

Everything goes in the **repo root**, next to `index.html`.
GitHub Pages is case-sensitive, so filenames must match exactly.

## Replace these (new versions provided)

| File | What it is |
|---|---|
| `index.html` | Main page |
| `writing.html` | Writing page |
| `styles.css` | All styling, both pages |
| `main.js` | Theme toggle, mobile menu, nav highlighting |
| `cv.pdf` | Your current CV |

## Add these (new image files)

| File | Used by |
|---|---|
| `paper-cxr.png` | MICAD chest X-ray paper |
| `paper-viterbi.png` | ICAART Viterbi paper |
| `paper-subtrust.png` | HCII SubTrust proposal |
| `paper-stress.png` | Stress detection manuscript |
| `project-ffa.png` | Neuromatch face-selective ablation |
| `project-voiceshield.png` | Amharic threat detection |

## Keep what is already in your repo

These are referenced but not regenerated here, so leave the existing
copies in place:

- `photo.png` — your portrait
- `favicon.ico`
- `favicon-16.png`
- `favicon-32.png`
- `apple-touch-icon.png`

If any of these are missing the page still loads; you just lose the
portrait or the tab icon.

## After pushing

1. Wait a minute or two for the Pages build to finish.
2. Check the live site in an incognito window, not your normal one.
   Browsers cache hard, and that is what caused the "still showing the
   old site" problem.
3. The CSS and JS links carry `?v=19`. If you edit `styles.css` or
   `main.js` later and the change does not appear, bump that number in
   both `index.html` and `writing.html`.
4. The CV link carries `?v=2026-10`. Bump that date whenever you
   replace `cv.pdf`, or returning visitors keep seeing the old one.

## Still to fill in

- **Google Scholar.** Create a profile at scholar.google.com with your
  gwu.edu address, then uncomment the Google Scholar line in
  `index.html` and paste the URL in. Search for `PASTE_SCHOLAR_URL_HERE`.
- **arXiv link.** Once the stress detection preprint is announced you
  get an id like `arXiv:2610.01234`. Uncomment the arXiv line in the
  publications section and paste `https://arxiv.org/abs/<that id>`.
  Search for `PASTE_ARXIV_URL_HERE`.
- **Code links.** Two entries point at your GitHub profile rather than
  specific repos. Swap in the real repo URLs when they are public.
