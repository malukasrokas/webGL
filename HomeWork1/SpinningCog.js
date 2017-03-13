var ctx, canvas;
var edgeLength = 300;
var numberOfTeeth, cogRadiusInput, spikeLengthInput;
var teeth = 16;
var cogRadius = 65;
var teethCircleRadius = 85;

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(drawCog, 25);
}

function onLoad() {
    numberOfTeeth = document.getElementById('numberOfTeeth');
    cogRadiusInput = document.getElementById('cogRadiusInput');
    spikeLengthInput = document.getElementById('spikeLengthInput');
}

function changeTeeth() {
    teeth = numberOfTeeth.value;
    cogRadius = cogRadiusInput.value;
    teethCircleRadius = teethLengthInput.value;
}

function drawCog() {

    var x, y, rSmall, rBig;
    var incSmall = 360/teeth; // dantu inkrementai
    var incBig = 360/teeth/2;

    // Sukimasis aplink savo asi
    ctx.clearRect(0, 0, edgeLength, edgeLength);
    ctx.translate(edgeLength/2, edgeLength/2);
    ctx.rotate(Math.PI / 180);
    ctx.translate(-edgeLength/2, -edgeLength/2);

    // Dantiracio apskritimas
    ctx.beginPath();
    ctx.fillStyle = '#375392';
    ctx.arc(150, 150, cogRadius, 0, Math.PI*2, true);
    ctx.fill();

    // Dantiracio vidurys
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(150, 150, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#375392';
    rSmall = rBig = 0;

    // Dantu generavimas
    for (i = 0; i < teeth; i++) {

        // Randamos trikampiu krastines koordinates
        x = 150 + cogRadius*Math.cos(Math.PI*rSmall/180);
        y = 150 + cogRadius*Math.sin(Math.PI*rSmall/180);

        // Randamos trikampiu virsunes koordinates
        spikeX = 150 + teethCircleRadius*Math.cos(Math.PI*(rSmall+incBig)/180);
        spikeY = 150 + teethCircleRadius*Math.sin(Math.PI*(rSmall+incBig)/180);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(spikeX, spikeY);
        ctx.lineTo(150 + cogRadius*Math.cos(Math.PI*(rSmall+incSmall)/180), 150 + cogRadius*Math.sin(Math.PI*(rSmall+incSmall)/180));
        ctx.fill();
        ctx.stroke();

        rSmall += incSmall;
    }

}
init();
