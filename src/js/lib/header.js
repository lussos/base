/* ============================================================
 * Header functionality
 * ============================================================ */

let $ = require('jquery');

let Header = function () {
  const header = $('.b-header');
  const btnMobile = $(".mobile-menu-btn");
  const main = $('.b-content');
  const sidebar = $('.b-sidebar');

  $(btnMobile).on('click', function () {
    $(this).toggleClass('close');
    $(main).toggleClass('menu-open');
    $(header).toggleClass('menu-open');
    $(sidebar).toggleClass('show');
  });
};

setTimeout(() => {
  Header();
}, 500);

export default Header