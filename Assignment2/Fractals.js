<script>
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

    ctx.lineTo(0,320); ctx.lineTo(110,375); ctx.lineTo(0,375); ctx.lineTo(0,500);
    ctx.lineTo(155,440); ctx.lineTo(190,375); ctx.lineTo(370,375); ctx.lineTo(250,440);
    ctx.lineTo(250,500); ctx.lineTo(375,500); ctx.lineTo(375,440); ctx.lineTo(500,500);
    ctx.lineTo(500,370); ctx.lineTo(440,370); ctx.lineTo(400,315); ctx.lineTo(330,280);
    ctx.lineTo(250,250); ctx.lineTo(420,180); ctx.lineTo(375,250); ctx.lineTo(500,250);
    ctx.lineTo(500,180); ctx.lineTo(390,125); ctx.lineTo(500,125); ctx.lineTo(500,0);
    ctx.lineTo(340,60); ctx.lineTo(310,125); ctx.lineTo(190,125); ctx.lineTo(125,250);
    ctx.lineTo(0,250);

    ctx.stroke();
    ctx.fillStyle = 'navy';
    ctx.fill();
}

init();
function transformations() {
    ctx.save();
    ctx.transform(-0.25, 0, 0, 0.25, canvas.width/4, canvas.width/4);
    ctx.rotate(Math.PI/2);
    ctx.fillRect(250,250,30,30);
    drawFigure();
    ctx.restore();

    ctx.save();
    ctx.transform(0.5, 0, 0, 0.5, canvas.width/2, 0);
    drawFigure();
    ctx.restore();

    ctx.save();
    ctx.transform(-0.5, 0, 0, 0.5, canvas.width, canvas.width/2);
    drawFigure();
    ctx.restore();

    ctx.save();
    ctx.transform(-0.5, 0, 0, -0.5, canvas.width/2, canvas.width);
    drawFigure();
    ctx.restore();
}

transformations();
