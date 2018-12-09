// Javascript function that render for all browsers "object-fit: cover;" css property

let $ = require('jquery');

let ObjectFit = function () {
  const header = $('.b-header');
  const el = header.find('.object-fit');
  el.each(function () {
    var container = $(this),
      imgUrl = container.find('img').prop('src');
    if (imgUrl) {
      container.css({
        'background-image': 'url(' + imgUrl + ')',
      });
      container.find('img').remove();
    }
  });
};
setTimeout(() => {
  ObjectFit();
}, 1000);

export default ObjectFit;