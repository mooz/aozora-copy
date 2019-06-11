$(function () {
    $("#text-raw").on("paste", function () {
        $text = $(this);
        setTimeout(function (e) {
            $text.find("rt").empty();
            $text.focus();
            document.execCommand("selectAll");
            document.execCommand("copy");
            alert("ルビを取り除いた文章をコピーしました。");
        }, 100);
    });
});
