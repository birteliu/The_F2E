var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d"); //製造在畫布上繪圖的環境；參數 contextID 指定要在畫布上繪製的類型，"2d" 表示二維繪圖

canvas.width = 600;
canvas.height = 500;

//大圓
ctx.beginPath();
ctx.arc(300, 250, 170, 0, 2 * Math.PI); //X中心點、Y中心點、半徑、開始角度(0=右側X軸開始)、Math.PI(0到180度)
ctx.strokeStyle = "rgba(255,255,255,.5)";
ctx.stroke();

//小圓
ctx.beginPath();
ctx.arc(300, 250, 130, 0, 2 * Math.PI);
ctx.strokeStyle = "#fff";
ctx.stroke();

//黃色
ctx.beginPath();
ctx.arc(520, 80, 30, 0, 2 * Math.PI);
ctx.fillStyle = "#F5AF5F";
ctx.fill();

//紅色
ctx.beginPath();
ctx.moveTo(40, 150);
ctx.lineTo(70, 130);
ctx.lineTo(100, 140);
ctx.lineTo(110, 170);
ctx.lineTo(100, 190);
ctx.lineTo(60, 190);
ctx.closePath();
ctx.fillStyle = "#E7465D";
ctx.fill();

//藍色
ctx.beginPath();
ctx.moveTo(430, 390);
ctx.lineTo(400, 440);
ctx.lineTo(460, 440);
ctx.closePath();
ctx.fillStyle = "#3676BB";
ctx.fill();

//電池
ctx.beginPath();
ctx.moveTo(290, 230);
ctx.lineTo(310, 230);
ctx.lineTo(310, 270);
ctx.lineTo(290, 270);
ctx.closePath();
ctx.fillStyle = "#F5AF5F";
ctx.fill();

//電池頭
ctx.beginPath();
ctx.moveTo(295, 230);
ctx.lineTo(305, 230);
ctx.lineTo(305, 225);
ctx.lineTo(295, 225);
ctx.closePath();
ctx.fillStyle = "#fff";
ctx.fill();
