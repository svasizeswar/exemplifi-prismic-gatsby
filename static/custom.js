jQuery(document).ready(function($) {
	showSlider(slideIndex);
});

 


function plusSlides(n) {
  showSlider(slideIndex += n);
}				 							  
var slideIndex = 1;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("elementor-post elementor-custom-post-filter slider");	
  if(slides.length != 0){
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {   	 	 
	  slides[i].style.display = "none";  
  }	  
  slides[slideIndex-1].style.display = "block";  
   } 
	
  if(slides.length ==1){
	  jQuery('.elementor-posts-container .next').css({"display":"none"});
	  jQuery('.elementor-posts-container .prev').css({"display":"none"});
  }	  else{
	  jQuery('.elementor-posts-container .next').css({"display":"block"});
	  jQuery('.elementor-posts-container .prev').css({"display":"block"});
  }
}

function showSlider(n) {
  var i;
  var slides = document.getElementsByClassName("case-study-post slider");
  if(slides.length != 0){
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {   	 	 
	  slides[i].style.display = "none";  
  }	  
  slides[slideIndex-1].style.display = "block";  
   } 
  if(slides.length ==1){
	  jQuery(' .case-next').css({"display":"none"});
	  jQuery(' .case-prev').css({"display":"none"});
  }	  else{
	  jQuery(' .case-next').css({"display":"block"});
	  jQuery(' .case-prev').css({"display":"block"});
  }
}

jQuery(document).ready(function($) {
	
	$('input[type="checkbox"]').click(function(){
      if($(this).prop("checked") == true){
          var id = jQuery(this).attr('id');
          jQuery('#'+id+'_div_wrap').css({"background-color": "#C1EBEC"});
      }else if($(this).prop("checked") == false){
          var id = jQuery(this).attr('id');
          jQuery('#'+id+'_div_wrap').css({"background-color": "#f8f8f8"});
      }
  });

  var url = $(location).attr('href'), parts = url.split("/"), last_part = parts[parts.length-2];
  jQuery('.'+last_part+'-wrap').css({"background-color": "#C1EBEC"});
  $('.'+last_part).prop('checked', true);

  var ca = getCookie('cpop');
  if(ca == ''){
    var cookie = document.cookie = "cpop=1";
    jQuery('#cookie-consent').css({"display": "inline-block"});
  }else{
    jQuery('#cookie-consent').css({"display": "none"});
    jQuery('#elementor-popup-modal-4752 .dialog-widget-content').css({"display": "none"});
  }

  $("#subscribe").click(function(){
    var email = $("#form-field-email_subscribe").val();
    var pattern = "/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i";

    if(email == ''){
      $("#form-field-email_subscribe").addClass("field-error");
    }    

    /*if(!pattern.test(email)){
      $("#form-field-email_subscribe").addClass("field-error");
    }​else{
      $("#form-field-email_subscribe").removeClass("field-error");
    }*/

  });
  
});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}