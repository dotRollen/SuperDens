
$("form").submit(function (event) {
    event.preventDefault();
    userInput = $("#search").val().trim();
    console.log(userInput);
    superAPI.callAPI(userInput);

    var marvelResponse = marvelAPI.callAPI('characters',
                                         marvelAPI.params.characters);
    console.log(marvelResponse);
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

