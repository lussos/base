"use strict";
/* ============================================================
 * File Input Img Form
 * ============================================================ */

(function ($) {
  var container = $(".custom-file-upload ");
  $(container).each(function () {
    var $fileInput = $(this).find('input[type=file]');
    var $imageArea = $(this).find('.image-placeholder');
    var fileInfo;

    $fileInput.on('change', getFileInfo);

    function getFileInfo(e) {
      var file = e.target.files[0];
      var reader = new FileReader();

      reader.onload = function () {
        return function (e) {
          fileInfo = e.target.result;
          $imageArea.css({
            'background-image': 'url(' + fileInfo + ')'
          });
        };
      }(file);

      reader.readAsDataURL(file);
    }
  });
})(window.jQuery);
//# sourceMappingURL=custom-file-upload.js.map