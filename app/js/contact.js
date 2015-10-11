var contactMe = (function(){

    var init = function (){
        _setUpListens();
        _setPlaceholder();
    };


    // Listens for events
    var _setUpListens = function(){
        $( '.add-contact' ).on('submit', _submitForm);
    };

     // Init placeholder
    var _setPlaceholder = function(){
        if($('html').hasClass('no-opacity')){
            $( 'input, textarea').placeholder();
        }
    };

    var _submitForm = function(e) {
        e.preventDefault();

        var form = $(this),
            url = 'contact.php',
            defObj = _ajaxForm(form, url);
    };

    var _ajaxForm = function(form, url){
        if(!Validation.validate(form)) return false;

    }

    // Return object (public methods)
    return {
        init: init,
    }

})();

// Call module Project
if( $( '.add-contact' ).length ){
    contactMe.init();
}