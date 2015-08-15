jQuery(function ($) {
    $("#contact_form").submit(function () {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        if(!email || !msg){
            alert('Nevyplnil jste povinná políčka')
            return false
        }
        $.ajax(
            {
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': '_Ak4TMvv9Lf63GeO_4hdww',
                    'message': {
                        'from_email': email,
                        'from_name': name,
                        'headers': {
                            'Reply-To': email
                        },
                        'subject': 'Dotaz z webu',
                        'text': msg,
                        'to': [
                            {
                                'email': 'jankliment93@gmail.com',
                                'name': 'Jan Kliment',
                                'type': 'to'
                            }]
                    }
                }
            })
            .done(function (response) {
                alert('Email byl odeslán, děkujeme'); // show success message
                $("#name").val(''); // reset field after successful submission
                $("#email").val(''); // reset field after successful submission
                $("#msg").val(''); // reset field after successful submission
            })
            .fail(function (response) {
                alert('Něco se pokazilo a nepodařilo se odeslat zprávu. Zkontrolujte zda jste zadal správně email.');
            });
        return false; // prevent page refresh
    });
});