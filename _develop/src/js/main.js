import 'picturefill';
import 'smoothscroll-for-websites';
import * as objectFitImages from 'object-fit-images';
import { pathToRegexp } from 'path-to-regexp';

// js/tsどっちでもこんな感じで読めます
import VhController from './utils/logic/vh-controller';
import AnchorLink from './utils/ui/anchor-link';
import DeviceWatcher from './utils/logic/device-watcher';

new VhController();

// break-pointによるPC/SP判別機能。 詳細はdevice-watcher.tsを見てみよう。
new DeviceWatcher();

/*
//  ブランディング重視なサイト等、animationTimeとstepSizeで非常に滑らかにも演出出来る
//  import 'smoothscroll-for-websites';
//  ↓ 書き換え例
import SmoothScroll from 'smoothscroll-for-websites';
SmoothScroll(
  {
    animationTime: 1000,
    stepSize: 50,

    accelerationDelta: 50,
    accelerationMax: 3,
    keyboardSupport: true,
    arrowScroll: 50,
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    touchpadSupport: false,
    fixedBackground: true
  }
)
*/

/**
 * ページによってcode-splitされたJSを振り分ける仕組み
 *
 * @return {any} - module
 */
const getComponent = async () => {
  const pathname = window.location.pathname;

  if (pathToRegexp('/').exec(pathname)) {
    await import(/* webpackChunkName:"index" */ './pages/index/index').then((module) => {
      new module.default();
    });
  }

  /* example
   * https://github.com/pillarjs/path-to-regexp
   * http://forbeslindesay.github.io/express-route-tester/
   * :aaa は何かしか変数のように入るの意。 e.g. /news/1/ => /news/:id/
   * :aaa? は何かしか変数が入るがoptional. e.g. /news/ or /news/1/ => /news/:id?/
   */
  // pathToRegexp('/:id/:test?/').exec(pathname);
  // pathToRegexp('/contact/').exec(pathname);
};
export default class Main {
  constructor() {
    // アンカーリンク。固定ヘッダー分引くとかにも対応している。
    // 使い方はanchor-link.ts参照。
    new AnchorLink();
    objectFitImages();
    getComponent();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
