const marvelAPI = {
    url: 'https://gateway.marvel.com/v1/public/',
    params: {
        characters: {
            apikey: 'db60b2d90bd12165a42c7f7d1b0417ec',
            name: 'spider-man',
            // nameStartsWith: '',
            // modifiedSince: '', //Date Only
            // comics: '', //Number only
            // series: '', //Number only
            // events: '', //Number only
            // stories: '', //Number only
            // orderBy: '', //name, modified, -name, -modified
            // limit: '', //Number only
            // offset: '', //Number only
        },
        creators: {},
        comics: {},
        events: {},
        stories: {},
        series: {},
    },
    callAPI: function (directory, obj) {
        $.getJSON(marvelAPI.url + directory, obj)
            .done(function(response) {
                var results = response;
                return results;
        }).fail(function(err) {
            throw err;
        });  
    },
}

// var results = response.data.results;
// var resultsLen = results.length;
// var output = '<ul>'; 

// for(var i=0; i<resultsLen; i++){
// if(results[i].images.length > 0) {
//     var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
//     output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
// }
// }  
// output += '</ul>'
// $('#results').append(output);

