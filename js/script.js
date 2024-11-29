/**
 * @author MrDark <thanhngochoangbk@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('click', function(){
    // document.getElementById("my_audio").play();
    console.log('Welcome to our wedding!');
});

const param = new URLSearchParams(window.location.search);
const nameLabel = param.get("v");
const subTitle = param.get("s");
document.getElementById("name").innerHTML = nameLabel ?? "Thành Hoàng";
document.getElementById("subTitle").innerHTML = subTitle ?? "chị";
// Set the date we're counting down to
var countDownDate = new Date("Jan 4 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c Cám ơn vì đã đến dự: 03 tháng 1, 2025!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Thành Hoàng', styles1, styles2);

console.log(
    `%cMr. Dark!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)

document.getElementById('exportButton').addEventListener('click', function () {
    // Get image and text elements
    const img = document.getElementById('sourceImage');
    const text = document.getElementById('customText').textContent;
 
    // Create canvas and set dimensions
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw image on canvas
    img.onload = () => {
        context.drawImage(img, 0, 0);

        // Set text properties
        context.font = '40px Corinthia';
        context.fillStyle = '#674ea7';
        context.textAlign = 'center';

        // Add text below the image
        context.fillText(text, canvas.width / 2 + 30, img.height/2 + 30);

        // Create downloadable image
        const link = document.createElement('a');
        link.download = text+'.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    // Trigger image load in case it hasn't already loaded
    if (img.complete) {
        img.onload();
    }
});
