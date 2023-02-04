$(document).ready(function() {
    $('select').formSelect();
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy'
    });
    $('.fixed-action-btn').floatingActionButton();
});