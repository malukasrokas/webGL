var canvas, ctx;

function init() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }
}

function drawFigure() {
    ctx.beginPath();
    ctx.moveTo(0,250);

    ctx.lineTo(0,315); ctx.lineTo(110,370); ctx.lineTo(0,370); ctx.lineTo(0,500);
    ctx.lineTo(155,440); ctx.lineTo(190,375); ctx.lineTo(370,375); ctx.lineTo(250,440);
    ctx.lineTo(250,500); ctx.lineTo(375,500); ctx.lineTo(375,440); ctx.lineTo(500,500);
    ctx.lineTo(500,375); ctx.lineTo(440,375); ctx.lineTo(400,310); ctx.lineTo(330,280);
    ctx.lineTo(250,250); ctx.lineTo(420,180); ctx.lineTo(370,250); ctx.lineTo(500,250);
    ctx.lineTo(500,180); ctx.lineTo(390,120); ctx.lineTo(500,120); ctx.lineTo(500,0);
    ctx.lineTo(340,60); ctx.lineTo(310,125); ctx.lineTo(190,125); ctx.lineTo(125,250);
    ctx.lineTo(0,250);

    ctx.stroke();
    ctx.fillStyle = 'navy';
    ctx.fill();
}

init();
drawFigure();
