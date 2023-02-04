$(document).ready(function () {
    //carrega a utilização de modais
    $('.modal-trigger').leanModal();

    $('.collection-item').on('click', function () {
        let tembadge = $(this).find('.badge'); //procura todos que possuem classe badge! 
        if (tembadge.length === 0) {      //length conta o tamanho dos dados na variavel
            let badge = '<span class = "badge">1</span>';
            $(this).prepend(badge);
        } else {
            let valorAtual = parseInt(tembadge.text()) + 1;
            tembadge.text(valorAtual);
        }
    });
    $('.collection-item').on("click", '.badge', function () {   //click só funciona para os objetos que estão no html
        $(this).remove();
        return false;     //para não utilizar o click function da linha 4
    });

    $('.acao-limpar').click(function () {
        $('.badge').remove();

    });
    $('#confirmar').click(function () {
        $('#resumo').empty();
        $('.badge').parent().each(function () {

            let quantidade = $(this).find('.badge').text();
            let produto = $(this).find('.descricao').text();

            $('#resumo').append(produto + '--' + quantidade + '<br/>');

        });


    });
});