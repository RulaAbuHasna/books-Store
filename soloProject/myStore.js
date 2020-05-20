var books=[
{
 name: "As you like it",
 author:"William Shakespeare",
 cost:20
},
{
 name: "The Alchemist",
 author:"Paulo Coelho",
 cost:30
},
{
 name: "1Q84",
 author:"Murakami",
 cost:25
},
{
 name: "Pride and Prejudice",
 author:"Jane Austen",
 cost:20
} 
]
//displaying the books when pressed
$('#btn').click(function displayBook(){
	$('div').css("display","block");

	$('#book1').text("\""+books[0].name+"\""+" for "+books[0].author+", costs: "+books[0].cost +"$");
	$('#book2').text("\""+books[1].name+"\""+" for "+books[1].author+", costs: "+books[1].cost +"$");
    $('#book3').text("\""+books[2].name+"\""+" for "+books[2].author+", costs: "+books[2].cost +"$");
    $('#book4').text("\""+books[3].name+"\""+" for "+books[3].author+", costs: "+books[3].cost +"$");
    //display the rest of the buttons
    $("#add").css("display","block");
    $("#show").css("display","block");
    $("#hide").css("display","block");
})

var totalPrice=0;

//add the books to my list 
$('#add').click(function(){
   if($(":checkbox:checked").length !== 0){
	if($('#first').prop("checked") === true ){
		var li=$("<li></li>");
		li.text(books[0].name+" costs "+books[0].cost);
		$("ul").append(li);
		totalPrice+=books[0].cost;
		$('#cost').text("this will costs you "+totalPrice+"$");
	}
	if($('#second').prop("checked") === true ){
        var li=$("<li></li>");
		li.text(books[1].name+" costs "+books[1].cost);
		$("ul").append(li);
		totalPrice+=books[1].cost;
		$('#cost').text("this will costs you "+totalPrice+"$");
	}
	if($('#third').prop("checked") === true ){
         var li=$("<li></li>");
		li.text(books[2].name+" costs "+books[2].cost);
		$("ul").append(li);
		totalPrice+=books[2].cost;
		$('#cost').text("this will costs you "+totalPrice+"$");
	}
	if($('#fourth').prop("checked") === true ){
        var li=$("<li></li>");
		li.text(books[3].name+" costs "+books[3].cost);
		$("ul").append(li);
		totalPrice+=books[3].cost;
		$('#cost').text("this will cost you "+totalPrice+"$");
	}}else{
		alert("please pick some books :D");
	}
	//unchecking the items 
    $("#first").prop("checked",false);
    $("#second").prop("checked",false);
    $("#third").prop("checked",false);
    $("#fourth").prop("checked",false);

})

//show list and it's following artibutes 
$("#show").click(function displayList(){
	$("#list").css("display","block");
	$("small").css("display","block");
	$('#cost').css("display","block");
	$("#remove").css("display","block");
	$('#buy').css("display","block");
	$('h5').css("display","block");
})

//hide list and what follows to it  
$("#hide").click(function hideList(){
	$("#list").css("display","none");
	$("small").css("display","none");
	$('#cost').css("display","none");
	$("#remove").css("display","none");
	$('#buy').css("display","none");
	$('h5').css("display","none");
})

//removing the last element of the list + decreasing totalprice 
$("#remove").click(function removeLast(){
    if($('li').last().text().includes("20")){

    	totalPrice=totalPrice -20;
    	$('#cost').text("this will cost you "+totalPrice+"$");

   }else if($('li').last().text().includes("25")){
      totalPrice=totalPrice -25;
    	$('#cost').text("this will cost you "+totalPrice+"$");
} 
else if($('li').last().text().includes("30")){
	totalPrice=totalPrice -30;
    	$('#cost').text("this will cost you "+totalPrice+"$");
}

	if($('li').length === 0){
		alert("There are no books to remove");
	}else{
    $('li').last().remove();
}

})

/*$('ul').click(function(event){
  $(event.target).remove();
})

*/

//removing the clicked items in the list + decreasing total price 
$('ul').click(function(event){
  if($(event.target).text().includes("20")){
   totalPrice=totalPrice-20;
$("#cost").text("this will cost you "+totalPrice+"$");
}else if($(event.target).text().includes("25")){
	 totalPrice=totalPrice-25;
$("#cost").text("this will cost you "+totalPrice+"$");
}else if($(event.target).text().includes("30")){
  totalPrice=totalPrice-30;
$("#cost").text("this will cost you "+totalPrice+"$");
}
$(event.target).remove();
})

//buying 
$('#buy').click(function(){
	if($('li').length !== 0 ){
	alert("Enjoy your books!");
}else{
	alert("invalid action :( ")
}
})

//rate
$('#rate').click(function(event){
		$(event.target).toggleClass("checked");
	})