$(document).ready(function () {
 var c = 0;
    var h = 0;
    
    //This code will run after your page loads
 $("#score").html('Score : '+c+'<br> High Score : '+h);
    $("#yeti").mousedown(function () {
        alert("Yaaaarrrr!");
    });
    //Shuffling Random Images//
    RandomImage();
    $(".Peng").on('click', function (event) {
        $("<audio></audio>").attr({
            'src': 'images/hscr.wav',
            'volume': 1,
            'autoplay': 'autoplay'
        }).appendTo("body");
        setGame($(this));

    });
    //Updating Score//
    function setGame(pen) {
   
    c = c + 1;
    var num = pen.attr('id');
    var Char = num.substr(num.length - 1);
    if (pen.hasClass("Peng yetti"))
    {
       
        pen.css('background-image', 'url(images/yeti.png)');
        alert("Yaaaarrrr ! Its Yetiiit");
        h = c;
        $("#score").html('Score: '+c+'<br> High Score : '+ h);
        alert("Game Over. Want to Play Next Game Click Ok.");
        location.reload();

        
    } 
    else 
    {
        pen.css('background-image', 'url(images/penguin_' + Char + '.png)');
        $("#score").html('Score : '+c+'<br> High Score : '+h);
        
    }

}
    function RandomImage() {


var n = Math.floor(Math.random() * 12);

       $("#penguin" + n).addClass('yetti');
    $("#penguin" + n).attr('id', 'yeti');

}
function empty(){
   
}
});
