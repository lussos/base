/* ============================================================
 * Header functionality
 * ============================================================ */

let $ = require('jquery');

let Header = function () {
  const $header = $('.b-header');
  const $btnMobile = $(".mobile-menu-btn");
  const $main = $('.b-content');
  const $sidebar = $('.b-sidebar');

  $btnMobile.on('click', changeClasses);

  function changeClasses() {
    $btnMobile.toggleClass('close');
    $main.toggleClass('menu-open');
    $header.toggleClass('menu-open');
    $sidebar.toggleClass('show');
  }

}


export default Header