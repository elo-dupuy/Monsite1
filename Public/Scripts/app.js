$ (document).ready(function(){
	
    var d=300;
    $('#navigation a').each(function(){
        $(this).stop().animate({
            'marginTop':'-80px'
        },d+=150);
    });
 
    $('#navigation > li').hover(
    function () {
        $($(this)).stop().animate({
            'marginTop':'-2px'
        },200);
    },
    function () {
        $($(this)).stop().animate({
            'marginTop':'-80px'
        },200);
    });


    $(".Contacter").click(function(){
    	$("#contenu").remove();
    });
});