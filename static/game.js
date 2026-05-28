const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = {
    x: 50,
    y: 300,
    vy: 0,
    onGround: true
};

let gravity = 0.8;

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && player.onGround) {
        player.vy = -12; // прыжок
        player.onGround = false;
    }
});

function update() {
    player.vy += gravity;
    player.y += player.vy;

    if (player.y >= 300) {
        player.y = 300;
        player.vy = 0;
        player.onGround = true;
    }
}

function draw() {
    ctx.clearRect(0, 0, 800, 400);

    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, 30, 30);
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();