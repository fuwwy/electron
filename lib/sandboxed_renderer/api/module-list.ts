export const moduleList: ElectronInternal.ModuleEntry[] = [
  {
    name: 'contextBridge',
    loader: () => require('@electron/internal/renderer/api/context-bridge')
  },
  {
    name: 'crashReporter',
    loader: () => require('@electron/internal/renderer/api/crash-reporter')
  },
  {
    name: 'discord',
    loader: () => process._linkedBinding('electron_renderer_discord')
  },
  {
    name: 'ipcRenderer',
    loader: () => require('@electron/internal/renderer/api/ipc-renderer')
  },
  {
    name: 'nativeImage',
    loader: () => require('@electron/internal/renderer/api/native-image')
  },
  {
    name: 'webFrame',
    loader: () => require('@electron/internal/renderer/api/web-frame')
  },
  // The internal modules, invisible unless you know their names.
  {
    name: 'deprecate',
    loader: () => require('@electron/internal/common/api/deprecate'),
    private: true
  }
];

if (BUILDFLAG(ENABLE_DESKTOP_CAPTURER)) {
  moduleList.push({
    name: 'desktopCapturer',
    loader: () => require('@electron/internal/renderer/api/desktop-capturer')
  });
}
