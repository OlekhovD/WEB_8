$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Мы получили ваше сообщение, спасибо!");
                    document.getElementById("form").reset();
                }else{
                    alert("Произошла ошибка.");
                }
            }
        });
    });
});