/* 
 Created on : 27 nov. 2016, 14:31:48
 Author     : Malek Boubakri
 */
$(document).ready(function () {
  $(".icon").click(function () {
    if ($("#myTopnav").attr("class") === "topnav") {
      $("#myTopnav").attr("class", "topnav responsive");
    } else if ($("#myTopnav").attr("class") === "topnav scrolled") {
      $("#myTopnav").attr("class", "topnav responsive scrolled");
    } else {
      $("#myTopnav").attr("class", "topnav");
    }
  });
  $(".app-container").scroll(function () {
    $('ul.timeline > li').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({'opacity': '1'}, 750);
      }
    });
  });
  $(".app-container").scroll(function () {
    $("ul.topnav").attr("class", 'topnav scrolled');
    if ($(".app-container").scrollTop() < 70) {
      $("ul.topnav").attr("class", 'topnav');
    }
  });
  $(".app-container").scroll(function () {
    /*console.log($(".app-container").scrollTop());*/
    if ($(".app-container").scrollTop() >= 0 && $(".app-container").scrollTop() < 1200) {
      $("ul.topnav > li:first").toggleClass("active");
      $("ul.topnav > li:nth-child(2)").removeClass("active");
      $("ul.topnav > li:nth-child(3)").removeClass("active");
    } else if ($(".app-container").scrollTop() >= 1200 && $(".app-container").scrollTop() < 3300) {
      $("ul.topnav > li:first").removeClass("active");
      $("ul.topnav > li:nth-child(2)").toggleClass("active");
      $("ul.topnav > li:nth-child(3)").removeClass("active");
    } else if ($(".app-container").scrollTop() >= 3300) {
      $("ul.topnav > li.active").removeClass("active");
      $("ul.topnav > li:nth-child(2)").removeClass("active");
      $("ul.topnav > li:nth-child(3)").toggleClass("active");
    }
  });
});