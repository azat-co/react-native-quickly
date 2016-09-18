(function($) {
var App = { init: function() { App.HomepageHeight();
                               App.HomepageOpacity();
							   App.MaxImage_Video();
							   App.MaxImage_Slider();
							   App.MaxImage_Single();
							   App.ScrollToSomeplace();
							   App.Count_Down();
							   App.FormValidation();
							   App.ContactForm();},


	// Homepage Height
	HomepageHeight: function() {
	"use strict"; 
	    var h = window.innerHeight;
	    $('.hero_fullscreen').css('height', h );
	    $('.mockup').css('height', h );
	},
	
	
	// Homepage Opacity - for single background image version
	HomepageOpacity: function() {
    "use strict"; 
        var h = window.innerHeight;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            $('#maximage_single').css('opacity', (1-st/h) );
        });
    },
	
	
	// MaxImage Fullscreen Background Slider
	MaxImage_Video: function() {
	"use strict";
	    jQuery('video, object').maximage('maxcover');
	    
	    // detecting if browser is mobile and disabling the video background, leaving only poster as bg.
		if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
		 ){
		    $('#maximage_video video').css('display', 'none' );
		    classie.add( document.getElementById( 'maximage_video' ), 'mobile_novideo' );
		  };
	},
	
	
	// MaxImage Fullscreen Background Slider
	MaxImage_Slider: function() {
	"use strict"; 
	    $('#maximage_slider').maximage();
	},
	
	
	// MaxImage Fullscreen Background Slider
	MaxImage_Single: function() {
	"use strict";
	    $('#maximage_single').maximage();
	},
	
	
	// Scroll To ...
    ScrollToSomeplace: function() {
    $('#more_info_btn').click(function () {$.scrollTo('#more_info',1000,{easing:'easeInOutExpo','axis':'y'});return false});
    },
    
    
    // Counter ... 
	Count_Down: function() {
    "use strict"; 
        $("#countdown").countdown({
		date: "8 September 2020 09:00:00", // Change this to your desired date to countdown to
		format: "on"
		});
    },
    
    
	// Newsletter Form Validation
    FormValidation: function() {
	    function isValidEmailAddress(emailAddress) {
	    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
	    return pattern.test(emailAddress);
		};
    
	    $('#subscribe-form').isHappy({
	    submitButton: '#subscribe-form-submit',
	    fields: {
	      '#email': {
	        required: true,
	        message: 'Please enter a valid e-mail address!',
	        test: isValidEmailAddress
	      }
	    }
		});
    },
    
    
    // Contact Form
    ContactForm: function() {
	     "use strict";
	    var options = {target: "#alert"}
	    $("#contact-form").ajaxForm(options);
    },

}


$(function() {
  App.init();
  $(window).resize(App.HomepageHeight);  
});

})(jQuery);