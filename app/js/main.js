$(function(){
    $( '.add-project' ).on('click', function(e) {
        e.preventDefault();

        $( '.pop-content' ).bPopup({
            contentContainer: '.pop-content',
            loadUrl: 'upload-form.html',
            modalColor: '#58697a'
        });
    });
});