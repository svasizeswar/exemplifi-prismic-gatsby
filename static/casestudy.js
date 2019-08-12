var customPosts = jQuery('.case-study-post');

var postType = jQuery( ".casestudy__filters" ).data('postfilter');

jQuery( "ul.casestudy__filters li" ).click(function() { 
	var currentButton = jQuery( this );
	var activeButton  = jQuery('.casestudy__filters .elementor-active');		
	activateFilterButton( currentButton, activeButton);
	var datafilter = jQuery( this ).data('filter');		
	for (var i = 0; i < customPosts.length; i++) {
		var customPostFilter = jQuery(customPosts[i]).data(postType);
		if (customPostFilter.indexOf(',') > -1) {
			var customPostFilter_Array = customPostFilter.split(',');
			if(jQuery.inArray(datafilter, customPostFilter_Array) !== -1){			 
				 jQuery(customPosts[i]).css({"transform": "translate3d(0px, 0px, 0px)", "opacity": "1","display":"block"});
				 jQuery(customPosts[i]).addClass('slider');
			} else{
				jQuery(customPosts[i]).css({"transform": "scale3d(0.2, 0.2, 1)", "opacity": "0","display":"none"}); 
				jQuery(customPosts[i]).removeClass('slider');				
			}
		}else{	
			if(customPostFilter == datafilter){
				jQuery(customPosts[i]).css({"transform": "translate3d(0px, 0px, 0px)", "opacity": "1","display":"block"});
				jQuery(customPosts[i]).addClass('slider');
			}else if(customPostFilter == 'all'){
				jQuery(customPosts[i]).css({"transform": "translate3d(0px, 0px, 0px)", "opacity": "1","display":"block"});
				jQuery(customPosts[i]).addClass('slider');
			} else{
				jQuery(customPosts[i]).css({"transform": "scale3d(0.2, 0.2, 1)", "opacity": "0","display":"none"});  
				jQuery(customPosts[i]).removeClass('slider');	
			}
		}	
	}  
	showSlider(slideIndex);
});
 
jQuery( ".case-prev" ).click(function() { 
	plusSlides(-1);
});


jQuery( ".case-next" ).click(function() { 
	plusSlides(1);
});
jQuery(document).ready(function(){
	caseFilter();
	if(jQuery('.ex_cs_mod').find('div.slider-inner').length == 0){
		jQuery('.ex_cs_mod').remove();	
	}
        if(jQuery('.ex_cl_mod').find('div.slider-inner').length == 0){
		jQuery('.ex_cl_mod').remove();	
	}
});
function caseFilter(){	
	var visibleCPT = jQuery('.case-study-post');	
	//console.log("visibleCPT "+visibleCPT.length);
	var postArray = [];
	var cptType = jQuery( ".casestudy__filters" ).data('postfilter'); 
	for (var i = 0; i < visibleCPT.length; i++) {
		var post_cat = jQuery(visibleCPT[i]).data(cptType)	 ;
		if (post_cat.toString().indexOf(',') > -1) {
			var str_array = post_cat.split(',');
			str_array.forEach(function(entry) {
				postArray.push(  entry  );
			});
		} else{
			postArray.push(post_cat);
		}
	}
	//console.log("postArray "+postArray)
	var cptPosts = jQuery( "ul.casestudy__filters  li" );
	for (var i = 0; i < cptPosts.length; i++) {
		var dataft = jQuery(cptPosts[i]).data("filter");
		if(jQuery.inArray(dataft, postArray) !== -1){
		}else{
			jQuery(cptPosts[i]).css({"display":"none"});
		}
	} 
}


 
