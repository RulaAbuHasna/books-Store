var books=[
{
 name: "my book",
 author:"my author",
 cost:30
},
{
 name: "my book2",
 author:"my author2",
 cost:40
},
{
 name: "my book3",
 author:"my author3",
 cost:50
},
{
 name: "my book4",
 author:"my author4",
 cost:60
} 
]

$('#btn').click(function displayBook(){
	$('div').css("display","block");

	$('#book1').text(books[0].name+" the author "+books[0].author+" the cost "+books[0].cost);
	$('#book2').text(books[1].name+" the author "+books[1].author+" the cost "+books[1].cost);
	$('#book3').text(books[2].name+" the author "+books[2].author+" the cost "+books[2].cost);
	$('#book4').text(books[3].name+" the author "+books[3].author+" the cost "+books[3].cost);
})

$('#add').click(function(){
	if($('#first').prop("checked") === true ){
		alert("its working");
	}
})






