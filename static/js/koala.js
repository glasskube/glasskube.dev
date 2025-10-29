(function () {
  const k = 'ko',
    i = (window.globalKoalaKey = window.globalKoalaKey || k);
  if (window[i]) return;
  const ko = (window[i] = []);
  [
    'identify',
    'track',
    'removeListeners',
    'on',
    'off',
    'qualify',
    'ready',
  ].forEach(function (t) {
    ko[t] = function () {
      var n = [].slice.call(arguments);
      return (n.unshift(t), ko.push(n), ko);
    };
  });
  const n = document.createElement('script');
  n.async = !0;
  n.setAttribute(
    'src',
    'https://cdn.getkoala.com/v1/pk_65d1fa2b228d1a15e6cbd8f9476a369bb5c1/sdk.js',
  );
  (document.body || document.head).appendChild(n);
})();
