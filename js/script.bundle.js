(() => {
  // js/script.js
  (function($2) {
    "use strict";
    $2(".sakura-falling").sakura();
  })(jQuery);
  $(document).on("click", function() {
    autoPlay();
    console.log("Welcome to our wedding!");
  });
  $(document).ready(function() {
    fetchData();
    exportImg();
    $("a.smooth-scroll").on("click", smoothScroll);
  });
  var exported = 0;
  function autoPlay() {
    const audio = document.getElementById("my_audio");
    const increaseVolume = () => {
      const interval = setInterval(() => {
        if (audio.volume < 1) {
          audio.volume = Math.min(audio.volume + 0.02, 1);
        } else {
          clearInterval(interval);
        }
      }, 200);
    };
    audio.volume = 0.5;
    audio.play().then(() => {
      increaseVolume();
    }).catch((error) => {
      console.warn("Tr\xECnh duy\u1EC7t ch\u1EB7n t\u1EF1 \u0111\u1ED9ng ph\xE1t:", error);
    });
  }
  var param = new URLSearchParams(window.location.search);
  var nameLabel = param.get("v") ?? "Anh/Ch\u1ECB";
  var subTitle = param.get("s") ?? "qu\xED";
  document.getElementById("name").innerHTML = nameLabel;
  document.getElementById("subTitle").innerHTML = subTitle;
  document.title = "\u{1F497} " + nameLabel + " | Th\xE0nh \u{1F497} Hu\u1EC7";
  document.getElementById("client").value = subTitle + " " + nameLabel;
  var countDownDate = (/* @__PURE__ */ new Date("Jan 4 2025 00:00:00")).getTime();
  var fetchTime = function() {
    var now = (/* @__PURE__ */ new Date()).getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1e3 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
    var minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
    var seconds = Math.floor(distance % (1e3 * 60) / 1e3);
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>" + days + "<br>Days</div><div class='hours block'>" + hours + "<br>Hours</div><div class='minutes block'>" + minutes + "<br>Minutes</div><div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
  };
  var x = setInterval(function() {
    fetchTime();
  }, 1e3);
  var styles = [
    "background: linear-gradient(#D33106, #571402)",
    "border: 4px solid #3E0E02",
    "color: white",
    "display: block",
    "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
    "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
    "line-height: 40px",
    "text-align: center",
    "font-weight: bold",
    "font-size: 32px"
  ].join(";");
  var styles1 = [
    "color: #FF6C37",
    "display: block",
    "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
    "line-height: 40px",
    "font-weight: bold",
    "font-size: 32px"
  ].join(";");
  var styles2 = [
    "color: teal",
    "display: block",
    "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
    "line-height: 40px",
    "font-weight: bold",
    "font-size: 32px"
  ].join(";");
  console.log("\n\n%c C\xE1m \u01A1n v\xEC \u0111\xE3 \u0111\u1EBFn d\u1EF1: 03 th\xE1ng 1, 2025!", styles);
  console.log("%cYour presence is requested!%c\n\nRegards: Th\xE0nh Ho\xE0ng", styles1, styles2);
  console.log(
    `%cMr. Dark!

`,
    "color: yellow; background:tomato; font-size: 24pt; font-weight: bold"
  );
  var exportImg = function() {
    if (exported) return;
    const img = document.getElementById("sourceImage");
    if (!img) {
      console.error("Image not found");
      return;
    }
    const text = `${subTitle} ${nameLabel}`;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    const draw = () => {
      context.drawImage(img, 0, 0);
      context.font = "135px Dancing Script";
      context.fillStyle = "#b33a46";
      context.textAlign = "center";
      context.fillText(text, canvas.width / 2, 3590);
      img.src = canvas.toDataURL("image/png");
      $(img).parents(".body_wrapper").show();
      exported = true;
    };
    if (img.complete) {
      draw();
    } else {
      img.onload = draw;
      img.onerror = () => console.error("Failed to load image");
    }
  };
  document.getElementById("submitWish").addEventListener("click", () => {
    const fieldName = document.getElementById("client");
    const fieldContent = document.getElementById("contentMessage");
    const data = {
      nameData: fieldName.value,
      contentData: fieldContent.value
    };
    console.log(data);
    if (data.nameData && data.contentData) {
      submitForm(data);
    }
  });
  async function fetchData() {
    const mess = await fetchSheetData("Sheet1!A2:C");
    const imgs = await fetchSheetData("Sheet2");
    console.log(mess);
    console.log(imgs);
  }
  function smoothScroll(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  }
  async function fetchSheetData(range) {
    const sheetId = "1j3FAQKbta1uUUINPo1l_udiEe7b7OPlkVzrukPn8zcg";
    const apiKey = "AIzaSyBGnmaPsJMaMu9b-wJllFb9DZB83Rtsy1U";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const rows = data.values || [];
      return rows;
      console.log(table);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function submitForm(data) {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSd6Fv_Sn8Hm4ey2euP0hLGpOf39JVe8_mVmYVyTEusyJvfeMA/formResponse";
    const fieldName = "entry.1036395145";
    const fieldContent = "entry.2127760744";
    const formData = new FormData();
    formData.append(fieldName, data.nameData);
    formData.append(fieldContent, data.contentData);
    const urlEncodedData = new URLSearchParams(formData).toString();
    await fetch(formURL, {
      method: "POST",
      body: urlEncodedData,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
})();
