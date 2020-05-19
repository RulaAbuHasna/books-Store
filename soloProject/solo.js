var books=[
{
 name: "As you like it",
 author:"William Shakespeare",
 cost:40
},
{
 name: "The Alchemist",
 author:"Paulo Coelho",
 cost:35
},
{
 name: "1Q84",
 author:"Murakami",
 cost:70
},
{
 name: "my book4",
 author:"my author4",
 cost:60
} 
]
//displaying the books when pressed
$('#btn').click(function displayBook(){
	$('div').css("display","block");

	$('#book1').text("\""+books[0].name+"\""+" for "+books[0].author+", costs: "+books[0].cost +"$");
	$('#book2').text("\""+books[1].name+"\""+" for "+books[1].author+", costs: "+books[1].cost +"$");
    $('#book3').text("\""+books[2].name+"\""+" for "+books[2].author+", costs: "+books[2].cost +"$");
    $('#book4').text("\""+books[3].name+"\""+" for "+books[3].author+", costs: "+books[3].cost +"$");
})

//add the books to my list 
$('#add').click(function(){
   if($(":checkbox:checked").length !== 0){
	if($('#first').prop("checked") === true ){
		var li=$("<li></li>");
		li.text(books[0].name);
		$("ul").append(li);
	}
	if($('#second').prop("checked") === true ){
        var li=$("<li></li>");
		li.text(books[1].name);
		$("ul").append(li);
	}
	if($('#third').prop("checked") === true ){
         var li=$("<li></li>");
		li.text(books[2].name);
		$("ul").append(li);
	}
	if($('#fourth').prop("checked") === true ){
        var li=$("<li></li>");
		li.text(books[3].name);
		$("ul").append(li);
	}}else{
		alert("please pick some books :D");
	}
    $("#first").prop("checked",false);
    $("#second").prop("checked",false);
    $("#third").prop("checked",false);
    $("#fourth").prop("checked",false);

})

//
$("#show").click(function displayList(){
	$("#list").css("display","block");
	$("small").css("display","block");
})

$("#hide").click(function hideList(){
	$("#list").css("display","none");
	$("small").css("display","none");
})


$("#remove").click(function removeLast(){
	if($('li').length === 0){
		alert("There are no books remove");
	}else{
    $('li').last().remove();
}
})

$('ul').click(function(event){
  $(event.target).remove();
})


