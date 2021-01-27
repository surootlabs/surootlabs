
/* this prevents dom flickering, needs to be outside of dom.ready event: */
document.documentElement.className += 'js_active';
/*end dom flickering =) */

// -------------------------------------------------------------------------------------------
// cufon
// -------------------------------------------------------------------------------------------

	Cufon.replace('h1, h2, h3, h4, h5, h6', {
			hover: 'true'
		});
	Cufon.replace('#nav li a', {
			hover: 'true'
		});
	Cufon.replace('.sidebar_box_title', {
			hover: 'true'
		});


// -------------------------------------------------------------------------------------------
// navigation effect
// -------------------------------------------------------------------------------------------

	$(document).ready(function(){
	
		$('#nav li .not_current').each(function(){
	
			$(this).before($(this).clone().removeClass().addClass('hoverMenu'));
	
		});
		
		$('#nav li').hover(function(){
		
			$(this).find('.hoverMenu').stop().animate({marginTop:'0px'}, {queue:false, duration: 200, easing: ''});
	
		},
		
		function(){
		
			$(this).find('.hoverMenu').stop().animate({marginTop:'-32px'}, {queue:false, duration: 200, easing: ''});
	
		});
		
	});
	
	
// -------------------------------------------------------------------------------------------
// menu sidebar
// -------------------------------------------------------------------------------------------

//menu links effects							
							
$(document).ready(function(){

	      $('ul.sidebar_menu li a').hover(function() {
	        $(this).stop().animate({ paddingLeft: '40px', backgroundPosition: '15px -46px' }, 200);
	      }, function() {
	        $(this).stop().animate({ paddingLeft: '35px', backgroundPosition: '10px 12px' }, 200);           
	      });
		
});
	


// -------------------------------------------------------------------------------------------
// NivoSlider
// -------------------------------------------------------------------------------------------							
							
	$(window).load(function() {
		setTimeout(function(){
			$('.nivoslider').nivoSlider({
				slices: '12',
				effect:'random',
				boxCols: 8, // For box animations
				boxRows: 5, // For box animations
				animSpeed:500,
				pauseTime:3000,
				startSlide:0,
				captionOpacity:.8,
				directionNav:true,
				directionNavHide:false,
				controlNav:true,
				keyboardNav:false,
				pauseOnHover:false,
				manualAdvance:false
			});
		}, 1000);
	});



// -------------------------------------------------------------------------------------------
// Cycle Slider
// -------------------------------------------------------------------------------------------							

	$(function() {
		$('.cycleslider img:first').fadeIn(1000, function() {
			
			$('.cycleslider')
			.before('<div class="cycleslider_control_nav">')
			.cycle({
				fx:'scrollVert', // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle') 
				pause: 0, // true to enable "pause on hover" 
				speed:800, // speed of the transition (any valid fx speed value) 
				timeout: 5000, // milliseconds between slide transitions (0 to disable auto advance) 
				randomizeEffects: 1,
				startingSlide: 0,
				easing: 'easeOutBounce',
				prev: '.cycleslider_previous_control',
				next: '.cycleslider_next_control', 
				pager:'.cycleslider_control_nav' 
			});
		});
	});




// -------------------------------------------------------------------------------------------
// PrettyPhoto Lightbox
// -------------------------------------------------------------------------------------------							
							
	$(document).ready(function() {
		$(document).ready(function(){
			$("a[rel^='prettyPhoto']").prettyPhoto();
			$("a[rel^='prettyPhoto']").prettyPhoto({
				/* social_tools:false, */ /* change to true if you want to enable using social tools */
				theme: 'pp_default' /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			});
		});
	});  



// -------------------------------------------------------------------------------------------
// Images Fade Effect
// -------------------------------------------------------------------------------------------							

	//post image fade effect
	
	$(document).ready(function(){
	
		      $('.post_image a img').hover(function() {
			$(this, 'img').stop().animate({ opacity: '.4' }, {queue:false, duration: 400, easing: 'easeOutElastic'}); //easeOutElastic
		      }, function() {
			$(this, 'img').stop().animate({ opacity: '1' }, {queue:false, duration: 200, easing: ''});           
		      });
	
			
	});
	
	//portfolio image fade effect
	
	$(document).ready(function(){
	
		      $('.image_lightbox a img, .video_lightbox a img').hover(function() {
			$(this, 'img').stop().animate({ opacity: '.4' }, {queue:false, duration: 400, easing: 'easeOutElastic'}); //easeOutElastic
		      }, function() {
			$(this, 'img').stop().animate({ opacity: '1' }, {queue:false, duration: 200, easing: ''});           
		      });
	
			
	});



// -------------------------------------------------------------------------------------------
// Portfolio Sorting
// -------------------------------------------------------------------------------------------

	$(function(){
		$('.selecter').mobilyselect({
			collection: 'all', // shows specified collection on startup
			animation: 'fade', // type of animation, available options: plain, fade, absolute
			duration: 300, // duration of animation
			listClass: 'selecterContent', // main container
			btnsClass: 'selecterBtns',
			btnActiveClass: 'active', // add class name to the button
			elements: 'li',
			onChange: function(){}, // call the function when collection changes
			onComplete: function(){} // call the function when animation is completed
		});
	});



// -------------------------------------------------------------------------------------------
// Portfolio Items Sliding Box
// -------------------------------------------------------------------------------------------

	$(document).ready(function(){
		//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
		//Vertical Sliding
		$('.boxgrid.slidedown').hover(function(){
			$(".cover", this).stop().animate({top:'-147px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
		$('.boxgrid.slideup').hover(function(){
			$(".cover", this).stop().animate({top:'147px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
		//Horizontal Sliding
		$('.boxgrid.slideright').hover(function(){
			$(".cover", this).stop().animate({left:'226px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
		$('.boxgrid.slideleft').hover(function(){
			$(".cover", this).stop().animate({left:'-226px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
		//Diagnal Sliding
		$('.boxgrid.slideangle').hover(function(){
			$(".cover", this).stop().animate({top:'147px', left:'226px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
	});
							



// -------------------------------------------------------------------------------------------
// Twitter Widget
// -------------------------------------------------------------------------------------------							
							
	$(document).ready(function(){
		$(".tweet").tweet({
			username: "seaofclouds",
			join_text: "auto",
			avatar_size: 32,
			count: 3,
			auto_join_text_default: "we said,",
			auto_join_text_ed: "we",
			auto_join_text_ing: "we were",
			auto_join_text_reply: "we replied to",
			auto_join_text_url: "we were checking out",
			loading_text: "loading tweets..."
		});
	});



// -------------------------------------------------------------------------------------------
// Flickr Widget
// -------------------------------------------------------------------------------------------							
							
	$(document).ready(function(){
	
		$('.flickr').jflickrfeed({
			limit: 12,
			qstrings: {
				id: '36587311@N08'
			},
			itemTemplate: '<li>'+
						'<a rel="prettyPhoto_flickr[pp_gal]" href="{{image}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
				      '</li>'
				}, function(data) {
					$(".flickr a[rel^='prettyPhoto_flickr[pp_gal]']").prettyPhoto();
					$(".flickr a[rel^='prettyPhoto_flickr[pp_gal]']").prettyPhoto({
						/* social_tools:false, */ /* change to true if you want to enable using social tools */
						theme: 'pp_default' /* light_rounded / dark_rounded / light_square / dark_square / facebook */
					});
				});		
		
	});  



// -------------------------------------------------------------------------------------------
// accordions & tabs & toggles
// -------------------------------------------------------------------------------------------							

$(document).ready(function() {
	$(".accordion").tabs(".accordion div.pane", {tabs: 'span.title', effect: 'slide', initialIndex: null});
});

// perform JavaScript after the document is scriptable.
$(function() {
	// setup ul.tabs to work as tabs for each div directly under div.panes
	$("ul.tabs").tabs("div.panes > div", {fadeInSpeed: 500, fadeOutSpeed: 0, effect: 'fade'});
});
$(document).ready(function(){

	//Hide (Collapse) the toggle containers on load
	$(".toggle div.pane").hide(); 

	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	$(".toggle span.title").click(function(){
		$(this).toggleClass("active").next().slideToggle("normal");
		return false; //Prevent the browser jump to the link anchor
	});

});
							



// -------------------------------------------------------------------------------------------
// Search Form
// -------------------------------------------------------------------------------------------

//search form

$(document).ready(function() {
	$('#search_form input[type="text"]').focus(function() {
	    if (this.value == this.defaultValue){ 
		this.value = '';
			}
			if(this.value != this.defaultValue){
			this.select();
		}
	});
	$('#search_form input[type="text"]').blur(function() {
	    if ($.trim(this.value) == ''){
			this.value = (this.defaultValue ? this.defaultValue : '');
			}
	});
});



// -------------------------------------------------------------------------------------------
// Sidebar Search Form
// -------------------------------------------------------------------------------------------							
		
	$(document).ready(function() {
		$('.search_form input[type="text"]').focus(function() {
		    if (this.value == this.defaultValue){ 
			this.value = '';
				}
				if(this.value != this.defaultValue){
				this.select();
			}
		});
		$('.search_form input[type="text"]').blur(function() {
		    if ($.trim(this.value) == ''){
				this.value = (this.defaultValue ? this.defaultValue : '');
				}
		});
	});




// -------------------------------------------------------------------------------------------
// Contact Form
// -------------------------------------------------------------------------------------------							

	$(document).ready(function() {
		$("#contact_form").validate();
	});











