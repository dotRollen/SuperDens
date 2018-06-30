
$("form").submit(function (event) {
    event.preventDefault();
    userInput = $("#search").val().trim();
    console.log(userInput);
    // superAPI.callAPI(userInput);

    var params = $.param({
        apikey: marvelAPI.apikey,
        name: userInput,
    });

    var getName = marvelAPI.setName.bind(marvelAPI);
    getName(params);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, 'left');
});
  

$(document).ready(function(){                 
    $('input.autocomplete').autocomplete({
    data: {
        "Apple": null,
        "Microsoft": null,
        "Google": null,
        "Gargle":null
        }
    });                
});

//Materilize sidenav CSS
$(document).ready(function(){
    $('.sidenav').sidenav();
});

//Materialize collapsible Javascript
$(document).ready(function(){
    $('.collapsible').collapsible();
});