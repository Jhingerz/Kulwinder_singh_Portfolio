# Kulwinder Singh — Lifecycle Marketing Portfolio

A responsive, static portfolio website for marketing automation, CRM and customer lifecycle roles. Built with plain HTML, CSS and JavaScript, so it can be uploaded directly to GitHub and hosted using GitHub Pages or Vercel.

## Included

- Responsive portfolio homepage
- Email campaign template sample (`email-template.html`)
- Lifecycle journey case study
- Simulated API-driven campaign execution workflow
- Interactive dashboard using fictional data
- Klaviyo, MoEngage, HubSpot and other certification sections
- Skills, experience metrics and contact section

## Run locally

No build step or package installation is required.

1. Download or clone this repository.
2. Open `index.html` in a browser.

For a local web server, if Python is installed, run this command from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Add to GitHub

1. Create a new repository, for example `kulwinder-lifecycle-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, `email-template.html`, and this README to the repository root.
3. Commit the files.
4. For GitHub Pages, open **Settings → Pages**.
5. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site.

## Personalize before publishing

Search `index.html` and update:
- `kulwindersinghautomation@gmail.com`
- `https://www.linkedin.com/in/kulwindersinghautomation/`
- Employer details, experience dates and reported metrics, as needed
- Certificate titles, completion dates and credential URLs

The portfolio currently describes six Klaviyo certifications and a MoEngage Customer Lifecycle Certification, but does not invent individual certificate names. Add your exact titles and proof links before sharing with recruiters.

## Important accuracy and security notes

- The dashboard numbers are fictional demonstration values, not live ESP data.
- The API workflow is a simulation. It does not send email or call a real ESP API.
- The API code shown is an illustrative pattern, not a provider-specific integration.
- Never commit API keys, access tokens, customer data or confidential employer assets to GitHub.
- The email template contains placeholders for images, URLs, business address and unsubscribe/preferences links. Replace and test these with your ESP's required syntax before sending.
- Confirm all experience metrics and attribution claims before publishing.

## Suggested next improvements

- Add a PDF resume to the repository and link it from the hero section.
- Add sanitized screenshots of actual work only when you have permission.
- Add each certificate's official credential URL.
- Replace demo analytics with a clearly documented case study using anonymized or synthetic data.
