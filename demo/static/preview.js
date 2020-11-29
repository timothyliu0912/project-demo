$("#file").change(function() {
    var input = document.getElementById("file").files[0];
    console.log(input)
    var fReader = new FileReader();
    fReader.readAsDataURL(input)
    fReader.onloadend = function(event)
    {
        var src = event.target.result;
        $("#img-tag").attr('src',src);
    }
});
$("#input-img").click(function(){
    var input = document.getElementById("file").files[0];
    if (input == undefined)
    {
        alert("請上傳圖片");
    }
    else
    {
        var form_data = new FormData();
        console.log(form_data);
        form_data.append('file',input);
        console.log(form_data.get('file'));
        $.ajax({
            type: "POST",
            url: "/upload",
            data: form_data,
            processData: false,//用于对data参数进行序列化处理 这里必须false
            contentType: false, //必须
            success: function (data,status) {
                if (data==''){
                    alert('上傳圖片失敗');
                } else{
                    console.log(data);
                    $("#extra_img").attr('src','data:;base64,'+data);
                }
            },

        });
    }
});