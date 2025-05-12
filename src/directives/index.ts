import { lazy } from './lazy';

import type { App } from 'vue';
export default(app: App) => {
  app.directive('lazy', lazy);
}