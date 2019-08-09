var posts = jQuery('.elementor-post.elementor-grid-item.elementor-post-filter.ex_frt');
function filterEcobyCMS(postName){
 	var ecoName =  'eco_cms' ;
 	ecoPostfilter(postName,ecoName )	
}
function filterEcobyIND(postName){ 
 	var ecoName =  'eco_ind' ;
 	ecoPostfilter(postName,ecoName )	
}
function filterEcobyEcoType(postName){
 	var ecoName =  'catname' ;
 	ecoPostfilter(postName,ecoName )	
}
function ecoPostfilter(postName, ecoName){
	for (var i = 0; i < posts.length; i++) {
		var PostFilter = jQuery(posts[i]).data(ecoName);				
		if (PostFilter.indexOf(',') > -1) {
			var post_Array = PostFilter.split(',');
			if(jQuery.inArray(postName, post_Array) !== -1){				 						
			}else{
			 jQuery(posts[i]).remove();
			}
		} else{
			if(PostFilter == postName){
				jQuery(posts[i]).css({"transform": "translate3d(0px, 0px, 0px)", "opacity": "1","display":"block"});
			}  else{
				 jQuery(posts[i]).remove();
			}
		}				
	}
}
 
var ecofilterType = jQuery( ".elementor_post_filter" ).data('tagfilter'); 

jQuery( "ul.elementor_post_filter li" ).click(function() { 
	var currentButton = jQuery( this );
	var activeButton  = jQuery('.elementor_post_filter .elementor-active');		
	activateFilterButton(currentButton, activeButton);
	var datafilter = jQuery( this ).data('filter');		
	for (var i = 0; i < posts.length; i++) {
		if(datafilter == '__all'){
			jQuery(posts[i]).css({"transform": "translate3d(0px, 0px, 0px)", "opacity": "1","display":"block"});
		} else{
			var customPostFilter = jQuery(posts[i]).data(ecofilterType);
			if (customPostFilter.indexOf(',') > -1) {
				var customPostFilter_Array = customPostFilter.split(',');
				if(jQuery.inArray(datafilter, customPostFilter_Array) !== -1){			 
					 jQuery(posts[i]).css({"transform": "translate3d(0px, 0px, 0px)", "opacity": "1","display":"block"});
				} else{
					jQuery(posts[i]).css({"transform": "scale3d(0.2, 0.2, 1)", "opacity": "0","display":"none"});  
				}
			}else{	
				if(customPostFilter == datafilter){
					jQuery(posts[i]).css({"transform": "translate3d(0px, 0px, 0px)", "opacity": "1","display":"block"});
				} else{
					jQuery(posts[i]).css({"transform": "scale3d(0.2, 0.2, 1)", "opacity": "0","display":"none"});  
				}
			}
		}			
	}  
});

jQuery(document).ready(function(){
	ecoFilter();
	if(jQuery('.ex_dp_mod').find('div.elementor-widget-posts').length == 0){
		jQuery('.ex_dp_mod').remove();	
	}
});
function ecoFilter(){	
	var visibleECO = jQuery('.elementor-post.elementor-grid-item.elementor-post-filter:visible');	
	//console.log("visibleECO "+visibleECO.length);
	var postArray = [];
	postArray.push("__all");
	var cptType = jQuery( ".elementor_post_filter" ).data('tagfilter'); 
	for (var i = 0; i < visibleECO.length; i++) {
		var post_cat = jQuery(visibleECO[i]).data(cptType)	 ;
		if (post_cat.toString().indexOf(',') > -1) {
			var str_array = post_cat.split(',');
			str_array.forEach(function(entry) {
				postArray.push(entry);
			});
		} else{
			postArray.push(post_cat);
		}
	}
	//console.log("postArray "+postArray)
	var cptPosts = jQuery( "ul.elementor_post_filter  li" );
	var activeFilter = jQuery( ".elementor_post_filter" ).data('activefilter'); 
	console.log("activeFilter "+activeFilter)
	for (var i = 0; i < cptPosts.length; i++) {		 
		var dataft = jQuery(cptPosts[i]).data("filter");		
		if(jQuery.inArray(dataft, postArray) !== -1){
			if(dataft == activeFilter){
				jQuery(cptPosts[i]).click();
			}
		}else{
			jQuery(cptPosts[i]).css({"display":"none"});
		}
	} 
}

function activateFilterButton(   currentButton, activeButton   ){
	var activeClass = 'elementor-active';
	activeButton.removeClass(activeClass);
	currentButton.addClass(activeClass);
	console.log("activeButton "+activeButton)
	console.log("currentButton "+currentButton)
}