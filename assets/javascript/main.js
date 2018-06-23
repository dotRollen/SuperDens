
$("form").submit(function (event) {
    event.preventDefault();
    userInput = $("#user-input").val().trim();
    console.log(userInput);
    superAPI.callAPI(userInput);
    var marvelResponse = marvelAPI.callAPI('characters',
                                         marvelAPI.params.characters);
    console.log(marvelReponse);
});

