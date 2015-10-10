$(function(){
    $( '.add-project' ).on('click', function(e) {
        e.preventDefault();

        $( '.pop-content' ).bPopup({
            closeClass: 'pr-close',
            contentContainer: '.pop-content',
            loadUrl: 'upload-form.html',
            modalColor: '#58697a',
        });
    });

    $( 'input[placeholder], textarea[placeholder]' ).placeholder();


    $( 'body' ).on('click', function(e){
        var tar = $( e.target),
            file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

        if ( tar.is( "#inFile" ) ) {
            var fakeIn = $( '#inFake');
            tar.change(function(){
                var file_name;

                if( file_api && tar[ 0 ].files[ 0 ] ){
                    file_name = tar[ 0 ].files[ 0 ].name;
                } else {
                    file_name = tar.val().replace( "C:\\fakepath\\", '' );
                }

                if( ! file_name.length )return;
                fakeIn.val(file_name);
            });
        }

    });

});