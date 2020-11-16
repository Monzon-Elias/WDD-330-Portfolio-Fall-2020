//=================================================================   
//=============== HTML 5 CANVAS, AUDIO AND VIDEO ==================
//=================================================================

/*CREATING THE CANVAS*/

const parent = document.getElementById('canvas');

function createCanvas() {
    let canvas = document.createElement("CANVAS");
    canvas.width = "300";
    canvas.height = "300";
    canvas.style.border = "solid 2px";
    canvas.style.marginTop = "1vw"
    parent.appendChild(canvas);

    /*CREATING THE MOVIE*/
 
    let context = canvas.getContext("2d");
    let img = document.createElement("img");
    img.src = "https://raw.githubusercontent.com/Monzon-Elias/fluency-reports/master/images/horseMovieNewSize.jpg";
    img.onload = draw;

    let screen = new Path2D();
    screen.rect(0, 0, 300, 300);
    context.clip(screen);

    let row = 0, col = 0;
    function draw() {
        col = col + 1;
        if (col > 3) { col = 0; row += 1; }
        if (col == 3 && row == 2) { col = 0; row = 0; }

        context.drawImage(img, 0 - 290 * col, 0 - 320 * row)
        setTimeout(() => { draw() }, 40);
    };
}

/*CREATING THE VIDEO TAG*/

function createVideo() {
    let v = document.createElement("VIDEO");
    v.style.marginLeft = "2vw";
    if (v.canPlayType("video/mp4")) {
        v.setAttribute("src", "files/nippon_girl.mp4");
    } else {
        v.setAttribute("src", "");
    }
    v.setAttribute("width", "300");
    v.setAttribute("height", "300");
    v.setAttribute("controls", "controls");
    v.autoplay = true;
    parent.appendChild(v);
}

/*CREATING THE AUDIO TAG*/

function createAudio() {
    let a = document.createElement("AUDIO");
    a.style.marginLeft = "3vw";
    if (a.canPlayType("audio/mpeg")) {
        a.setAttribute("src", "https://raw.githubusercontent.com/Monzon-Elias/fluency-reports/master/images/Rurouni%20Kenshin%20OST%203%20-%2012-Hiten%20Mitsurugi%20Ryuu%20-%20Amakakeru%20Ryuu%20no%20Hirameki.mp3");
    } else {
        a.setAttribute("src", "");
    }
    a.setAttribute("width", "300");
    a.setAttribute("controls", "controls");
    parent.appendChild(a);
}