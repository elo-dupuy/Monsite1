function check_name(name){
if( name == "gabriel"){
return "Win";
}else if( name == "clement"){
return "we find clement";
}else{
var res = "Truth" +name+ "is different from gabriel and clement";
return res;
}
}

$ (document).ready(function(){
	alert(check_name ("gabriel"));
});

$(function() {
  $('#texteJQ').html('Win');
});
