var Validation = (function(){

    var init = function (){
        _setUpListens();
    };

    // Check input field
    var validateForm = function(form) {
        var inElem = form.find('input, textarea')
            .not('input[type="file"], input[type="hidden"]');
        $( 'input, textarea' ).keydown(_clearError);

        $.each(inElem, function(i, value){
            var el = $(value),
                val = el.val(),
                pos = el.attr( 'qtip-position' );

            if( val.length === 0 ){
                _setError(el);
                _createQtip(el, pos);
            }
        });
    };

    // Listens for events
    var _setUpListens = function(){
        $( 'form' ).on('reset', clearForm);
    };

    var clearForm = function(form) {
        var form = $(this);
        form.find('input, textarea').trigger('hideTooltip');
        form.find('.has-error').removeClass('has-error');
    };

    var _createQtip = function(el, pos){
        var position = {
            my: 'right center',
            at: 'left center',
            adjust: {
                method: 'shift none'
            }
        }

        if(pos === 'right'){
            position.my = 'left center';
            position.at = 'right center';
        }

        el.qtip({
            content: {
                text: function() {
                    return $(this).attr('qtip-content');
                }
            },
            show: {
                event: 'show'
            },
            hide: {
                event: 'keydown hideTooltip'
            },
            position: position,
            style: {
                classes: 'qtip-my qtip-rounded',
                tip: {
                    height: 10,
                    width: 16
                }
            }
        }).trigger( 'show' );
    }

    // View errors
    var _setError = function(el){
        el.closest( '.form-group' ).addClass( 'has-error' );
    };

    // Clear error
    var _clearError = function(){
        var inGroup = $(this).closest( '.form-group' );

        if(inGroup.hasClass( 'has-error' )){
            inGroup.removeClass( 'has-error' );
        }
    };

    // Return object (public methods)
    return {
        init: init,
        validate: validateForm,
        clearform: clearForm,
    }

})();

// Call module Project
//if( $( 'form' ).length ){
    Validation.init();
//}