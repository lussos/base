import $ from 'jquery'

const UserSidebar = function () {

  $(document).ready(function () {

    const width = $(window).width()

    if (width <= 991) {

      $('.b-header nav ul li.user-menu').addClass('mobile-user-menu-btn')
      const $btn = $('.mobile-user-menu-btn')

      if ($btn.length > 0) {
        const $header = $('.b-header')
        const $main = $('.b-content')
        const $sidebar = $('.b-user-sidebar')

        $btn.on('click', function () {
          $(this).toggleClass('close-user-menu')
          $main.toggleClass('user-menu-open')
          $header.toggleClass('user-menu-open')
          $sidebar.toggleClass('show')
        })
      }

    } else if (width > 991) {
      $('.b-header nav ul li.user-menu').removeClass('mobile-user-menu-btn').off('click')

    }
  })

}

export default UserSidebar