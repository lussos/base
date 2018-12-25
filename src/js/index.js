import $ from 'jquery'
import jQuery from 'jquery'
// export for others scripts to use
window.$ = $
window.jQuery = jQuery

$('.b-header').load('./html-components/header.html')
$('.b-sidebar').load('./html-components/sidebar.html')
$('.b-user-sidebar').load('./html-components/user-sidebar.html')
$('.b-dashboard').load('./html-components/dashboard.html')


import bootstrap from 'bootstrap'
import poopper from 'popper.js'


import Header from './lib/header'
import Sidebar from './lib/sidebar'
import UserSidebar from './lib/user-sidebar'
import ObjectFit from './lib/object-fit'


(function () {
  "use strict";
  setTimeout(() => {
    Sidebar()
    Header()
    UserSidebar()
    ObjectFit()

  }, 500);
})()