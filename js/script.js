/**
 * @author MrDark <thanhngochoangbk@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('click', function(){
    autoPlay();
    exportImg();
    console.log('Welcome to our wedding!');
});
$(document).ready(function () {
    fetchData();
    $("a.smooth-scroll").on('click',smoothScroll);
})
let exported = 0;
function autoPlay() {
   
    const audio =   document.getElementById("my_audio");
    const increaseVolume = () => {
        const interval = setInterval(() => {
            if (audio.volume < 1) { 
                audio.volume = Math.min(audio.volume + 0.02, 1);
            } else {
                clearInterval(interval); 
            }
        }, 200); 
    };
    audio.volume = 0.4;
    audio.play().then(() => {
        increaseVolume();
    }).catch(error => {
        console.warn("Trình duyệt chặn tự động phát:", error);
    });
}
const param = new URLSearchParams(window.location.search);
const nameLabel = param.get("v") ?? "Anh/Chị";
const subTitle = param.get("s") ?? "quí";
document.getElementById("name").innerHTML = nameLabel ;
document.getElementById("subTitle").innerHTML = subTitle ;
document.title = "💗 " + nameLabel + " | Thành 💗 Huệ";
document.getElementById("client").value = subTitle + " " + nameLabel ;
// Set the date we're counting down to
var countDownDate = new Date("Jan 4 2025 00:00:00").getTime();
const fetchTime= function(){
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
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>" + days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}
// Update the count down every 1 second
var x = setInterval(function() {
    fetchTime();
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

const exportImg =  function () {
    if (exported) return;
    // Get image and text elements
    const img = document.getElementById('sourceImage');
    const text = subTitle + " " + nameLabel;

    // Create canvas and set dimensions
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

        // Draw the image on the canvas
        img.onload = () => {
            context.drawImage(img, 0, 0);
            exported = 1;
            // Set text properties
            context.font = '135px Dancing Script';
            context.fillStyle = '#b33a46';
            context.textAlign = 'center';

            // Add text to the canvas
            context.fillText(text, canvas.width / 2, 3590);

            // Create downloadable image
            const link = document.createElement('a');
            link.download = text + '.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };

        // Trigger image load in case it hasn't already loaded
        if (img.complete) {
            img.onload();
        }
   
};

document.getElementById('submitWish').addEventListener('click', () => {
    const fieldName = document.getElementById('client');
    const fieldContent = document.getElementById('contentMessage');
    const data = {
        nameData: fieldName.value,
        contentData: fieldContent.value,
    };
    console.log(data);
    // check field required
    if (data.nameData && data.contentData) {
        submitForm(data);
    }
});
async function fetchData() {
    const mess = await fetchSheetData('Sheet1!A2:C');
    const imgs = await fetchSheetData('Sheet2');
    console.log(mess);
    console.log(imgs);
    
}
function smoothScroll(event) {
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
}
async function fetchSheetData(range) {

    const sheetId = "1j3FAQKbta1uUUINPo1l_udiEe7b7OPlkVzrukPn8zcg"; 
    const apiKey = "AIzaSyBGnmaPsJMaMu9b-wJllFb9DZB83Rtsy1U"; 
   // const range = "Sheet1!A2:C";    // Adjust the range to your data
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Render the data
        const rows = data.values || [];
        return rows;
        // const table = document.createElement("table");
        // rows.forEach((row) => {
        //     const tr = document.createElement("tr");
        //     row.forEach((cell) => {
        //         const td = document.createElement("td");
        //         td.textContent = cell;
        //         tr.appendChild(td);
        //     });
        //     table.appendChild(tr);
        // });
        console.log(table);
        // document.getElementById("sheet-data").appendChild(table);
    } catch (error) {
        console.error("Error fetching data:", error);
    }


}

async function submitForm(data) {
    const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSd6Fv_Sn8Hm4ey2euP0hLGpOf39JVe8_mVmYVyTEusyJvfeMA/formResponse';
    const fieldName = 'entry.1036395145';
    const fieldContent = 'entry.2127760744';
    const formData = new FormData();

    formData.append(fieldName, data.nameData);
    formData.append(fieldContent, data.contentData);
    const urlEncodedData = new URLSearchParams(formData).toString();

    await fetch(formURL, {
        method: 'POST',
        body: urlEncodedData,
        mode: "no-cors" ,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}