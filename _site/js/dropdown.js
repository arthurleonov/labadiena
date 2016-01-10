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
    showHideDropdown: function()
    {

        $.each($(defaults.customDropdown), function(index, element)
        {

            var subMenu = $(element).find('ul'), tl; // important. make sure the unlisted list items are present. This targets its

            if(subMenu.length !== 0)
            {
                tl = new TimelineLite({
                    paused: true
                });

                tl.from(subMenu, .2, {
                    autoAlpha: 0,
                    y:         '-10',
                });
            }

            element.subMenuAnimation = tl;

            $(element).on('click', function()
            {
                var isActive = $(element).hasClass('active');

                // Close other dropdowns
                $(defaults.customDropdown).filter('.active').each(function()
                {
                    var $element = $(this);
                    $element.removeClass('active');
                    $element.get(0).subMenuAnimation.reverse();
                });

                // Current dropdown: close if active, open if not
                if(isActive)
                {
                    $(element).removeClass('active');
                    element.subMenuAnimation.reverse();
                }
                else
                {
                    $(element).addClass('active');
                    element.subMenuAnimation.play();
                }
            });

        });

      // function menuItemOver()
      // {
      //   this.subMenuAnimation.play();
      //   $(this).one("click", menuItemOut);
      // }

      // function menuItemOut()
      // {
      //   this.subMenuAnimation.reverse();
      //   $(this).one("click", menuItemOver);
      // }
    },
    updateValue: function(){
      $(defaults.dropdownLink).click(function () {
          $(this).parents(defaults.customDropdown).find(defaults.button).text($(this).text());
          $(this).parents(defaults.customDropdown).find(defaults.button).val($(this).text());
      });
    }
  };
}();


// 1. Custon dropdown that slides out with a nice animation on click DONE
//    1.1 animation preferably tweenmax DONE
// 2. if you click on the object or away the animation reverses itself and goes away DONE
// 3. it only works on this element not every element
// 4. when I click on the dropdown, the parent container updates the value