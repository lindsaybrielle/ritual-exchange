# Ritual Exchange

Draw a random human ritual and a random civil-service work process. Take one
thing worth borrowing from the ritual, and sketch how it would actually work
in the process. Anyone can use it without an account; answers and new
rituals/processes go onto a shared board everyone sees live.

This is a static site (`index.html` + `app.js`) with [Firebase
Firestore](https://firebase.google.com/products/firestore) as the pooled,
sign-in-free backend. Two things need doing once before it works: create the
Firebase project, and turn on GitHub Pages.

## 1. Create a free Firebase project

1. Go to the [Firebase console](https://console.firebase.google.com) and
   click **Add project**. Name it anything (e.g. `ritual-exchange`). You can
   decline Google Analytics — not needed.
2. In the new project, go to **Build → Firestore Database → Create
   database**. Choose **Start in production mode**, pick a region close to
   your users (e.g. `europe-west2` for London), and create it.
3. Go to **Build → Authentication → Get started**, open the **Sign-in
   method** tab, and enable **Anonymous**. This lets visitors write to the
   shared board without ever seeing a sign-in screen.
4. Go to **Project settings** (gear icon, top left) → **General** tab →
   scroll to **Your apps** → click the web icon (`</>`) → give it any
   nickname → **Register app**. Firebase shows you a `firebaseConfig`
   object — copy it.
5. Paste those values into `firebase-config.js` in this repo, replacing the
   `PASTE_...` placeholders, and commit the change.
6. Back in Firestore, open the **Rules** tab, replace the contents with
   everything in `firestore.rules` in this repo, and click **Publish**.
   These rules let anyone read the board and add one entry at a time, but
   nobody can edit or delete someone else's entry.

Firebase's free "Spark" plan gives 50,000 reads and 20,000 writes a day,
which comfortably covers a team exercise like this.

## 2. Turn on GitHub Pages

In this repo: **Settings → Pages → Build and deployment → Source: "Deploy
from a branch"** → select the `main` branch and `/ (root)` folder → **Save**.
GitHub gives you a live URL (usually
`https://<your-username>.github.io/ritual-exchange/`) within a minute or two.

## Notes

- `index.html` / `app.js` — the app itself; the ritual and process content
  lives in `app.js`.
- `firebase-config.js` — your project's public config. This key is meant to
  be public (it identifies the project, not a secret); the Firestore rules
  are what actually control access.
- Submissions and any rituals/processes people add through the app are
  append-only — the app never edits or deletes anyone's entry.
- If Firebase isn't reachable for a visitor (offline, or a privacy extension
  blocking it), the app falls back to local-only mode automatically: they
  can still use it and copy their answer to share another way.
