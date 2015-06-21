
$(document).ready(function(){$(".alert").addClass("in").fadeOut(4500);

/* swap open/close side menu icons */
$('.phone,.msg,.fb,.twitter,.help').hide();
$('[data-toggle=collapse]').click(function(){
  	// toggle icon
  	$(this).find("i").toggleClass("fa-chevron-right fa-chevron-down");
});

$('.likes').click(function()
{
	$('.phone,.msg,.fb,.twitter,.help').fadeToggle('fast','swing');

})

});