$(document).ready(function(){
    
    
    function sendAjaxRestQuery(username, phone){
        $.ajax({
            method: "POST",
            url: "/users",
            contentType: "application/json",
            data: JSON.stringify({ 
                username: username, 
                phone: phone 
            }),
            success: function(data, textStatus, jqXHR){
                $("#ajaxResponse").append(JSON.stringify(data));
            },
            error: function(jqXHR, textStatus, errorThrown){
                $("#ajaxResponse").append(errorThrown);
            }
        });
    }
    
    function sendAjaxPostQuery(username, phone){
        $.ajax({
            method: "POST",
            url: "/users",
            data: { 
                username: username, 
                phone: phone 
            },
            success: function(data, textStatus, jqXHR){
                $("#ajaxResponse").append(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                $("#ajaxResponse").append(errorThrown);
            }
        });
    }
    
    
    $("#btnAjaxRestCall").on('click', function(){
        sendAjaxRestQuery($("#username").val(), $("#phone").val());
    });
    
    $("#btnAjaxPostCall").on('click', function(){
        sendAjaxPostQuery($("#username").val(), $("#phone").val());
    });
    
});