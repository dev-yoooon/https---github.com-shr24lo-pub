/**
 * Created by PhpStorm.
 * Date         : 2018-10-16
 * Developer    : SeHwan Hwang
 * Description  : lib.js
 * ⓒ 2018. WebPlanet Co. All Rights Reserved.
 */

//**********************************************************************************************************************
// function lib_formCheck(id, str)
//**********************************************************************************************************************
function lib_formCheck(id, str){

    if(str === undefined){ str = "정보를 입력하세요."; }

    var formInput = document.getElementById(id);
    if(formInput == null){ alert("JS form_check() id가 없습니다."); return false;}

    var value = formInput.value;
    if(!value){
        alert(str);
        formInput.focus();
        return false;
    }

    return true;
}
// end of lib_formCheck() _____________________________________________________________________________


//**********************************************************************************************************************
// function lib_formCheck2(dataObj, msgObj, msg, type)
//**********************************************************************************************************************
function lib_formCheck2(dataObj, msgObj, msg, type) {

    var value = false;

    if (msg === undefined) msg = "정보를 입력하세요.";
    if (type === undefined) type = "text";

    if (dataObj == null) { alert("JS form_check2() dataObj 가 없습니다."); return false; }
    if (msgObj == null) { alert("JS form_check2() msgObj 가 없습니다."); return false; }

    switch (type) {
        case "text" : value = dataObj.value; break;
        case "checkbox" : value = dataObj.checked; break;
        case "radio" :

            if (dataObj.length === undefined) { // 라디오 버튼 1개일 경우
                value = dataObj.checked;
            } else {                            // 라디오 버튼 2개 이상일 경우
                for (var i=0; i<dataObj.length; i++) {
                    if (dataObj[i].checked) {
                        value = dataObj[i].checked; break;
                    }
                }
            }
            break;
    }

    if (!value) {
        msgObj.innerText = msg; msgObj.style.color = "red";
        return false;
    } else {
        msgObj.innerText = ""; return true;
    }
}
// end of lib_formCheck2() _____________________________________________________________________________


//**********************************************************************************************************************
// function lib_regexpCheck(id, type, msg)
//**********************************************************************************************************************
function lib_regexpCheck(dataObj, msgObj, type, msg){

    if (msg === undefined) msg = "형식에 맞게 입력하세요.";

    if (dataObj == null) { alert("JS regexp_check() dataObj 가 없습니다."); return false; }
    if (msgObj == null) { alert("JS regexp_check() msgObj 가 없습니다."); return false; }

    switch (type){
        case "id":
            var regexp = /^[a-z0-9]{4,20}$/; // "영문 소문자, 숫자 4~20자 아이디
            break;
        case "pw":
            var regexp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,30}$/; //숫자+영문(대,소문자) 8~30자 비밀번호
            break;
        case "name":
            var regexp = /^[가-힝a-zA-Z]{2,}$/; //문자+영문(대,소문자) 2자 이상
            break;
        case "phone":
            var regexp = /^[0-9]{2,4}-[0-9]{3,4}(-[0-9]{3,4})?$/;  //일반전화
            // var msg = "ex)00-000-0000, 0000-0000, 000-0000-0000 ...  형식으로 입력하세요.";
            break;
        case "mphone":
            var regexp = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;  //휴대전화 번호
            // var msg = "ex)000-000-0000, 000-0000-0000 형식으로 입력하세요.";
            break;
        case "hphone":
            var regexp = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;    //집 전화번호
            // var msg = "ex)00-000-0000, 000-0000-0000 형식으로 입력하세요.";
            break;
        case "mail":
            var regexp = /^[0-9a-z][a-z0-9_.-]{1,39}@[a-z0-9-]([_.-]?[a-z0-9])*\.[a-z0-9]{2,3}$/i;  //이메일 주소
            // var msg = "이메일 형식이 아닙니다.";
            break;
        case "eng":
            var regexp = /^[a-z]{1,20}$/; //영문(소문자) 1~20자 비밀번호
            // var msg = "영문(소문자) 형식으로 입력하세요.";
            break;
        case "number":
            var regexp = /^[0-9]*$/; //숫자만 입력 (0, 양수)
            // var msg = "숫자만 입력하세요.";
            break;
        case "number2":
            var regexp = /^-?\d+$/; //숫자만 입력 (음수, 0, 양수)
            // var msg = "숫자만 입력하세요.";
            break;
        case "code":
            var regexp = /^[a-z0-9-]{3,20}$/; // "영문 소문자, 숫자, 하이픈(-) 3~20자 코드
            break;
        case "tax":
            var regexp = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;  // 사업자번호
        // var msg = "ex) 000-00-00000 형식으로 입력하세요.";
    }

    if(!regexp.test(dataObj.value)){
        msgObj.innerText = msg; msgObj.style.color = "red"; return false;
    } else {
        msgObj.innerText = ""; return true;
    }

    return true;
}
// end of lib_regexpCheck() ____________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_pwCheck(id1, id2, str)
//**********************************************************************************************************************
function lib_pwCheck(id1, id2, str){

    if(str === undefined) str = "비밀번호가 일치하지 않습니다.";

    var formInput1 = document.getElementById(id1);
    if(formInput1 == null){ alert("JS form_check() id1가 없습니다."); return false;}
    var formInput2 = document.getElementById(id2);
    if(formInput2 == null){ alert("JS form_check() id2가 없습니다."); return false;}

    var pw1 = formInput1.value;
    var pw2 = formInput2.value;
    if(pw1 != pw2){
        alert(str);
        formInput2.focus();
        return false;
    }

    return true;
}
// end of lib_pwCheck() ________________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_inputChkBoxSet(chkArr, mode)
//**********************************************************************************************************************
function lib_inputChkBoxSet(chkArr, mode){

    if (mode === undefined) mode = "true";

    if (mode == "true") {
        for (var i=0; i<chkArr.length; i++) {
            if (!chkArr[i].checked) {
                chkArr[i].checked = true;
            }
        }
    } else {    // mode == "false"
        for (var i=0; i<chkArr.length; i++) {
            if (chkArr[i].checked) {
                chkArr[i].checked = false;
            }
        }
    }
}
// end of lib_inputChkBoxSet() _________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_inputChkBoxValue(chkArr, item)
//**********************************************************************************************************************
function lib_inputChkBoxValue(chkArr, item){
    var str = ""
    for (var i=0; i<chkArr.length; i++) {
        if (chkArr[i].checked) {
            if (str != "") str += "|*|";
            str += chkArr[i].getAttribute(item);
        }
    }

    return str;
}
// end of lib_inputChkBoxValue() _______________________________________________________________________________________


//**********************************************************************************************************************
// function lib_setCookie(name, value, second, path)
//**********************************************************************************************************************
function lib_setCookie(name, value, second, path){
    var date = new Date();
    date.setTime(date.getTime() + second*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path='+path;
}
// end of lib_setCookie() ______________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_getCookie(name)
//**********************************************************************************************************************
function lib_getCookie(name){
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}
// end of lib_getCookie() ______________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_deleteCookie(name)
//**********************************************************************************************************************
function lib_deleteCookie(name){
    lib_setCookie(name, "", 0, "/");
}
// end of lib_deleteCookie() ______________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_todayTimeRemainS()
//**********************************************************************************************************************
function lib_todayTimeRemainS(){
    var nowTime = new Date();
    var tomorrowTime  = new Date();
    with(tomorrowTime) {
        setDate(nowTime.getDate()+1);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setMilliseconds(0);
    }
    var remainTime = tomorrowTime - nowTime;

    return (remainTime/1000);   // 하루의 남은 시간을 초 단위로 반환
}
// end of lib_todayTimeRemainS() _______________________________________________________________________________________


//**********************************************************************************************************************
// function lib_fileSizeChk()
//**********************************************************************************************************************
function lib_fileSizeChk(img) {

    var maxFileSize = 20971520; // 20MB = 20971520B
    var fileSize = img.files[0].size;

    if (fileSize > maxFileSize) {
        alert("파일 크기를 확인하세요.\n(파일크기는 20MB 이하로 업로드 가능합니다.)");
        img.value = "";

        return false;
    } else {
        return true;
    }
}
// end of lib_fileSizeChk() ____________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_imgPreview(img, imgId)
//**********************************************************************************************************************
function lib_imgPreview(img, imgId){

    if (lib_fileSizeChk(img)) {
        var reader = new FileReader();  // FileReader 객체 사용
        reader.onload = function (a) {
            // get loaded data and render thumbnail.
            document.getElementById(imgId).src = a.target.result;
        };

        // read the image file as a data URL.
        reader.readAsDataURL(img.files[0]);    // 이미지파일 전달
    }
}
// end of lib_imgPreview() _____________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_numberFormat(inputNumber)
//**********************************************************************************************************************
function lib_numberFormat(inputNumber) {
    // 000 단위로 , 구분
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// end of lib_numberFormat() ___________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_formToObject(form)
//**********************************************************************************************************************
function lib_formToObject(form) {
    var obj = {};
    var elements = form.querySelectorAll( "input, select, textarea" );
    var obj2 = {};
    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];

        if (element.name.indexOf("[]") === -1) {
            // input:checkbox, input:radio 일때
            if (element.tagName.toLowerCase()=="input" && (element.type.toLowerCase()=="checkbox" || element.type.toLowerCase()=="radio") ) {

                if (element.checked) {  // 체크된 값만 저장
                    var name = element.name;
                    var value = element.value;
                }

                // input:text, select, textarea 일때
            } else {
                var name = element.name;
                var value = element.value;
            }

            if( name ) {
                obj[ name ] = value;
            }

        } else {    // 다중 입력값 처리 ( name[] ... )
            var name2 = element.name.replace("[]", "");

            if (name2) {
                if (Array.isArray(obj2[ name2 ]))   {}
                else                                { obj2[ name2 ] = [] }

                obj2[ name2 ].push(element.value);
            }
        }
    }

    for (key in obj2) {
        obj[ key ] = obj2[key];
    }

    //return JSON.stringify( obj ); // JSON 반환
    return obj; // Object 반환
}
// end of lib_formToObject() ___________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_autoHypenPhone()
//**********************************************************************************************************************
function lib_autoHypenPhone(str) {
    mPhone = ["010", "011", "016", "017", "018", "019"];
    hPhone = ["02", "051", "053", "032", "062", "042", "052", "044", "031", "033", "043", "041", "063", "061", "054", "055", "064"];

    str = str.replace(/[^0-9]/g, '');
    strLength = str.length;
    if (strLength > 11) {   // 최대 11자리
        str = str.substr(0, 11);
        strLength = 11;
    }
    var tmp = '';

    if (str.substr(0, 1) == "0") {      // 0XX-
        if (str.substr(1, 1) == "2") {  // 02-
            if (strLength > 10) {   // 최대 10자리
                str = str.substr(0, 10);
                strLength = 10;
            }

            if ( str.length <= 2) {
                return str;
            } else if (str.length <= 5) {
                tmp += str.substr(0, 2);
                tmp += '-';
                tmp += str.substr(2);
                return tmp;
            } else if (str.length <= 9) {
                tmp += str.substr(0, 2);
                tmp += '-';
                tmp += str.substr(2, 3);
                tmp += '-';
                tmp += str.substr(5);
                return tmp;
            } else {
                tmp += str.substr(0, 2);
                tmp += '-';
                tmp += str.substr(2, 4);
                tmp += '-';
                tmp += str.substr(6);
                return tmp;
            }
        } else {                                    // 0XX-
            if (strLength > 11) {   // 최대 11자리
                str = str.substr(0, 11);
                strLength = 11;
            }

            if ( str.length <= 3) {
                return str;
            } else if (str.length <= 6) {
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3);
                return tmp;
            } else if (str.length <= 10) {
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3, 3);
                tmp += '-';
                tmp += str.substr(6);
                return tmp;
            } else {
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3, 4);
                tmp += '-';
                tmp += str.substr(7);
                return tmp;
            }
        }
    } else {
        if (strLength > 8) {   // 최대 8자리
            str = str.substr(0, 8);
            strLength = 8;
        }

        if( str.length <= 4){
            return str;
        } else {
            tmp += str.substr(0, 4);
            tmp += '-';
            tmp += str.substr(4);
            return tmp;
        }
    }

    /*
    if( str.length < 4){
        return str;
    }else if(str.length < 7){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else if(str.length < 11){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    }else{
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }
    */

    return str;
}
// end of lib_autoHypenPhone() _________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_autoHypenBusinessNumber()
//**********************************************************************************************************************
function lib_autoHypenBusinessNumber(str) {

    // 사업자등록번호는 XXX-XX-XXXXX 형태의 10자리로 구성

    str = str.replace(/[^0-9]/g, '');
    strLength = str.length;
    if (strLength > 10) {   // 최대 10자리
        str = str.substr(0, 10);
        strLength = 10;
    }
    var tmp = '';

    if( str.length < 4){
        return str;
    }else if(str.length < 6){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else{
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 2);
        tmp += '-';
        tmp += str.substr(5);
        return tmp;
    }


    return str;
}
// end of lib_autoHypenBusinessNumber() ________________________________________________________________________________


//**********************************************************************************************************************
// function lib_autoHypenResidentNumber()
//**********************************************************************************************************************
function lib_autoHypenResidentNumber(str) {

    // 주민등록번호 XXXXXX-XXXXXXX 형태의 13자리로 구성

    str = str.replace(/[^0-9]/g, '');
    strLength = str.length;
    if (strLength > 13) {   // 최대 10자리
        str = str.substr(0, 13);
        strLength = 13;
    }
    var tmp = '';

    if( str.length < 6){
        return str;
    }else if(str.length < 6){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else{
        tmp += str.substr(0, 6);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    }


    return str;
}
// end of lib_autoHypenResidentNumber() ________________________________________________________________________________


//**********************************************************************************************************************
// function lib_test()
//**********************************************************************************************************************
function lib_test() {
    alert("lib_test() 호출");
}
// end of lib_test() ___________________________________________________________________________________________________


//**********************************************************************************************************************
// function lib_copy_to_clipboard(obj)
//**********************************************************************************************************************
function lib_copy_to_clipboard(obj){

    // 복사할 텍스트를 변수에 할당해줍니다.
    var text = obj.innerText;

    // input text 태그를 생성해줍니다.
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");

    // 가상으로 가져올 태그에 만들어준 input 태그를 붙여줍니다.
    obj.appendChild(createInput);

    // 만든 input 태그의 value 값에 복사할 텍스트 값을 넣어줍니다.
    createInput.value = text;

    // 복사 기능을 수행한 후
    createInput.select();
    document.execCommand('copy');

    // 가상으로 붙여주었던 input 태그를 제거해줍니다.
    obj.removeChild(createInput);

    alert('복사가 완료 되었습니다.');
}
// end of lib_copy_to_clipboard() ______________________________________________________________________________________


//**********************************************************************************************************************
// function lib_shareSns(type, title)
//**********************************************************************************************************************
function lib_shareSns(type, title) {

    if(title === undefined){ title = ""; }
    var snsPopUp;
    var _width = '500';
    var _height = '450';
    var _left = Math.ceil((window.screen.width - _width) / 2);
    var _top = Math.ceil((window.screen.height - _height) / 2);
    var siteUrl = document.location.href;
    var encodeUri = encodeURIComponent(siteUrl);

    // 네이버
    if (type == 1) {
        var shareURL = "https://share.naver.com/web/shareView.nhn?url=" + encodeUri + "&title=" + title;
        snsPopUp = window.open(shareURL, 'naverLink', 'width=' + _width + ', height=' + _height + ', left=' + _left + ', top=' + _top);

    // 네이버블로그
    } else if (type == 2) {
        var shareURL = "http://blog.naver.com/openapi/share?url=" + encodeUri + "&title=" + title;
        snsPopUp = window.open(shareURL, 'naverBlogLink', 'width=' + _width + ', height=' + _height + ', left=' + _left + ', top=' + _top);

    // 네이버밴드
    } else if (type == 3) {
        var shareURL = "https://band.us/plugin/share?body=" + encodeUri + "&route=" + encodeUri;
        snsPopUp = window.open(shareURL, 'naverBandLink', 'width=' + _width + ', height=' + _height + ', left=' + _left + ', top=' + _top);

    // 페이스북
    } else if (type == 4) {
        var shareURL = "https://www.facebook.com/sharer/sharer.php?u=" + encodeUri;
        snsPopUp = window.open(shareURL, 'facebookLink', 'width=' + _width + ', height=' + _height + ', left=' + _left + ', top=' + _top);

    // 트위터
    } else if (type == 5) {
        var shareURL = "http://twitter.com/intent/tweet?url=" + encodeUri + "&text=" + title;
        snsPopUp = window.open(shareURL, 'twitterLink', 'width=' + _width + ', height=' + _height + ', left=' + _left + ', top=' + _top);

    // 링크드인
    } else if (type == 6) {
        var shareURL = "http://www.linkedin.com/cws/share?url=" + encodeUri;
        snsPopUp = window.open(shareURL, 'linkedinLink', 'width=' + _width + ', height=' + _height + ', left=' + _left + ', top=' + _top);

    // URL 복사
    } else if (type == 7) {

        // input text 태그를 생성해줍니다.
        var createInput = document.createElement("input");
        createInput.setAttribute("type", "text");

        // 가상으로 가져올 태그에 만들어준 input 태그를 붙여줍니다.
        document.body.appendChild(createInput);

        // 만든 input 태그의 value 값에 복사할 텍스트 값을 넣어줍니다.
        createInput.value = siteUrl;

        // 복사 기능을 수행한 후
        createInput.select();
        document.execCommand('copy');

        // 가상으로 붙여주었던 input 태그를 제거해줍니다.
        document.body.removeChild(createInput);

        alert(siteUrl+ '\n주소가 복사 되었습니다.');
    }
}
// end of lib_shareSns() ___________________________________________________________________________________________________























