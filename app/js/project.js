/**
 * Created by Admin on 10.10.15.
 */

var Project = (function(){

    var init = function (){
        _setUpListens();
    };

    // Init placeholder
    var _setPlaceholder = function(){
        if($('html').hasClass('no-opacity')){
            $( 'input, textarea', '.upload-project' ).placeholder();
        }
    };

    // Listens for events
    var _setUpListens = function(){
        $( 'body' ).on( 'click', function(e){
            _setElem(e);
        });
    };

    // Set click elem
    var _setElem = function(e){
        var targetElem = $( e.target );

        if(targetElem.is( ".add-project" ) ||
            targetElem.is( ".add-project .icon-photo" ) ||
            targetElem.is( ".add-project .add-title" )){

            _showModal(e);
            return;
        }

        if(targetElem.is( "#inFile" )){
            _showFileName(e);
            return;
        }

        if(targetElem.is( ".upload-project .action-button" )){
            _submitForm(e);
            return;
        }
    };

    var _submitForm = function(e) {
        e.preventDefault();

        var form =  $( e.target).closest( 'form' ),
            url = 'login.php',
            defObj = _ajaxForm(form, url);
    };

    var _ajaxForm = function(form, url){
        if(!Validation.validate(form)) return false;

    }

    // Show name image
    var _showFileName = function(e){
        var tar = $( e.target ),
            file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

        var fakeIn = $( '#inFake' );
        tar.change(function(){
            var file_name;

            if( file_api && tar[ 0 ].files[ 0 ] ){
                file_name = tar[ 0 ].files[ 0 ].name;
            } else {
                file_name = tar.val().replace( "C:\\fakepath\\", '' );
            }

            if( ! file_name.length ) return;
            fakeIn.val(file_name);
        });
    };

    // Show modal popup
    var _showModal = function(e){
        e.preventDefault();

        $( '.pop-content' ).bPopup({
            onClose: function() { $('input, textarea').trigger('hideTooltip'); },
            closeClass: 'pr-close',
            contentContainer: '.pop-content',
            loadUrl: 'upload-form.html',
            modalColor: '#58697a',
        }, function(){
            _setPlaceholder();
        });
    };


    // Return object (public methods)
    return {
      init: init
    }

})();

// Call module Project
if( $( '.add-project' ).length ){
    Project.init();
}
