let $ = require('jquery');

let userSidebar = function () {

  $(window).on("load resize", function () {
    const width = $(window).width();
    const html =
      `<aside class="b-user-sidebar">
        <span class="user-avatar"></span>
        <nav>
          <ul>
            <li>
              <svg class = "icon-alarm">
                <use xlink:href="./fonts/icons.svg#icon-user-3"></use>
              </svg>
            </li>
            <li>
              <svg class="icon-alarm" >
                <use xlink:href="./fonts/icons.svg#icon-settings-5"></use> </svg>
            </li>
            <li>
              <svg class="icon-alarm">
                <use xlink:href="./fonts/icons.svg#icon-info"></use>
              </svg>
            </li>
          </ul>
        </nav>
      </aside>`;


    if (width <= 991) {

      $('.b-header nav ul li.user-menu').attr('id', 'mobile-user-menu-btn');

      const addedHtml = $('.b-user-sidebar');

      if ($(addedHtml).length == 0) {
        $(html).insertAfter('.b-sidebar');
        if ($(userSidebarBtn).length > 0) {
          $(userSidebarBtn).on('click', function () {

            $(this).toggleClass('close-user-menu');
            $(main).toggleClass('user-menu-open');
            $(header).toggleClass('user-menu-open');
            $(userSidebar).toggleClass('show');
          });
        }
      }
    } else if (width > 991) {
      $('.b-user-sidebar').remove();
      $('.b-header nav ul li.user-menu').attr('id', '');
    }

  });

}();

export default userSidebar;