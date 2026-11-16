# Registrika website

A static HTML/CSS/JavaScript website split into editable files.

## Structure

- `index.html` — page markup
- `css/styles.css` — all site styles
- `js/app.js` — interactive site behavior
- `data/site.json` — brand, phone, WhatsApp, email and legal-entity settings
- `favicon.svg` — browser tab icon
- `site.webmanifest` — basic web app metadata

## Deploy

Upload the contents of this folder to the website root on your hosting provider.
Keep the folder structure unchanged.

The site loads `data/site.json` with `fetch()`, so open it through your hosting URL or a local web server.
Opening `index.html` directly as a `file://` URL may block JSON loading in the browser.

## Before publishing

1. Replace the `[to be added]` LLPIN and GSTIN placeholders in `data/site.json` and in the legal footer in `index.html` with verified details.
2. Add your real office address in the contact section of `index.html`.
3. Set `formEndpoint` in `data/site.json` to your working form handler if you want callback submissions to be delivered. It is blank by default, so the form remains in preview mode.
4. Have the CA/CS and regulated-professional wording reviewed by an Indian legal professional. The wording is not a guarantee of regulatory compliance.

## Contact settings

Edit `data/site.json` to update the contact details. Phone and WhatsApp values should include the country code in international format, without spaces for `phoneLink` and `whatsapp`.
