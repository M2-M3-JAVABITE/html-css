$(document).ready(function() {
    $('body').on('click','.checkmobile', function() {
    var tdr_regex = /((09|03|07|08|05)+([0-9]{8})b)/g; // Do not use +
    var mobile = $('#mobile').val();
    if(mobile !==''){
    if (tdr_regex.test(mobile) == false)
    {
    alert( 'Your phone number ' + mobile + ' is not in the correct format!');
    }else{
    alert( 'Your phone number ' + mobile + ' is valid!');
    }
    }else{
    alert( 'You have not entered your phone number!');
    }
    });
    });