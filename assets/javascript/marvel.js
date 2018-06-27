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
    setAvatar: function (params) {
        var directory = 'characters?';
        $.when(this.getData(directory, params))
        .done(function(response){
            var thumbnail = response.data.results[0].thumbnail;
            var photo = thumbnail.path + '.' + thumbnail.extension; 
            $("#hero-avatar").html('<img src="' + photo + '">');
        });
    },
    setBio: function () {

    },
    postComics: function () {
        
    }
}