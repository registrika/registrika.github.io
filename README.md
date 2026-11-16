# Registrika

**Business registration and compliance services in India.**

Registrika is a private service-provider website that presents business
registration, tax, trademark, annual-compliance, and licensing
assistance in one place. The website helps visitors explore services,
review indicative professional fees and timelines, and submit an enquiry
for a callback.

> **Important:** Registrika is not a government website and is not
> affiliated with any government department. Registrika is not a CA firm
> or CS firm. Where a service requires work by a regulated professional,
> it is handled by an appropriately qualified and authorised independent
> professional engaged for that purpose. Website content is general
> information, not legal, tax, accounting, or professional advice.

------------------------------------------------------------------------

## Features

-   Responsive landing page for desktop and mobile
-   Service catalogue grouped by business-registration, tax,
    trademark/IP, compliance, and licence categories
-   Service search and category filters
-   Service-detail drawer with inclusions, document checklist, process,
    fees, and indicative timelines
-   Contact and callback enquiry form
-   Phone, email, and WhatsApp contact links
-   Compliance-calendar section
-   Pricing breakdown section
-   FAQ and business-information sections
-   Editable site and contact configuration in JSON
-   Custom SVG favicon and web app manifest

## Project structure

``` text
registrika-site/
├── index.html
├── favicon.svg
├── site.webmanifest
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── data/
    └── site.json
```

## Tech stack

-   HTML5
-   CSS3
-   Vanilla JavaScript
-   JSON configuration
-   SVG favicon

No frontend framework or package installation is required for the static
website.

## Run locally

The website loads `data/site.json` using `fetch()`. For that reason, run
it through a local web server rather than opening `index.html` directly
with a `file://` URL.

### Option 1: Python

From the project directory:

``` bash
python -m http.server 8000
```

Open:

``` text
http://localhost:8000
```

### Option 2: VS Code

1.  Open the project folder in Visual Studio Code.
2.  Start the folder using the Live Server extension.
3.  Open the local URL shown by Live Server.

## Configuration

Edit `data/site.json` to update the business contact details and
settings:

``` json
{
  "brand": "Registrika",
  "phone": "+91 92504 20339",
  "phoneLink": "+919250420339",
  "whatsapp": "919250420339",
  "email": "info@registrika.com",
  "formEndpoint": "",
  "legalEntity": "Registrika Compliance Services LLP",
  "llpin": "[to be added]",
  "gstin": "[to be added]"
}
```

-   `phone` is the human-readable phone number shown on the website.
-   `phoneLink` is the international-format number used by `tel:` links.
-   `whatsapp` is the WhatsApp number with country code and no `+` or
    spaces.
-   `email` is the public contact email.
-   `formEndpoint` is the URL of the form handler. It is blank by
    default.
-   `legalEntity`, `llpin`, and `gstin` hold the legal-entity details.

Keep the JSON valid when editing it. Do not add comments or leave
trailing commas.

## Enquiry form setup

The callback form is not connected to a backend by default. With
`formEndpoint` left blank, the website displays a preview-mode message
and does not submit or store enquiries.

To receive enquiries:

1.  Configure a form endpoint using your chosen form provider or
    backend.
2.  Add that endpoint URL to `formEndpoint` in `data/site.json`.
3.  Confirm that the endpoint accepts the JSON fields submitted by
    `js/app.js`.
4.  Test successful submissions, validation errors, and failure handling
    before launch.
5.  Publish an appropriate privacy notice explaining how enquiry
    information is collected and used.

Do not put private API keys, passwords, or other secrets in frontend
files.

## Deployment

This is a static website and can be hosted on standard web hosting or a
static-site host.

1.  Upload the contents of this project directory to the website's
    document root (for example, `public_html`).
2.  Preserve the folder structure and file names.
3.  Confirm that `index.html`, `css/`, `js/`, and `data/` are in the
    same published root.
4.  Open the live website and test the navigation, search, service
    details, contact links, and enquiry form.
5.  Confirm that the host serves JSON files correctly.

## Pre-launch checklist

-   [ ] Replace the LLPIN placeholder with the verified LLPIN.
-   [ ] Replace the GSTIN placeholder with the verified GSTIN, if
    applicable.
-   [ ] Add the correct registered office address.
-   [ ] Verify the phone number, email address, and WhatsApp
    destination.
-   [ ] Connect and test the enquiry form endpoint.
-   [ ] Review service descriptions, fees, taxes, and timelines for
    accuracy.
-   [ ] Check statutory due dates and update them when required.
-   [ ] Add final Privacy Policy, Terms of Use, and Refund Policy pages
    and link them.
-   [ ] Review all legal and professional-services wording with an
    Indian legal professional.
-   [ ] Test the site on mobile, tablet, and desktop.
-   [ ] Check accessibility, keyboard navigation, and form validation.
-   [ ] Add analytics or tracking only if required and disclose it
    appropriately.

## Legal and service information

Registrika is presented as a private service provider. Government
application decisions, approvals, registrations, and statutory timelines
are determined by the relevant authorities and may vary. Any prices or
timelines shown on the website should be treated as indicative unless
confirmed in writing for a specific engagement.

The disclaimer on the website is not a substitute for legal review and
does not by itself establish regulatory compliance. Ensure that all
services are delivered in accordance with applicable Indian laws and
professional rules.

## Repository maintenance

When changing the site:

-   Keep contact details centralised in `data/site.json`.
-   Keep styling in `css/styles.css`.
-   Keep interactive behaviour in `js/app.js`.
-   Keep page structure and content in `index.html`.
-   Test the complete site after every change.

## License

No open-source license is specified in this repository. Unless a license
is added, the source code should not be assumed to be available for
reuse, redistribution, or modification by third parties.
