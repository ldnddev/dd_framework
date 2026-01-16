function dd_scrolltop() {
  /**
  * trigger for window scroll and any functions that need to run based on scroll
  * depth or visibility during scroll.
  **/
   jQuery(window).scroll(function () {
    if (this.scrollTO) clearTimeout(this.scrollTO);
    this.scrollTO = setTimeout(function () {
      jQuery(this).trigger('scrollEnd');
    }, 0);
  });
  jQuery(window).bind('scrollEnd', () => {
    scrollTop = jQuery(window).scrollTop();
    // Back to the top of page quick link.
    if (scrollTop > 5) {
      jQuery('.dd-scrolltop').addClass('-active');
    }
    else if (scrollTop < 5) {
      jQuery('.dd-scrolltop').removeClass('-active');
    }
  });
}
// Initialize on initial page load
document.addEventListener('DOMContentLoaded', () => {
  dd_scrolltop();
});
