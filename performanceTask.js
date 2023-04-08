var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
var tileSize = 32;
var tilex = Math.ceil(canvas.width / tileSize);
var tiley = Math.ceil(canvas.height / tileSize);
var tiles = [];
var player = [];
var playerState = 'idle';
var keyPresses = {};
var userSize = 128;

// Event Listeners
window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event) {
  keyPresses[event.key] = true;
};

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
  keyPresses[event.key] = false;
  playerState = 'idle';
};

//TileImages grass, stone, and structure
for (let i = 0; i < 156; i++) {
    tiles[i] = new Image();
    tiles[i].src = 'performanceTask Assets/tiles/tile' + i.toString() + '.png';
};

//Player Images idle and movement
for (let i = 0; i < 40; i++) {
    player[i] = new Image();
    player[i].src = 'performanceTask Assets/player/player' + i.toString() + '.png';
};

class Map {
    xTileLocation = 0;
    yTileLocation = 0;
    grassLand() {
        for (let i = 0; i < this.tiley; i++) {
            for (let j = 0; j< this.tilex; j++) {
                ctx.drawImage(this.tiles[0], this.xTileLocation, this.yTileLocation);
                this.xTileLocation += this.tileSize;
            };
            this.xTileLocation = 0;
            this.yTileLocation += this.tileSize;
        };
        this.xTileLocation = 0;
        this.yTileLocation = 0;
    };
};

class Player {
    x = canvas.width/2;
    y = canvas.height/2;

    tick = 0;
    playerImage = player;
    state = playerState;

    movementSpeed = 5;
    draw() {
        this.state = playerState

        // Movement
        if (keyPresses.w) {
            this.y -= this.movementSpeed;
            playerState = 'moving';
        }
        if (keyPresses.s) {
            this.y += this.movementSpeed;
            playerState = 'moving';
        }
        if (keyPresses.a) {
            this.x -= this.movementSpeed;
            playerState = 'moving';
        }
        if (keyPresses.d) {
            this.x += this.movementSpeed;
            playerState = 'moving';
        }





        // IDLE STATE
        if (this.state == 'idle') {
            if(this.tick==20 || this.tick > 20) {
                this.tick = 0;
            };
            ctx.drawImage(this.playerImage[this.tick], this.x - 64, this.y + 64, 128, 128);
        }
        else {
            if (this.state == 'moving') {
                if(this.tick < 21 || this.tick == 39) {
                    this.tick = 21;
                };
                ctx.drawImage(this.playerImage[this.tick], this.x -64, this.y + 64, 128, 128);
            }
        }
        this.tick = this.tick + 1;
    };
};

let user = new Player();
let map = new Map();
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    map.grassLand();
    user.draw();
};
setInterval(gameLoop, 1000/24);