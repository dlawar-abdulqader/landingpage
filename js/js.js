$(document).ready(function () {

    // Count-Down
    $(function () {
        var austDay = new Date();
        austDay = new Date("may 30, 2020");
        $('#defaultCountdown').countdown({ until: austDay, format: 'odHMS' });
        $('#year').text(austDay.getFullYear());
    });

     // Form Validation
    $('.form-control').blur(function () {
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            $(this).parent().find(".alert-danger").fadeIn(200);
        }
        else {
            $(this).parent().find(".alert-success").fadeIn(200);
        }
    });

    // Form2 Validation
    $('.form-control').blur(function () {
        var x = document.forms["myForm2"]["email2"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            $(this).parent().find(".alert-danger").fadeIn(200);
        }
        else {
            $(this).parent().find(".alert-success").fadeIn(200);
        }
    });

    //animation
    var wow = new WOW({
        mobile: false
    });
    wow.init();
});


 