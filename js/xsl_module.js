var XSL_MODULE = XSL_MODULE || function() {

    var getXSL = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open( 'get', url, true );
        xhr.responseType = 'document';
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

    this.getXSL = function( callback ) {
        getXSL( "resources/tei_stylesheet.xsl", function( err, data ) {
            if ( err != null ) {
              console.log( "Couldn't get to example XSL: " + err );
            } else {
              callback( data );
            }
        } );
    }

} // END OF MODULE
