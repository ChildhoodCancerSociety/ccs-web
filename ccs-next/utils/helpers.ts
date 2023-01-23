/**
 * Async sleep function
 * NOTE: *DONT USE THIS*
 *
 * @param {number} ms number of ms to put thread to sleep
 * @returns {void}
 */
export const sleep = async (ms: number): Promise<void> => new Promise((res) => {
  setTimeout(res, ms);
});

export const noop = () => {};
export const emptyString = () => "";

// taken without remorse from https://github.com/juliangruber/is-mobile/blob/main/index.js
// eslint-disable-next-line max-len
const mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
const notMobileRE = /CrOS/;
const tabletRE = /android|ipad|playbook|silk/i;
export const isMobile = (opts: {
  ua?: string;
  tablet?: boolean;
  featureDetect?: boolean;
} = {}) => {
  let { ua } = opts;
  if (!ua && typeof navigator !== "undefined") ua = navigator.userAgent;
  if (typeof ua !== "string") return false;

  let result = (mobileRE.test(ua) && !notMobileRE.test(ua)) || (!!opts.tablet && tabletRE.test(ua));

  if (
    !result
    && opts.tablet
    && opts.featureDetect
    && navigator
    && navigator.maxTouchPoints > 1
    && ua.indexOf("Macintosh") !== -1
    && ua.indexOf("Safari") !== -1
  ) {
    result = true;
  }

  return result;
};

/**
 *
 * @param func debounce function
 * @param wait time to wait, defaults to 166ms which is ~10 frames at 60Hz
 * @param immediate whether to call the debounce function immediately
 * @returns
 */
export const debounce = (func: Function, wait = 166, immediate = false) => {
  let timeout: undefined | number | NodeJS.Timeout;
  function debounced() {
    // @ts-ignore
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    const later = function () {
      timeout = undefined;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
};

export function NullComponent() {
  return null;
}
