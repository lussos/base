let $ = require('jquery');

let userSidebar = function () {

  $(window).on("load resize", function () {
    const width = $(window).width();
    const html = '<aside class="user-sidebar"></aside>';
    if (width <= 991) {
      const addedHtml = $('.user-sidebar');
      if ($(addedHtml).length == 0) {
        $(html).insertAfter('.b-sidebar');
      }
    } else if (width > 991) {
      $('.user-sidebar').remove();
    }
  });

}();

export default userSidebar;