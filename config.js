// Edit this file to change links without touching app.js
window.HZ_CONFIG = {
  featured: 15,                                   // how many registry mods to show
  registryIndex: 'https://horizon-rust.github.io/horizon-mods/index.json',
  registryRepo: 'https://github.com/horizon-rust/horizon-mods',
  registryPage: 'https://playhorizon.dev/mods',
  launcherSite: 'https://playhorizon.dev',
  launch: {
    package: '',        // Android package name of Horizon Android, e.g. 'com.example.horizon'  (needed for a true one-tap launch)
    scheme: 'horizon',  // deep-link scheme used when no package is set: horizon://open
    apk: 'https://github.com/Rayan-XOO/horizon/releases/tag/android-v0.2.4'  // where to get the app if it is not installed
  }
};
