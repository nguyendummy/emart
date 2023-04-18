const eyeBlinkStarContainer = document.querySelector(".eye-blink-star-container");
const eyeBlinkStar = document.querySelector(".eye-blink-star");
const eyeRight = document.querySelector(".e-right");
const eyelashBlink = document.querySelector(".eyelash-blink");
let animationEyeRightBlink = "eyeRightBlink";
let timing = 9000;


function timingAlternate() {
    setTimeout(() => {
        
    }, 9000);
}

// let eyeBlinkStarTiming =  setTimeout(() => {
//     eyeRight.style.animationName = animationEyeRightBlink;
//     if(animationEyeRightBlink == "eyeRight"){
//         animationEyeRightBlink = "eyeRightBlink";
//         eyeBlinkStar.style.opacity = 0;
//         eyeBlinkStar.style.top = "25%";
//         eyeBlinkStar.style.right = "4%";
//         eyelashBlink.style.top = "42% !important";
//         eyelashBlink.style.right = "50px !important";
//         timing = 9000;
//
//     }else{
//         animationEyeRightBlink = "eyeRight";
//         eyeBlinkStar.style.opacity = 1;
//         eyeBlinkStar.style.top = "30%";
//         eyeBlinkStar.style.right = "8%";
//         timing = 3000;
//     }
//     console.log(timing);
// },
// timing);

function timingCallback() {
    setTimeout(() => {
        
    }, 3000);
}
// let eyeBlinkStarTimingEnd = setTimeout(() => {
//     eyeBlinkStarTiming;
//     console.log("hello");
// }, 3000);

let textDisplay = document.getElementById("display-text");
let eyeContainer = document.getElementById('eye-container');
let dialogContainer = document.getElementById('dialog-container');
let btns = document.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', ()=>{
        dialogContainer.style.display = 'none';
        alert("Yeahh!!! Tha lỗi cho a rồi đó nhá <3");
    })
}
let myMessage = ['Đừng vội tắt nhé!', 'A có điều muốn nói...','đó là...', 'Hmm...', 'Nói sao bây giờ nhỉ?', 'A biết bé đang giận a lắm'
    , '....','Cả ngày thấy bé online','..cơ mà cũng không biết nói với bé sao nữa','Bé giận a a biết mà','Nhưng mà...',
'Bubu biết sai òi', 'Bé tha lỗi cho a nha','......','Nói như thế này...', 'Bé hok tha lỗi đâu nhỉ.', 'Cơ mà...', 'A biết sai òi..','Thật sự biết saii!','A sẽ sửa sai..','không lặp lại nữa',
'Bé biết hok...','Cảm giác bé cục xúc...','A...','cảm giác như cả thế giới sụp đổ','...','đôi lúc lại lo lắng...','thỉnh thoảng lại khó chịu...','Bé đừng lạnh nhạt với a nữa...','Bé tha lỗi cho a nhaaa!!','A yêu bé nhìuuuu lắm í.'];
let count =0;
let time =  setInterval(function () {
    textDisplay.style.transition = 'transform 5s linear';
    textDisplay.style.transform = 'translate(-320px, -100%)';
    setTimeout(()=>{
        textDisplay.style.transition = 'none';
        textDisplay.style.right = '-0px';
        textDisplay.style.transform = 'translate(100%, -100%)';
        textDisplay.innerHTML = myMessage[count];
        if(count >= myMessage.length) {
            clearInterval(time);
            eyeContainer.style.display = 'block';
            dialogContainer.style.display = 'block';
        }
        count++;
    },5000);
}, 6000)
