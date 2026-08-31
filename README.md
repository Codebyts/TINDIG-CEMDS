# TINDIG-CEMDS Campaign Website

Static site: HTML5 + Bootstrap 5 (via CDN) + vanilla JavaScript. No build step required.

## How to run
Just open `index.html` in any browser. All pages link to each other via relative paths.

## Structure
- `index.html`, `candidates.html`, `credentials.html`, `gpoa.html`, `pinaglalaban.html`, `about.html`
- `css/style.css` — all custom styling and design tokens (CSS variables for the red/white palette)
- `js/script.js` — shared navbar/footer injection, candidate data + rendering, modal, filtering,
  scroll reveal animations, active-nav highlighting, back-to-top button, mobile nav auto-close
- `assets/images`, `assets/icons`, `assets/logo` — drop real campaign photos and logo files here

## Swapping in real candidate photos
Edit the `candidates` array at the top of `js/script.js`. Each candidate's `image` field points to
a file path under `assets/images/`. Until real photos are added, cards fall back automatically to a
placeholder graphic (see the `onerror` handler in `script.js`).

## Customizing colors
All campaign colors live in `:root` at the top of `css/style.css` — change `--primary-red`,
`--dark-red`, etc. and the whole site updates.
