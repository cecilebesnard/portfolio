$(function(){
        //$("#ticker01").liScroll({travelocity: 0.13});
		$('.parallax').parallax();

		$('#mainTitle').fadeIn(3000);
		$('#name').fadeIn(5000);

		$('.carousel').carousel();

		
	  
 });

$(function(){
   $().timelinr();
});

	

	
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
    $('#main').css('opacity' , '0.5');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
   $('#main').css('opacity' , '1');
}

