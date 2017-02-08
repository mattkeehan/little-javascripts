/**
 *
 *
 * @param backgroundClass   The class of the element with the background that you wish to expand. Assumes there's only one
 *                          matching element, or that it is the first one
 * @param logging           True or false. If true, the console displays the current image size as a percentage
 * @param divider           How much to divide the windows Y-axis scroll position by to get the scale - smaller numbers give a bigger scale
 */

function expandBackground(backgroundClass, logging, divider) {

    logging = logging || false;
    divider = divider || 50;
    var scrollY = 0;
    var elWithBackgroundImg = document.getElementsByClassName(backgroundClass)[0];
    var maxHeight = elWithBackgroundImg.offsetHeight;

    function stretchBG(scroll_pos) {
        var scale = 100 + (scroll_pos / divider);
        elWithBackgroundImg.style.backgroundSize = scale  + "%";
        if (logging) console.log("background size: ", scale + "%");
    }

    window.addEventListener('scroll', function (e) {
        scrollY = window.scrollY;
        if (window.pageYOffset < maxHeight) {
            window.requestAnimationFrame(function () {
                stretchBG(scrollY);
            });
        }
    });

}
