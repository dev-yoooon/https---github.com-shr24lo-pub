function saveUser(){

    let newUser = {
        USER_ID: $('#user-id')[0].value,
        USER_NAME: $('#user-name')[0].value,
        USER_EMAIL: $('#user-email')[0].value,
        USER_TEL: $('#user-tel')[0].value,
        USER_PW: $('#user-pw')[0].value,
    }

    ajaxPost('/api/registerUser', newUser, function (data) {
        if(data.returnCode == 200){
            $("#sign-up-form").trigger("reset");
            alert('회원가입 완료');
            window.location.assign("/login");
        } else {
            alert('회원가입 실패');
        }
    });
}