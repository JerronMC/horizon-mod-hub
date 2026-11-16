// Edit this file to change links without touching app.js
window.HZ_CONFIG = {
  snapshotDate: 'Nov 2026',
  modPage: 'https://playhorizon.dev/mods/',                       // each registry mod page: modPage + id
  iconBase: 'https://horizon-rust.github.io/horizon-mods/icons/', // mod icons: iconBase + id + '.png'
  registryPage: 'https://playhorizon.dev/mods',
  launcherSite: 'https://playhorizon.dev',
  launch: {
    name: 'Horizon Android',
    version: '1.0.1',
    // Android package name. Inferred from the app's file provider (com.goydevv.horizon.documents).
    // If Launch does not open the app, check the real name (adb: pm list packages | grep -i horizon) and fix it here.
    package: 'com.goydevv.horizon',
    scheme: 'horizon',
    apk: 'https://github.com/GoyDevv/Horizon-Android/releases/tag/v1.0.1',
    repo: 'https://github.com/GoyDevv/Horizon-Android',
    discord: 'https://discord.gg/CjyWBu2mC7'
  }
};
