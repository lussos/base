/* ============================================================
 * Sidebar functionality
 * ============================================================ */

import $ from 'jquery'

const Sidebar = function () {

  const links = $('.b-sidebar > nav > ul > li > a')
  const subLink = $('.has-sub ul li a')

  $(links).on("click", function (e) {

    if ($(this).parent().has("ul")) {
      e.preventDefault()
    }

    if (!$(this).hasClass("open")) {
      // hide any open menus and remove all other classes
      $(".b-sidebar li ul").slideUp(300)
      $(links).removeClass("open")
      $(subLink).removeClass("open")
      // open our new menu and add the open class
      $(this).next("ul").slideDown(300)
      $(this).addClass("open")

    } else if ($(this).hasClass("open")) {
      $(this).removeClass("open")
      $(this).next("ul").slideUp(300)
    }

  });

  $(subLink).on('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $(subLink).removeClass('open')
    $(this).addClass('open')
  })

}


export default Sidebar