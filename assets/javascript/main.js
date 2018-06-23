
$("form").submit(function (event) {
    event.preventDefault();
    userInput = $("#user-input").val().trim();
    console.log(userInput);
    superAPI.callAPI(userInput);

});
    //marvelAPI.callAPI(userInput);
