var Main = (function(){

    // Инициализация модуля
    var init = function (){
        _setUpListners();
        _setPlaceholder();
    };

    // Init placeholder
    var _setPlaceholder = function(){
        $( 'input[placeholder], textarea[placeholder]' ).placeholder();
    };

    // Прослушивает события
    var _setUpListners = function(){
        $( '.add-project' ).on('click', _showModal);
    };

    // Работает с модальным окном
    var _showModal = function(e){
        e.preventDefault();

        $( '.pop-content' ).bPopup({
            closeClass: 'pr-close',
            contentContainer: '.pop-content',
            loadUrl: 'upload-form.html',
            modalColor: '#58697a',
        });
    };


    // Возращает объект (публичные методы)
    return {
      init: init
    }

})();

// Вызов модуля
Main.init();


