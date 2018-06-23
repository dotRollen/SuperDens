const marvelAPI = {
    callAPI: function () {
        $(function (){
            var marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
            $.getJSON( marvelAPI, {
                apikey: 'db60b2d90bd12165a42c7f7d1b0417ec'
              })
                .done(function( response ) {
                  var results = response.data.results;
                  var resultsLen = results.length;
                  var output = '<ul>'; 
                  
                  for(var i=0; i<resultsLen; i++){
                    if(results[i].images.length > 0) {
                      var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
                      output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
                    }
                  }  
                  output += '</ul>'
                  $('#results').append(output);
            }).fail(function(err) {
                throw err;
            });
        })        
    },
}

