var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var tileSize = 32;
var tilex = Math.ceil(canvas.width / tileSize);
var tiley = Math.ceil(canvas.height / tileSize);
var tiles = {};
var images = ['performanceTask Assets/Grass.png', 'performanceTask Assets/Plant.png', 'performanceTask Assets/Stone Ground.png', 'performanceTask Assets/Struct.png', 'performanceTask Assets/Wall.png', 'performanceTask Assets/Props.png', 'performanceTask Assets/Shadow Plant.png', 'performanceTask Assets/Shadow.png', 'performanceTask Assets/player.png'];

var atlasImage = new Image();

atlasImage.src = images[0];
atlasImage.onload = async function() {  // add async keyword to the function
    let x = 0
    let y = 0
    for (let u = 0; u < 8; u++) {
        for (let i = 0; i < 9; i++) {
            let tile = await createImageBitmap(atlasImage, x, y, tileSize, tileSize); // add await keyword
            tiles["tiles" + (i+8*u)] = tile; // store the resolved ImageBitmap in the dictionary
            x += tileSize;
        }
        y += tileSize;
        x = 0;
    }
}
function grassScreen() {
    ctx.drawImage(tiles['tiles1'], 100, 100);
};

setInterval(grassScreen, 1000);