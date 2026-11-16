# Mod Horizon (fan made, by Jerron)

Static site for GitHub Pages. Upload every file in this zip to the repo root (keep `.nojekyll`).
Settings > Pages > Deploy from branch > main / root.

## Edit in config.js
- `launch.package`: the Android package name of Horizon Android. Set it for a real one-tap launch.
  Without it the Launch button tries `horizon://open` and shows an install help dialog if nothing opens.
- `launch.apk`: where people get the app.
- `featured`: how many Horizon registry mods to show (15).
- `registryIndex`: the public Horizon mods index, read live in each visitor's browser.

## Notes
- Registry mods are listed with credit and download from their original release links; nothing is re-hosted.
- Accounts, posts and settings are saved in each visitor's own browser (IndexedDB), so community posts are
  only visible on the device that made them. A shared site needs a backend (Supabase / Firebase).
- Logo: `logo.png` (the official Horizon logo you supplied).
