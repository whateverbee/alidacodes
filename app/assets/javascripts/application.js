// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(window).load(function() {
  $('#welcomeModal').modal('show');
});

$(document).ready(function() {
  $('#nameSubmit').click(function() {
    e.preventDefault();
    $(this)
      .closest('.yep')
      .addClass('.nope');
    $(this)
      .closest('.aftersubmit')
      .removeClass('.nope');
  });
});

function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name +
    '=' +
    value +
    ';path=/' +
    (expiredays == 7 ? '' : ';expires=' + exdate.toGMTString());
}
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + '=';
  var begin = dc.indexOf('; ' + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
  }
  var end = document.cookie.indexOf(';', begin);
  if (end == -1) {
    end = dc.length;
  }
  return unescape(dc.substring(begin + prefix.length, end));
}
function savename() {
  setCookie('SetName', document.getElementById('textName').value, 1);
}
function getName() {
  var strVal = getCookie('SetName');
  var name = document.getElementById('textName').value;
}
