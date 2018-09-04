if (typeof window !== `undefined`) {
  window.onload = function() {
    var WebFont = require('webfontloader');

    WebFont = {
      typekit: { google: 'Roboto' },
    };

    (function(d) {
      var wf = d.createElement('script'),
        s = d.scripts[0];
      wf.src =
        'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
  };
}
