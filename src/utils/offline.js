/* eslint-disable import/prefer-default-export */

import OfflinePlugin from 'offline-plugin/runtime';

const onlineEvent = new CustomEvent('connection:online');
const offlineEvent = new CustomEvent('connection:offline');

export default {
  init() {
    OfflinePlugin.install({
      onUpdating: () => {
        // console.log('SW Event:', 'onUpdating');
      },
      onUpdateReady: () => {
        // console.log('SW Event:', 'onUpdateReady');
        // Tells to new SW to take control immediately
        this.applyUpdate();
      },
      onUpdated: () => {
        // console.log('SW Event:', 'onUpdated');
        // Reload the webpage to load into the new version
        window.location.reload();
      },
      onUpdateFailed: () => {
        // console.log('SW Event:', 'onUpdateFailed');
      },
    });
  },
  addListeners() {
    window.addEventListener('offline', () => {
      // console.log('trigger offline');
      window.dispatchEvent(offlineEvent);
      window.offline = true;
    });

    window.addEventListener('online', () => {
      // console.log('trigger online');
      window.dispatchEvent(onlineEvent);
      window.offline = false;
    });

    if (!navigator.onLine) {
      // console.log('sem internet');
      window.dispatchEvent(offlineEvent);
      setTimeout(() => {
        // console.log('trigger offline onload');
        window.dispatchEvent(offlineEvent);
      }, 50);
    }
  },
};
