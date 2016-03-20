var preloader = function() {
  var defaults = {
    loader: '.loader',
    symbol : '.loader__symbol',
    loaderLeft : '.loader__left',
    loaderRight : '.loader__right'
  };
  return {
    init: function (configuration) {
      if(typeof configuration === 'undefined')
        configuration = {};
      config = $.extend(true, defaults, configuration);
      preloader.pulsingA();
      preloader.onload();
    },
    pulsingA: function(){
      var tl = new TimelineLite();
          tl.from(defaults.symbol, 0.6, {autoAlpha: 0, repeat: -1, yoyo: true});
    },
    onload: function() {
      $(window).load(function(){
          var tl = new TimelineLite();
          tl.to(defaults.symbol, 0.3, {autoAlpha: 0});
          tl.to(defaults.loaderLeft, 1, {width: 0, ease: Expo.easeOut});
          tl.to(defaults.loaderRight, 1, {width: 0, ease: Expo.easeOut}, "-=1");
          $(defaults.loader).delay(1100).hide(0);
      });
    }
  };
}();