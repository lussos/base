/* ============================================================
 * Sidebar functionality
 * ============================================================ */

import $ from 'jquery'

const Sidebar = function () {
  // Cache DOM
  const $links = $('.b-sidebar > nav > ul > li > a')
  const $subLink = $('.has-sub ul li a')

  // Events
  $links.on('click', linkSudebarMenu)
  $subLink.on('click', sublinkSidebarMenu)

  // Functions
  function linkSudebarMenu(event) {

    if ($(this).parent().has("ul")) {
      event.preventDefault()
    }
    if (!$(this).hasClass("open")) {
      // hide any open menus and remove all other classes
      $(".b-sidebar li ul").slideUp(300)
      $links.removeClass("open")
      $subLink.removeClass("open")
      // open our new menu and add the open class
      $(this).next("ul").slideDown(300)
      $(this).addClass("open")

    } else if ($(this).hasClass("open")) {
      $(this).removeClass("open")
      $(this).next("ul").slideUp(300)
    }
  }

  function sublinkSidebarMenu(event) {
    event.preventDefault()
    event.stopPropagation()
    $subLink.removeClass('open')
    $(this).addClass('open')
  }
}



export default Sidebar