import Util from '../util';

if (window.MSInputMethodContext && document.documentMode) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js';
  document.body.appendChild(script);
  script.onload = () => {
    try {
      const evt = window.document.createEvent('UIEvents');
      evt.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(evt);
    } catch (e) {}
  };
}

export default class VhController {
  constructor() {
    window.addEventListener('resize', this.onResize, Util.isPassive);
    this.onResize();
  }

  private onResize = (): void => {
    const bodyWidth: number = (document.body && document.body.clientWidth) || 0;
    document.documentElement.style.setProperty('--vw', `${bodyWidth / 100}px`);
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  };
}
