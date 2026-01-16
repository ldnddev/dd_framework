// init responsive slides
function dd_slider_responsive_slider(element){
  // Slideshow 1
  jQuery(element).responsiveSlides({
    auto: false,
    speed: 0,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
    nav: true,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: true,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    prevText: "",   // String: Text for the "previous" button
    nextText: "",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: ".dd-slider__navigation", // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "dd-slider", // String: Change the default namespace used
    before: function() {},   // Function: Before callback
    after: function() {}     // Function: After callback
  });
  dd_slider_responsive_slider_swipe(element);

}

function dd_slider_responsive_slider_swipe(element) {
  jQuery(element).swipe( {
    swipeLeft: function(){
        jQuery(".dd-slider__nav.next").click();
    },
    swipeRight: function(){
        jQuery(".dd-slider__nav.prev").click();
    }
  });
}

function dd_slider_slick(element) {
  jQuery(element).slick();

  var useScroll = jQuery(element).data('slick-on-scroll');
  if(useScroll) {
    dd_slider_scroll_enabled(element);
  }

  var useNav = jQuery(element).data('slick-use-navigation');
  if(useNav) {
    //slick_prev
    //slick_next
    var elId = jQuery(element).attr('id');
    //unique-number__668c171e210ba
    jQuery('#' + elId + ' .slick_prev').click(function(){
      jQuery(element).slick('slickPrev');
    })

    jQuery('#' + elId + ' .slick_next').click(function(){
      jQuery(element).slick('slickNext');
    })
  }
}

function dd_slider() {
  // set responsiveslider in motion
  if (jQuery('body').find('.dd-slider.-responsiveslides')) {

    jQuery('.dd-slider.-responsiveslides').each(function () {
      dd_slider_responsive_slider(jQuery(this).children('.dd-slider__items'));
    });
  }

  // set slick slider in motion
  if (jQuery('body').find('.dd-slider.-slick')) {
    jQuery('.dd-slider.-slick').each(function () {
      dd_slider_slick(jQuery(this).children('.dd-slider__items'));
    });
  }
}
// Initialize on initial page load
document.addEventListener('DOMContentLoaded', () => {
  dd_slider();
});
