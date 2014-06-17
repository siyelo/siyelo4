$(document).ready(function(){

  $("iframe").on("mouseScroll", function(e){
    e.preventDefault();
  });
  // sticky navigation menu
  // stickyNav('#header');

  // smooth scrolling
  smoothScroll('js-smooth');

  // scroll spy (highlight link as scrolling through the page)
  scrollSpy('#main-nav', '#spaced');

  // smooth scroll logo link only if menu is sticky
  $('#logo a').click(function(e) {
    if($(e.target).parents('header').hasClass('sticky')) {
      e.preventDefault();
      $('section#spaced').scrollintoview({ duration: 2000});
    }
  });

  // mobile menu toggle
  $('#menu-toggle').click(function(e){
    e.preventDefault();
    $('#main-nav').slideToggle();
  });

  // team photos click event
  $('#team li').click(function(e){
    listItem = $(e.target).parents('li');
    txtWrapper = $(listItem).children('.txtWrapper');
    $(txtWrapper).children('p').slideToggle();
    $(listItem).toggleClass('active');
  });

  function highlightNavLink(href) {
    $('#main-nav a').removeClass('active');
    $("#main-nav a[href='" + href + "']").addClass('active');
  }

  // Parallax
  // $(window).scroll(function(){
  //   $("#space").css({
  //     top: $(window).scrollTop()*.1*-1
  //   });
  //   $("#engine").css({
  //     top: $(window).scrollTop()*.3*-1
  //   });
  //   $("#stars-1").css({
  //     top: $(window).scrollTop()*.3*-1
  //   });
  //   $("#stars-2").css({
  //     top: $(window).scrollTop()*.2*-1
  //   });
  //   $("#stars-3").css({
  //     top: $(window).scrollTop()*.1*-1
  //   });
  // });
});

$(window).load(function(){
  $('.bwWrapper').BlackAndWhite({
    hoverEffect : true, // default true
    // set the path to BnWWorker.js for a superfast implementation
    webworkerPath : false,
    // for the images with a fluid width and height
    responsive : true,
    speed: { //this property could also be just speed: value for both fadeIn and fadeOut
      fadeIn: 200, // 200ms for fadeIn animations
      fadeOut: 800 // 800ms for fadeOut animations
    }
  });
});

// Google Maps API

var map;
var ctContentString = "<h2>Siyelo <span>Cape Town</span></h2>" + "<p>Suite 401, 79 Roeland Street, Cape Town, 8001, South Africa</p>"
var ctInfoWindow = new google.maps.InfoWindow({
      content: ctContentString
  });

function addMarker(map){
  siyeloCT = new google.maps.LatLng(-33.929533,18.422235)
  marker = new google.maps.Marker({
    position: siyeloCT,
    map: map,
    title: "Siyelo Cape Town",
  });

  google.maps.event.addListener(marker, 'click', function() {
    ctInfoWindow.open(map,marker);
  });
}

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(-33.929533,18.422235),
    scrollwheel: false,

  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  addMarker(map);
}



google.maps.event.addDomListener(window, 'load', initialize);

