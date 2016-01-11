var product = function() {
  var defaults = {
    faqQuestion : '.js-q',
    faqContent : '.js-a'
  };
  return {
    init: function (configuration) {
      if(typeof configuration === 'undefined')
        configuration = {};
      config = $.extend(true, defaults, configuration);
      product.toggleFaq();
    },
    toggleFaq: function(){
      $(defaults.faqQuestion).on('click', function(){
          $(this).find(defaults.faqContent).slideToggle();
      });
    }
  };
}();