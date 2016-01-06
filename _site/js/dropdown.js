
var dropdown = function() {
  var defaults = {
    submenus : '.dropdown-menu-custom',
    customDropdown: '.custom-dropdown',
    dropdownLink: '.dropdown-menu-custom li',
    button: '.select-button'
  };
  return {
    init: function (configuration) {
      if(typeof configuration === 'undefined')
        configuration = {};
      config = $.extend(true, defaults, configuration);
      // dropdown.showHideDropdown();
      dropdown.showHideDropdown();
      dropdown.updateValue();
    },
    showHideDropdown: function() {

      $.each($(defaults.customDropdown), function(index, element) {

          var subMenu = $(element).find('ul'), tl; // important. make sure the unlisted list items are present. This targets its
    
          if(subMenu.length != 0) {

            tl = new TimelineLite({
              paused:true
            });

            tl.from(subMenu, .2, {
                autoAlpha: 0,
                y: '-10',
            });
      
            element.subMenuAnimation = tl;

            $(element).one('click', function(){
                menuItemOver();
            });

          } // end of if
      });// end of each

      function menuItemOver()
      {
        this.subMenuAnimation.play();
        $(defaults.customDropdown).one("click", menuItemOut);
      }

      function menuItemOut()
      {
        this.subMenuAnimation.reverse();
        $(defaults.customDropdown).one("click", menuItemOver);
      }
    },
    updateValue: function(){
      $(defaults.dropdownLink).click(function () {
          $(this).parents(defaults.customDropdown).find(defaults.button).text($(this).text());
           $(this).parents(defaults.customDropdown).find(defaults.button).val($(this).text());
          // $(this).parents(".input-group-btn").find('.selection').text($(this).text());
          // $(this).parents(".input-group-btn").find('.selection').val($(this).text());
      });
    }
  };
}();


// 1. Custon dropdown that slides out with a nice animation on click DONE
//    1.1 animation preferably tweenmax DONE
// 2. if you click on the object or away the animation reverses itself and goes away DONE
// 3. it only works on this element not every element
// 4. when I click on the dropdown, the parent container updates the value


