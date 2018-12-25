// Javascript function that render for all browsers "object-fit: cover;" css property

import $ from 'jquery'

const ObjectFit = function () {
  const el = $('.object-fit')
  el.each(function () {
    var container = $(this),
      imgUrl = container.find('img').prop('src');
    if (imgUrl) {
      container.css({
        'background-image': 'url(' + imgUrl + ')',
      });
      container.find('img').remove()
    }
  })
}


export default ObjectFit