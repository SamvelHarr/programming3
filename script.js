/*var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],]
*/
var matrix = []


function matrixGenerator(size, countGrass, countGrassEater, countGrassSaver, countPredator, countVirus, countSpawner) {
    for (var i = 0; i < size; i++) {
        matrix.push([])
        for (var j = 0; j < size; j++) {
            matrix[i].push(0)
        }

    }
    for (var k = 0; k < countGrass; k++) {
        var x = Math.floor(random(size))
        var y = Math.floor(random(size))
        matrix[y][x] = 1
    }
    for (var k = 0; k < countGrassEater; k++) {
        var x = Math.floor(random(size))
        var y = Math.floor(random(size))
        matrix[y][x] = 2
    }
    for (var k = 0; k < countGrassSaver; k++) {
        var x = Math.floor(random(size))
        var y = Math.floor(random(size))
        matrix[y][x] = 3
    }
    for (var k = 0; k < countPredator; k++) {
        var x = Math.floor(random(size))
        var y = Math.floor(random(size))
        matrix[y][x] = 4
    }
    for (var k = 0; k < countVirus; k++) {
        var x = Math.floor(random(size))
        var y = Math.floor(random(size))
        matrix[y][x] = 5
    }
    for (var k = 0; k < countSpawner; k++) {
        var x = Math.floor(random(size))
        var y = Math.floor(random(size))
        matrix[y][x] = 7
    }
}

var sizee = prompt("size")
var side = 900 / sizee
var grassArr = []
var grassEaterArr = []
var virusArr = []
var predatorArr = []
var spawnerArr = []
var grassSaverArr = []
var spawnerCount = 2
var snake
function setup() {
    frameRate(5)
    matrixGenerator(sizee, sizee, sizee / 8, sizee / 8, sizee / 8, sizee / 8, spawnerCount)
    createCanvas(matrix[0].length * side, matrix.length * side)
    background('#acacac')
    snake=new Snake(Math.floor(sizee/4), 0)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                var grassSaver = new GrassSaver(x, y)
                grassSaverArr.push(grassSaver)
            }
            else if (matrix[y][x] == 4) {
                var predator = new Predator(x, y)
                predatorArr.push(predator)
            }
            else if (matrix[y][x] == 5) {
                var virus = new Virus(x, y)
                virusArr.push(virus)
            }
            else if (matrix[y][x] == 7) {
                var newSpawner = new Spawner(x, y)
                spawnerArr.push(newSpawner)
            }
        }
    }
}



function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 2) {
                fill("red")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 3) {
                fill("cyan")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 4) {
                fill("yellow")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 5) {
                fill("#4f0341")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 6) {
                fill("#a68b4c")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 7) {
                fill("black")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 8) {
                fill("coral")
                rect(x * side, y * side, side, side)
            }
        }
    }

    for (var i = 0; i < grassArr.length; i++) {
        grassArr[i].mul()
    }
    for (var i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()
    }
    for (var i = 0; i < grassSaverArr.length; i++) {
        grassSaverArr[i].eat()
    }
    for (var i = 0; i < predatorArr.length; i++) {
        predatorArr[i].eat()
    }
    for (var i = 0; i < virusArr.length; i++) {
        virusArr[i].eat()
    }
    for (var i = 0; i < spawnerArr.length; i++) {
        spawnerArr[i].spawn()
    }
    if(snake!=0){
        snake.generate()
    }
}