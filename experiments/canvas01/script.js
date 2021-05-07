var cn = document.getElementById('c')
var c = cn.getContext('2d')

balls = [];

window.onload = function () {
    c.save();
    for (let i = 0; i < 10; i++) {
        x = Math.floor(Math.random() * innerWidth);
        y = Math.floor(Math.random() * innerHeight);
        w = 30;
        h = 30;
        cc = genColor();
        bb = new ball(x, y, w, h, cc);
        balls.push(bb);
    }
    //console.log(balls)
    resize();
    anim();
};

function genColor() {
    chars = "0123456789ABCDEF"
    out = "#"
    for (i = 0; i < 6; i++) {
        char = chars[Math.floor(Math.random() * 16)]
        out += char;
    }
    //console.log('genColor = ' + out)
    return out
}

var ball = function (x, y, w, h, cc) {
    //console.log(`I am ball ${cc} with x = ${x} and y = ${y}`);
    this.x = x
    this.y = y
    this.w = w //radius
    this.h = h //unused
    this.cc = cc //color
    this.xr = true //x going to the right
    this.yt = true //y goint to the top
    this.draw = function () {
        //console.log('ball drawing itself')
        c.fillStyle = this.cc;
        //c.translate(this.x, this.y);
        c.beginPath();
        //c.arc(0, 0, this.w, 0, 2 * Math.PI, false)
        c.arc(this.x, this.y, this.w, 0, 2 * Math.PI, false)
        c.fill();
        c.restore();
    }
    this.move = function () {
        //console.log('moving')
        minx = this.w;
        miny = this.w;
        maxx = cn.width - this.w;
        maxy = cn.height -  this.w;
        switch (this.yt) {
            case true:
                //console.log('moving down');
                if(this.y >= maxy) {
                    this.yt = false;
                }
                break;
            case false:
                //console.log('moving up');
                if(this.y <= miny) {
                    this.yt = true
                }
                break;
            default:
                // throw "code is utterly broken"
                break;
        };
        if(this.yt){
            this.y += 1;
        } else {
            this.y -= 1;
        }
        switch (this.xr) {
            case true:
                //console.log('moving right');
                if(this.x >= maxx) {
                    this.xr = false;
                }
                break;
            case false:
                //console.log('moving left');
                if(this.x <= minx) {
                    this.xr = true;
                }
                break;
            default:
                // throw "code is utterly broken"
                break;
        };
        if(this.xr) {
            this.x += 1;
        } else {
            this.x -= 1;
        }
        this.draw();
    }
}

window.onresize = function () {
    resize();
};

function resize() {
    //console.log('resize')
    c.canvas.width = innerWidth;
    c.canvas.height = innerHeight;
    balls.forEach(e => {
        e.draw();
    });

}

function anim() {
    //console.log('anim');
    requestAnimationFrame(anim);
    c.fillStyle = "#A590FF11"
    c.fillRect(0, 0, cn.width, cn.height)
    balls.forEach(e => {
        e.move();
    })
}