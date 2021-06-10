
$(document).on('click', "#delete-form", function (e) {
    e.preventDefault();
    var $form = $(this);
    var data = $form.serialize();
    var url = $form.attr('action');

    var $blockToHide = $form.closest('.item-block');

    bootbox.dialog({
        title: 'Confirmation',
        message: 'Etez-vous sûre de supprimer ceci ?',
        className: 'my-class',
        buttons: {
            cancel: {
                className: 'btn btn-default',
                label: 'Fermer'
            },
            success: {
                className: ' btn btn-danger',
                label: ' Supprimer',
                callback: function () {
                    $blockToHide.fadeOut('slow');
                    console.log('habiba');
                    $.ajax({
                        type: 'DELETE',
                        dataType: 'json',
                        url: url,
                        data: data,
                        success: function () {
                            console.log('Success');
                            location.reload();

                        },
                        error: function (XHR, status, error) {
                            $blockToHide.show();
                            alert('erreur pendant la suppression');
                        }
                    });
                }
            }
        }
    });
});
