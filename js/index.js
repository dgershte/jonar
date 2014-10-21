
var secHeights;
var sections;


(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&appId=280161028800008&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)) {
        js=d.createElement(s);
        js.id=id;js.src="//platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,"script","twitter-wjs");


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-50
        }, 500);
        return false;
      }
    }
  });
});

function getCurrentSection(ypos) {
    for(var i = 0; i < sections.length; i++) {
        var sec = $(sections[i]);
        var top = $(sec).position().top;
        var height = $(sec).height();
        if(ypos+50 < (top + height)) return i;
    }
}



$(document).ready( function() {
    var fbbox = $(".fb-like-box");
    $("#facebook").click( function () {
        if( $("#twitter-widget-0").css("display") != "none") {
            $("#twitter-widget-0").css("display","none");
        }
        if( $(fbbox).css("display") == "none") {
            $(fbbox).css("display","inline-block");
            $(fbbox).css("opacity","1"); 
        } else {
            $(fbbox).css("display","none");
            $(fbbox).css("opacity","0");
        }
    });
    $("#twitter").click( function () {
        if( $(fbbox).css("display") != "none") {
            $(fbbox).css("display","none");
            $(fbbox).css("opacity","0");
        }
        var twitterbox = $("#twitter-widget-0");
        if( $(twitterbox).css("display") == "none") {
            $(twitterbox).css("display","inline-block");
        } else {
            $(twitterbox).css("display","none");
        }
    });
    $("#updown").click( function(e) {
        sections = $("section");
        if(sections == null) return;
        sections = jQuery.makeArray(sections);
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
                scrollTop: $(section).offset().top-50
            }, 500);
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
    var blog = $("#blogiframe");    
    $("#blogiframe").height( $(window).height());
});
