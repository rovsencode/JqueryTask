//Tab menu
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
});
//accordion
$(document).ready(function() {
	$('.accordion-main').on('click', '.accordion-header', function() {
        $('.accordion-body').slideUp();	
		if($(this).next().is(':hidden')) {
			$(this).next().slideDown()
		} else {
			$(this).next().slideUp();	
		}
	});
});