/* globals window */

class Redirect {
  /**
   * Generate a hash in uuid format
   */
  hash() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  /**
   * Generate string with node and redirect on browser
   */
  to(url, milliseconds) {
    milliseconds = milliseconds || 500;
    let output = null;
    const newUrl = `${url}?hash=${this.hash()}`;
    if (typeof (window) === 'undefined') {
      output = newUrl;
    } else {
      output = setTimeout(() => {
        window.location = newUrl;
      }, milliseconds);
    }
    return output;
  }
}

module.exports = new Redirect();
