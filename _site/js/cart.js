var cart = function() {
  var defaults = {
    cartWrapper : '.js-cartWrapper',
    cartContainer : '.cart__container',
    cartOpen : '.js-cartToggle',
    cartClose : '.js-cartclose',
    cartBin: '.js-cartBin',
    body: '.js-body'
  };
  return {
    init: function (configuration) {
      if(typeof configuration === 'undefined')
      configuration = {};
      config = $.extend(true, defaults, configuration);
      cart.openClose();
      cart.appendNew();
    },
    openClose: function() {
      // initiate timelinelite aniamtion engine
      var tl = new TimelineLite({paused: true, yoyo: true});

      // target containers for animation
      tl.to(defaults.cartWrapper, 0.5, {x: "0px"});

        // run reverse animation if you click anywhere on the document except cartContiner
        $('html').click(function(event) {
          if (!$(event.target).closest(defaults.cartWrapper).length) {
              tl.reverse();
          }
        });

        // run play animation when you click on the cart buttons
        $(defaults.cartOpen).click(function(event){
          event.stopPropagation();
          tl.play();
        });

        // // run reverse animation when you click on the close buttons
        // $(defaults.cartClose).click(function(){
        //   tl.reverse();
        // });
    },
    appendNew: function() {
      var name = $('.js-name').text();
      var price = $('.js-price').text();
      var image = $('js-image').attr('src');
      
      $(defaults.cartOpen).on('click', function(){ 
        $(defaults.cartContainer).append('<div class="row cart__items"> <div class="col-xs-4"> <img class="img-responsive" src="' + image + '"></img></div><div class="col-xs-6"><h4>' + name + '</h4><p>'+ price +'</p></div><div class="col-xs-2"><i class="fa fa-trash-o cart__bin js-cartBin"></i></div></div>');
      });

      $(defaults.cartContainer).on('click', defaults.cartBin, function(){
          $(this).closest('.cart__items').remove();
      });
    }
  };
}();

// i need the document on click function to run only after I clicked on the cartopen


// To make a cart I need:
//  1. on click to proceed the position of the item needs to slide out. [DONE]
//  1.1 as the slide happens the container screen needs to dim
//  2. when I click on the cart icon the cart should run the slideout animation. [DONE]
//  3. when I click on the x, and anywhere else the animation should reverse [DONE]
//  4. get the value of the name and price and size and store it inside variables
//  5. append a new row with information from the variables