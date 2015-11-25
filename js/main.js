
var menu = function() {
  var defaults = {
 	menu: '.js-menu',
 	menuContainer: '.menu-container',
 	menuItems: '.js-menu-items h3',
  topBar: '.js-topBar',
  navIcons: '.top-nav-icons'
  };
  return {
    init: function (configuration) {
      if(typeof configuration === 'undefined')
      configuration = {};
      config = $.extend(true, defaults, configuration);
      menu.openCloseMenu();
      menu.menuOverlayAndScoll();
      // menu.stopScroll();
      // menu.productHover();
      
    },
    openCloseMenu: function() {

    	var tl = new TimelineMax({
  		  paused: true,
  		  reversed: true,
		  }); // set new timelinemax


    	// container animation
		tl.from(defaults.menuContainer, 0.8, {
		    y: '-500',
        autoAlpha: 0,
		    force3D: true,
		    ease: Expo.easeOut
		  });
		  // text animation 

		tl.from(defaults.menuItems, 0.4, {
		  y: '-200',
		  autoAlpha: 0,
		  force3D: true,
		  ease: Expo.easeOut
		}, '-=0.5');

		// toggle animation
    	$(defaults.menu).on('click', function(){

          tl.reversed() ? tl.play():tl.reverse(); // gsap animation play and reverse
  
    	});
    },
    productHover: function() {
    	$('.js-hover').hover(function(e) {
           $(this).find('.js-item-hover').addClass('hover');
           $(this).find('.product').addClass('hover');
            }, function(){
               $(this).find('.js-item-hover').removeClass('hover');
               $(this).find('.product').removeClass('hover');
      	});
    },
    menuScrollOverlay: function() {

      $(defaults.menu).on('click', function(){

          $(defaults.menuContainer).toggleClass('js-menu-active');
        
          $(defaults.navIcons).find('.menu-bar').toggleClass('menu-bar-white');

          $(defaults.navIcons).find('.logo').toggleClass('logo-white');

          $(this).toggleClass('toggled');
          
      }); // toggle color change from black to white

      if($(defaults.menuContainer).hasClass('js-menu-active')){
          $(defaults.topBar).removeClass('topBar-white');      
        }; // remove the white frame from the top nav.

      $(document).scroll(
          function() {
            if($(document).scrollTop() >= 100) {
              $(defaults.topBar).addClass('topBar-white');
            } else {
               $(defaults.topBar).removeClass('topBar-white');
            }
          }
      ); // change frame background on scroll
    }   
  };
}();

