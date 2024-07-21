function ajaxGet(url, param, callback) {
    $.ajax({
        type: 'get',
        url: url,
        contentType:"application/json;charset=UTF-8",
        data: param,
        success: function(data, textStatus, xhr) {
            if(data.returnCode == '200') {
                return callback(data);
            } else {
                alert('error get: ' + data.returnCode + " : " + data.returnMsg + ":" + url);
            }
        },
        error: function(data, status, error) {
            alert('ajax Error: ' + data + url);
            // console.log('ajax Error: ' + url);
        }
    });
}
function ajaxPost(url, param, callback) {
    $.ajax({
        type: 'post',
        url: url,
        // contentsType: "application/json",
        async: false,
        contentType:"application/json;charset=UTF-8",
        data: JSON.stringify(param),
        // data: param,
        success: function(data, textStatus, xhr) {
            if (data.returnCode == '200') {
                return callback(data);
            } else if (data.return_code == undefined) {
                alert('API 응답없음');
            } else {
                alert(data?.contents[0]?.error);
            }
        },
        error: function(data, status, error) {
            // console.log('ajax Error: ' + url);
            alert('ajax Error ' + data + url);
        }
    });
}
function ajaxPut(url, param, callback) {
    $.ajax({
        type: 'put',
        url: url,
        async: false,
        contentType:"application/json;charset=UTF-8",
        data: JSON.stringify(param),
        success: function(data, textStatus, xhr) {
            if (data.returnCode == '200') {
                return callback(data);
            } else if (data.return_code == undefined) {
                alert('API 응답없음');
            } else {
                alert(data?.contents[0]?.error);
            }
        },
        error: function(data, status, error) {
            alert('ajax Error ' + data + url);
        }
    });
}
function ajaxPostMulti(url, form, callback) {
    $.ajax({
        type: 'post',
        url: url,
        processData : false,
        contentType : false,
        data : form,
        // data: param,
        success: function (data, textStatus, xhr) {
            if (data.returnCode == '200') {
                return callback(data);
            } else if (data.return_code == undefined) {
                alert('API 응답없음');
            } else {
                alert(data?.contents[0]?.error);
            }
        },
        error: function (data, status, error) {
            // console.log('ajax Error: ' + url);
            alert('ajax Error ' + data + url);
        }
    });
}