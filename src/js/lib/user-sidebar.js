import $ from 'jquery'

const UserSidebar = function () {

  // User Sidebar open close module
  const userSidebarOpen = (function () {
    const width = $(window).width()

    if (width <= 991) {

      $('.b-header nav ul li.user-menu').addClass('mobile-user-menu-btn')
      const $btn = $('.mobile-user-menu-btn')

      if ($btn.length > 0) {
        const $header = $('.b-header')
        const $main = $('.b-content')
        const $sidebar = $('.b-user-sidebar')

        $btn.on('click', showUserMenu)

        function showUserMenu() {
          $(this).toggleClass('close-user-menu')
          $main.toggleClass('user-menu-open')
          $header.toggleClass('user-menu-open')
          $sidebar.toggleClass('show')
        }
      }

    } else if (width > 991) {
      $('.b-header nav ul li.user-menu').removeClass('mobile-user-menu-btn').off('click')
    }


  })()

  // User Sidebar Tabs module
  const userSidebarTabs = (function () {
    // Cache DOM
    const $tabBtn = $('.b-user-sidebar .user-sidebar-tabs > ul >li')
    const $close = $('.b-user-sidebar .user-sidebar-tabs .close-btn')
    const $userNav = $('.b-user-sidebar .user-sidebar-tabs .user-nav')
    const $tabContent = $('.b-user-sidebar .user-sidebar-tabs .tabs-content').find('*[class^="tab"]')

    // Events
    $tabBtn.on('click', openTabUserSidebar)
    $close.on('click', closeTabUserSidebar)

    // Fucntions
    function openTabUserSidebar() {
      const $this = $(this)
      $tabContent.removeClass('show').addClass('hide')
      const activeTab = $this.attr("rel")
      $("." + activeTab).addClass('show').removeClass('hide')
      $tabBtn.removeClass('active').addClass('hide')
      $this.addClass("active").removeClass('hide')
      $close.addClass('show')
      $userNav.addClass('hide')
    }

    function closeTabUserSidebar() {
      $tabContent.removeClass('show').addClass('hide')
      $userNav.removeClass('hide')
      $tabBtn.removeClass('hide')
      $tabBtn.removeClass('active')
      $(this).removeClass('show')
    }
  })()

}

export default UserSidebar