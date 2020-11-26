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
        var fReader = new FileReader();
        fReader.readAsDataURL(input)
        fReader.onloadend = function(event)
        {
            var src = event.target.result;
            console.log(src);
            $.ajax({
                type: "POST",
                url: "/send",
                data: {
                    query: src
                    },
                success: function (msg) {
                    console.log(msg.data);
                }
            });
        }
    }
});