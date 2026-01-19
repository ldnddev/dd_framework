// function that will escape all HTML chars from the passed element and add the output to the proper code element: AI!
function escape_code_block() {
  // Find all <code> elements
  document.querySelectorAll('code').forEach(codeBlock => {
    // Skip if already processed (prevents double-wrapping)
    if (codeBlock.dataset.enhanced) return;
    codeBlock.dataset.enhanced = 'true';

    // Get the original raw content (before we escape it)
    const originalContent = codeBlock.innerHTML;

    // Escape it so it displays correctly as text
    const escaped = originalContent
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#039;');

    // Create wrapper for positioning
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block'; // or 'block' if you prefer full-width
    wrapper.style.width = '100%';

    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    copyBtn.style.position = 'absolute';
    copyBtn.style.top = '6px';
    copyBtn.style.right = '8px';
    copyBtn.classList.add("-ghost");
    copyBtn.style.zIndex = '10';

    // Copy functionality
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(originalContent)
        .then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          copyBtn.style.backgroundColor = '#d4edda';
          setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.backgroundColor = '#f0f0f0';
          }, 1800);
        })
        .catch(err => {
          console.error('Copy failed:', err);
          copyBtn.textContent = 'Copy failed';
        });
    });

    // Replace content with escaped version
    codeBlock.innerHTML = escaped;

    // Wrap the code block and add button
    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);
    wrapper.appendChild(copyBtn);
  });
}



/**
* all document ready functions
**/
document.addEventListener('DOMContentLoaded', () => {

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  escape_html();

});

// Fire axe after HTMX settles
document.body.addEventListener("htmx:afterSettle", function (event) {
  escape_code_block();
});
