// Public-facing API methods.
export const syncMethods = new Set([
  'getURL',
  'getTitle',
  'isLoading',
  'isLoadingMainFrame',
  'isWaitingForResponse',
  'stop',
  'reload',
  'reloadIgnoringCache',
  'canGoBack',
  'canGoForward',
  'canGoToOffset',
  'clearHistory',
  'goBack',
  'goForward',
  'goToIndex',
  'goToOffset',
  'isCrashed',
  'setUserAgent',
  'getUserAgent',
  'openDevTools',
  'closeDevTools',
  'isDevToolsOpened',
  'isDevToolsFocused',
  'inspectElement',
  'setAudioMuted',
  'isAudioMuted',
  'isCurrentlyAudible',
  'undo',
  'redo',
  'cut',
  'copy',
  'paste',
  'pasteAndMatchStyle',
  'delete',
  'selectAll',
  'unselect',
  'replace',
  'replaceMisspelling',
  'findInPage',
  'stopFindInPage',
  'downloadURL',
  'inspectSharedWorker',
  'inspectServiceWorker',
  'showDefinitionForSelection',
  'getZoomFactor',
  'getZoomLevel',
  'setZoomFactor',
  'setZoomLevel',
  'sendImeEvent'
]);

export const properties = new Set([
  'audioMuted',
  'userAgent',
  'zoomLevel',
  'zoomFactor',
  'frameRate'
]);

export const asyncMethods = new Set([
  'loadURL',
  'executeJavaScript',
  'insertCSS',
  'insertText',
  'removeInsertedCSS',
  'send',
  'sendToFrame',
  'sendInputEvent',
  'setLayoutZoomLevelLimits',
  'setVisualZoomLevelLimits',
  'print',
  'printToPDF'
]);
