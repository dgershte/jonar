
var secHeights;
var sections;

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function getCurrentSection(ypos) {
    for(var i = 0; i < sections.length; i++) {
        var sec = $("#"+sections[i]);
        var top = sec.position().top;
        var height = $(sec).height();
        if(ypos < (top + height)) return i;
    }
}



$(document).ready( function() {
    $("#facebook").hover( function () {
        $(".fb-like-box").css("opacity","1");
        }, function() {
        $(".fb-like-box").css("opacity","0");
    });
    $("#updown").click( function(e) {
        var elm = e.target;
        var ypos = $(window).scrollTop();
        var index = getCurrentSection(ypos);
        var section = "";
        if(elm.id == "uparrow") {
            if(index == 0 ) section = sections[index];
            else section = sections[index-1];
        } else if(elm.id == "downarrow") {
            if(index == sections.length-1) section = sections[index];
            else section = sections[index+1];
        }
        if(section != ""){
            $('html,body').animate({
                scrollTop: $("#"+section).offset().top
            }, 1000);
            return false;				
        }
    });
    $(".more").click( function(e) {
        var elm = $(this);
        $( $(this).next()[0] ).slideToggle();
        $('html,body').animate({
            scrollTop: elm.offset().top-100
        }, 1000);
    });	
});
