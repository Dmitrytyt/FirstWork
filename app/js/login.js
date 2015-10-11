/**
 * Created by Admin on 11.10.15.
 */
var Login = (function(){

    var init = function (){
        _setUpListens();
        _setPlaceholder();
    };

    // Listens for events
    var _setUpListens = function(){
        $( '.login-form' ).on('submit', _submitForm);
    };

     // Init placeholder
    var _setPlaceholder = function(){
        if($('html').hasClass('no-opacity')){
            $( 'input').placeholder();
        }
    };

    var _submitForm = function(e) {
        e.preventDefault();

        var form = $(this),
            url = 'login.php',
            defObj = _ajaxForm(form, url);
    };

    var _ajaxForm = function(form, url){
        if(!Validation.validate(form)) return false;

    }

    // Return object (public methods)
    return {
        init: init
    }

})();

// Call module Project
if( $( '.auth-form' ).length ){
    Login.init();
}