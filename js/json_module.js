var JSON_MODULE = JSON_MODULE || function() {

    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open( 'get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if ( status == 200 ) {
                callback( null, xhr.response );
            } else {
                callback( status );
            }
        };
        xhr.send();
    };

    this.getExampleJSON = function( callback ) {
        getJSON( "resources/M1896_page1r.json", function( err, data ) {
            if ( err != null ) {
              console.log( "Couldn't get to example JSON: " + err );
            } else {
              callback( data );
            }
        } );
    }

} // END OF MODULE
