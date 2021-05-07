const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

var starts = [] //for the background
var circles = [] //for the background

var player = { //object to store player data
    "x": innerWidth / 2,
    "y": innerHeight / 2,
    "r": Math.PI / 2, //angle, start looking up 90 degrees
    "p": 0, //points
    "xv": 0, //x axis velocity
    "yv": 0, //y axis velocity
    "v": 0, //speed
    "xa": 0, //x axis acceleration
    "ya": 0, //y axis acceleration
    "a": 0,  //acceleration
    "cc": "#ccc", //color
}

window.onload = function () {
    player.v = Math.sqrt(player.xv * player.xv + player.yv * player.yv);
    player.a = Math.sqrt(player.xa * player.xa + player.ya + player.ya);
    console.log(player);
    setInterval(function () {
        physics(15);
    }, 15);
    r();
    anim();
};

window.onresize = function () {
    r();
}

function r() {
    ctx.canvas.width = innerWidth;
    ctx.canvas.height = innerHeight;
}

window.onmousemove = function (e) {
    vectorx = e.clientX - player.x;
    vectory = player.y - e.clientY;
    //console.log(`vector = ${vectorx}, ${vectory}`)
    //calculate angle
    alpha = Math.atan(vectory / vectorx);
    //compensate for the left side of the circle
    if (vectorx < 0) {
        alpha += Math.PI
    }
    //put the vector to the mouse as the acceleration vector if not too big:
    vectorvalue = Math.sqrt(Math.pow(vectorx, 2) + Math.pow(vectory, 2));
    alimit = 100;
    /*if(vectorvalue < alimit){
        player.xa = vectorx;
        player.ya = vectory;
    } else {
        player.xa = Math.cos(alpha) * alimit;
        player.ya = Math.sin(alpha) * alimit
    }*/
    
    //player.xa = Math.cos(alpha) * ( alimit / Math.pow(vectorvalue, 1) );
    //player.ya = Math.sin(alpha) * ( alimit / Math.pow(vectorvalue, 1) );
    player.xa = Math.cos(alpha) * alimit;
    player.ya = Math.sin(alpha) * alimit

    player.r = alpha;

}

var frames = 0
var fps = 0
setInterval(function () {
    //console.log(`FPS: ${frames}`)
    fps = frames;
    frames = 0;
}, 1000);

function draw() {
    frames += 1

    //Reset the background
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    //Draw the player
    ctx.save();
    ctx.translate(player.x, player.y) //translate to center of player
    ctx.rotate(-player.r)
    //console.log(player.r)
    ctx.translate(-player.x, -player.y) //translate back
    ctx.fillStyle = player.cc;
    ctx.strokeStyle = "#2f6";
    var p = new Path2D();
    //p.beginPath();
    const size = 40;
    p.moveTo(player.x, player.y);
    p.lineTo(player.x - size, player.y + size);
    p.lineTo(player.x + size, player.y);
    p.lineTo(player.x - size, player.y - size);
    ctx.fill(p);
    ctx.restore();

    //show fps
    ctx.font = '20px sans'
    ctx.fillStyle = '#fff'
    ctx.fillText(`FPS: ${fps}`, 20, 40, 200)

    //acceleration red line
    var al = new Path2D();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    al.moveTo(player.x, player.y);
    al.lineTo(player.x + player.xa, player.y - player.ya);
    ctx.stroke(al);

    //velocity blue line
    var vl = new Path2D();
    ctx.strokeStyle = "#5577FF";
    ctx.lineWidth = 3;
    vl.moveTo(player.x, player.y);
    vl.lineTo(player.x + player.xv, player.y - player.yv);
    ctx.stroke(vl);
    ctx.lineWidth = 1;
}

function physics(t) {
    //t is the timestep
    t /= 1000;
    player.x = 1 / 2 * player.xa * Math.pow(t, 2) + player.xv + player.x;
    player.xv = player.xa * t + player.xv;

    player.y = (1 / 2 * player.ya * Math.pow(t, 2) + player.yv + player.y);
    player.yv = -(player.ya * t - player.yv);

    player.v = Math.sqrt(player.xv * player.xv + player.yv * player.yv);
    player.a = Math.sqrt(player.xa * player.xa + player.ya + player.ya); 
    //console.log(player.v)
}

function anim() {
    requestAnimationFrame(anim)
    draw()
}