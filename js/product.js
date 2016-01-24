var product = function() {
  var defaults = {
    faqQuestion : '.js-q',
    faqContent : '.product__faq__paragraph',
    faqCaret : '.js-caret'
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
          $(this).find(defaults.faqContent).slideToggle('fast');
          $(this).find(defaults.faqCaret).toggleClass('active');
      });
    }
  };
}();