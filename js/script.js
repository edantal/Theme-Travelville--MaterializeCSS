$(document).ready(function () {
  // init sidenav
  $('.button-collapse').sideNav();

  // init scrollspy
  $('.scrollspy').scrollSpy();

  // init slider
  $('.slider').slider({
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });

  // autocomplete
  $('.autocomplete').autocomplete({
    data: {
      'Aruba': null,
      'Bora Bora': null,
      'California': null,
      'Cancun': null,
      'Europe': null,
      'Florida': null,
      'Hawaii': null,
      'Jamaica': null,
      'The Bahamas': null,
      'The Maldives': null
    }
  });
});
