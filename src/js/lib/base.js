import $ from "jquery";

let Base = function () {
  const $header = $('.b-header')
  const $main = $('.b-content')
  const $sidebar = $('.b-user-sidebar')
  const $mobileMenuBtn = $('.mobile-user-menu-btn')
  const $userMenuBtn = $('.mobile-user-menu-btn');
  return $header, $sidebar, $main, $mobileMenuBtn, $userMenuBtn
}
export default Base