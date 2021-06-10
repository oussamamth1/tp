
$(document).on('click', "#refresh", function () {



    function checkPassword(Password)
    {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return re.test(Password);
    }

    function checkForm(formUser)
    {

        if(formUser.Password.value != "") {
            dump(formUser.Password.value);
            if(!checkPassword(formUser.Password.value)) {
                alert("The password you have entered is not valid!");
                formUser.Password.focus();
                return false;
            }
        } else {
            alert("Error: Please check that you've entered and confirmed your password!");
            formUser.Password.focus();
            return false;
        }
        return true;
    }



});
