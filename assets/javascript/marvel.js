const marvelAPI = {
    url: 'https://gateway.marvel.com/v1/public/',
    apikey: 'db60b2d90bd12165a42c7f7d1b0417ec',
    getData: function (directory, params) {
        var url = this.url;
        url += directory + params;
        return $.ajax({
            method: 'GET',
            url: url,
        })
        .fail(function(err) {
            throw err;
        });  
    },
    setName: function (params) {
        // Minimum to pass name and apikey as parameters
        var directory = 'characters?';
        $.when(this.getData(directory, params))
        .done(function(response){
            var name = response.data.results[0].name;
            var id = response.data.results[0].id;
            $("#hero").html('<h1 marvel-id="' + id + '">' + name + '</h1>');
        });
    },
    setAvatar: function (params) {
        var directory = 'characters?';
        $.when(this.getData(directory, params))
        .done(function(response){
            var thumbnail = response.data.results[0].thumbnail;
            var photo = thumbnail.path + '.' + thumbnail.extension; 
            $("#results").html('<img src="' + photo + '">');
        });
    },
    setBio: function (params) {
        var directory = 'characters?';
        $.when(this.getData(directory, params))
        .done(function(response){
            console.log(response);
            var description = response.data.results[0].description;
            $("#results").html('<p>' + description + '</p>');
        });
    },
    postComics: function () {
        
    },
    postSeries: function () {

    }
} 
