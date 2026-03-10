# Cebuano Expo QR Display Workspace

This workspace gives you two layers:

1. **Stable QR URL** using GitHub Pages as the public landing page.
2. **Nice fullscreen display page** for your second monitor, instead of opening the Photos app.

## Folder contents

- `index.html` — the stable public redirect page for your QR code.
- `display.html` — the nice fullscreen QR screen for the expo booth.
- `settings.js` — the only file you usually edit when the backend URL changes.
- `styles.css` — shared styling.
- `scripts/app.js` — redirect logic for the public landing page.
- `scripts/display.js` — booth display logic.
- `assets/qr-placeholder.svg` — replace this with your final QR image.

---

## Recommended architecture

### Layer 1: Stable public URL
Point the QR code to this GitHub Pages URL:

```text
https://YOUR_GITHUB_USERNAME.github.io/cebuano-demo-link/
```

That URL stays fixed.

When your real backend changes, edit only this line in `settings.js`:

```js
destinationUrl: "https://YOUR_CURRENT_BACKEND_URL_HERE/",
```

Then commit and push.

The QR image stays the same because it still points to the GitHub Pages URL, not the raw server URL.

### Layer 2: Local fullscreen booth screen
Open `display.html` on your expo laptop and put it in fullscreen on the second monitor.

It shows:
- a clean title
- instructions
- sample phrases
- the QR image
- the manual URL fallback

---

## Setup steps

## 1) Create a GitHub repository
Suggested repo name:

```text
cebuano-demo-link
```

## 2) Upload these files to the repo root
Commit and push the workspace.

## 3) Enable GitHub Pages
In your repository:

- Go to **Settings**
- Open **Pages**
- Set **Build and deployment** to deploy from your main branch root

Your public URL will be something like:

```text
https://YOUR_GITHUB_USERNAME.github.io/cebuano-demo-link/
```

## 4) Edit `settings.js`
Replace these placeholders:

- `stableUrl`
- `destinationUrl`

Example:

```js
stableUrl: "https://kylegregoryibo.github.io/cebuano-demo-link/",
destinationUrl: "https://my-live-demo-domain.com/",
```

## 5) Generate the QR code once
Use your third-party QR generator and point it to the **stableUrl**, not the raw backend.

Then save the PNG as:

```text
assets/qr-placeholder.svg
```

You can rename the file in code if you want, but the default setup already looks for that name.

## 6) Re-publish after backend changes
If your backend changes, only update `destinationUrl` in `settings.js`, then push again.

Do **not** regenerate the QR unless you intentionally change the stable public URL.

---

## Optional but strongly recommended: custom domain
GitHub Pages gives you a stable URL, but not a truly short one.

If you want a cleaner QR target, use a custom domain such as:

```text
go.kyleibo.com
scan.kyleibo.com
trybisaya.com
```

In that case:
- point the domain to GitHub Pages
- set the custom domain in repository Pages settings
- keep the same QR forever

Then your QR can point to:

```text
https://go.kyleibo.com
```

That is the best version of this setup.

---

## Expo usage workflow

### Public side
Visitors scan the QR.

They hit the GitHub Pages landing page first.

That page auto-redirects them to the current live backend.

### Booth side
You open `display.html` locally on the second monitor.

That page is only for presentation and scanning.

---

## Fast local launch on Windows
You can open the booth screen directly in Edge fullscreen.

Example command:

```powershell
start msedge.exe "file:///C:/PATH/TO/cebuano-qr-display/display.html"
```

Then press `F11`.

If you want Chrome instead:

```powershell
start chrome.exe "file:///C:/PATH/TO/cebuano-qr-display/display.html"
```

---

## Very important operational note
The local booth screen does not care if your backend changes.
Only the public GitHub Pages redirect page needs the new destination.

That is the whole point of the two-layer design.

---

## Suggested booth text

**Scan to Try the Demo**

Try speaking Cebuano and see the AI turn speech into text.

Suggested phrases:
- Maayong buntag.
- Kumusta ka?
- Ganahan ko motry ani nga sistema.
- Nindot unta kung makasabut ang AI sa Cebuano.




git add settings.js
git commit -m "Update destination URL"
git push