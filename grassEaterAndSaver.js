class GrassEater {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = Math.floor(sizee/2.5)
        this.directions = []
    }

    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    move() {
        if (this.energy > 0) {
            this.getNewCoordinates()

            var emptyCells = this.chooseCell(0)
            var oneEmptyCell = random(emptyCells)
            if (oneEmptyCell) {
                matrix[this.y][this.x] = 0
                var neighX = oneEmptyCell[0]
                var neighY = oneEmptyCell[1]
                matrix[neighY][neighX] = 2
                this.y = neighY
                this.x = neighX
                this.energy--
            }
        }
        else {
            this.die()
        }
    }

    mul() {
        if (this.energy >= 35) {
            var newCell = random(this.chooseCell(0))
            if (newCell) {
                var newGrassEater = new GrassEater(newCell[0], newCell[1])
                grassEaterArr.push(newGrassEater)
                matrix[newCell[1]][newCell[0]] = 2
            }
        }
    }

    die() {
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1)
                matrix[this.y][this.x] = 0
                break
            }
        }
    }

    eat() {
        this.getNewCoordinates()
        var grasses = this.chooseCell(1)
        var oneGrass = random(grasses)
        if (oneGrass) {
            this.energy+=3
            var oneGrassX = oneGrass[0]
            var oneGrassY = oneGrass[1]
            matrix[oneGrassY][oneGrassX] = 2
            matrix[this.y][this.x] = 0
            this.y = oneGrassY
            this.x = oneGrassX
            for (var i in grassArr) {
                if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break
                }
            }
        }
        else {
            this.move()
        }
        if (this.energy >= 35 && grassEaterArr.length<sizee*sizee/3) {
            this.mul()
        }
    }
}


class GrassSaver {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = Math.floor(sizee/2.5)
        this.directions = []
    }

    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    move() {
        if (this.energy > 0) {
            this.getNewCoordinates()

            var emptyCells = this.chooseCell(0)
            var oneEmptyCell = random(emptyCells)
            if (oneEmptyCell) {
                matrix[this.y][this.x] = 0
                var neighX = oneEmptyCell[0]
                var neighY = oneEmptyCell[1]
                matrix[neighY][neighX] = 3
                this.y = neighY
                this.x = neighX
                this.energy--
            }
        }
        else {
            this.die()
        }
    }

    mul() {
        if (this.energy >= 40) {
            var newCell = random(this.chooseCell(0))
            if (newCell) {
                var newGrassSaver = new GrassSaver(newCell[0], newCell[1])
                grassSaverArr.push(newGrassSaver)
                matrix[newCell[1]][newCell[0]] = 3
            }
        }
    }

    die() {
        for (var i in grassSaverArr) {
            if (this.x == grassSaverArr[i].x && this.y == grassSaverArr[i].y) {
                grassSaverArr.splice(i, 1)
                matrix[this.y][this.x] = 0
                break
            }
        }
    }

    eat() {
        this.getNewCoordinates()
        var cells = this.chooseCell(2)
        var oneCell = random(cells)
        if (oneCell) {
            this.energy+=3
            var oneCellX = oneCell[0]
            var oneCellY = oneCell[1]
            matrix[oneCellY][oneCellX] = 3
            matrix[this.y][this.x] = 0
            this.y = oneCellY
            this.x = oneCellX
            for (var i in grassEaterArr) {
                if (oneCellX == grassEaterArr[i].x && oneCellY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
        }
        else {
            this.move()
        }
        if (this.energy >= 40) {
            this.mul()
        }
    }
}
