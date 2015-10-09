$(function(){
    $( '.add-project' ).on('click', function(e) {
        e.preventDefault();

        $( '.pop-content' ).bPopup({
            closeClass: 'pr-close',
            contentContainer: '.pop-content',
            loadUrl: 'upload-form.html',
            modalColor: '#58697a'
        });
    });

    $( 'input[placeholder], textarea[placeholder]' ).placeholder();
});