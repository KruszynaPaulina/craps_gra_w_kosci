var cwidth = 400; 
var cheight = 300;
var dicex = 50; 
var dicey = 50;
var dicewidth = 100; 
var diceheight = 100;
var dotrad = 6;
var ctx;
var dx;
var dy;
var firstturn = true;
var point;

function throwdice() {

	var sum;
	var ch = 1 + Math.floor(Math.random() * 6);
	sum = ch;

	dx = dicex;
	dy = dicey;

	drawface(ch);

	dx = dicex + 150;

	ch = 1 + Math.floor(Math.random() * 6);
	sum += ch;

	drawface(ch);

	if (firstturn) {
		switch(sum) {
			case 7:
			case 11:
				document.f.outcome.value="Wygrałeś!";
				break;
			case 2:
			case 3:
			case 12:
				document.f.outcome.value="Przegrałeś!";
				break;
			default:
				point = sum;
				document.f.pv.value=point;
				firstturn = false;
				document.f.stage.value="Rzucaj jeszcze raz!";
				document.f.outcome.value="";
		}
	} else {
		switch(sum) {
			case point:
				document.f.outcome.value="Wygrałeś!";
				document.f.stage.value="Pierwszy rzut.";
				document.f.pv.value="";
				firstturn = true;
				break;
			case 7:
				document.f.outcome.value="Przegrałeś!";
				document.f.stage.value="Pierwszy rzut.";
				document.f.pv.value="";
				firstturn = true;
		}
	}

}

function drawface(n) {

	ctx = document.getElementById('canvas').getContext('2d');
	ctx.lineWidth = 5;
	ctx.clearRect(dx, dy, dicewidth, diceheight);
	ctx.strokeRect(dx, dy, dicewidth, diceheight);
	var dotx;
	var doty;
	ctx.fillStyle = "#009966";

	switch(n) {
		case 1:
			draw1();
			break;
		case 2:
			draw2();
			break;
		case 3:
			draw2();
			draw1();
			break;
		case 4:
			draw4();
			break;
		case 5:
			draw4();
			draw1();
			break;
		case 6: 
			draw4();
			draw2mid();
			break;
	}

}

function draw1() {

	var dotx;
	var doty;

	ctx.beginPath();

	dotx = dx + .5 * dicewidth;
	doty = dy + .5 * diceheight;

	ctx.arc(dotx, doty, dotrad, 0, Math. PI * 2, true);
	ctx.closePath();
	ctx.fill();

}

function draw2() {

	var dotx;
	var doty;

	ctx.beginPath();

	dotx = dx + 3 * dotrad;
	doty = dy + 3 * dotrad;

	ctx.arc(dotx, doty, dotrad, 0, Math. PI * 2, true);

	dotx = dx + dicewidth - 3 * dotrad;
	doty = dy + diceheight - 3 * dotrad;

	ctx.arc(dotx, doty, dotrad, 0, Math. PI * 2, true);
	ctx.closePath();
	ctx.fill();

}

function draw4() {

	var dotx;
	var doty;

	ctx.beginPath();

	dotx = dx + 3 * dotrad;
	doty = dy + 3 * dotrad;

	ctx.arc(dotx, doty, dotrad, 0, Math. PI * 2, true);

	dotx = dx + dicewidth - 3 * dotrad;
	doty = dy + diceheight - 3 * dotrad;

	ctx.arc(dotx, doty, dotrad, 0, Math. PI * 2, true);

	ctx.closePath();
	ctx.fill();

	ctx.beginPath();

	dotx = dx + 3 * dotrad;
	doty = dy + diceheight - 3 * dotrad;

	ctx.arc(dotx, doty, dotrad, 0, Math. PI * 2, true);

	dotx = dx + dicewidth - 3 * dotrad;
	doty = dy + 3 * dotrad;

	ctx.arc(dotx, doty, dotrad, 0, Math. PI * 2, true);

	ctx.closePath();
	ctx.fill();

}

function draw2mid() {

	var dotx;
	var doty;

	ctx.beginPath();

	dotx = dx + 3 * dotrad;
	doty = dy + .5 * diceheight;

	ctx.arc(dotx, doty, dotrad, 0, Math. PI * 2, true);

	dotx = dx + dicewidth - 3 * dotrad;
	doty = dy + .5 * diceheight;

	ctx.arc(dotx, doty, dotrad, 0, Math. PI * 2, true);

	ctx.closePath();
	ctx.fill();

}

