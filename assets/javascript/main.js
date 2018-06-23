
$("form").submit(function (event) {
    event.preventDefault();
    userInput = $("#search").val().trim();
    console.log(userInput);
    superAPI.callAPI(userInput);
    var marvelResponse = marvelAPI.callAPI('characters',
                                         marvelAPI.params.characters);
    console.log(marvelResponse);
});

