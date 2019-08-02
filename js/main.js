
function getData (){

    var input = $("#searchtext").val()

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=v0WEkxThNdvtMOl3xRWgoeEpjAi7WhTD&limit=30");

xhr.done(function(response) 
{console.log("success got data", response);

var jiffs = response.data

for (i in jiffs) 
{
    $('.inner').append("<img src='"+jiffs[i].imnages.original.url+"' style='height:350px; width:350px;'/>")

}

});

}
