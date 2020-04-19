function Grid() {
    this.size = 4;
    this.matrix = [];
    for (x = 0; x < this.size; x++) {
        this.matrix[x] = [];
        for (y = 0; y < this.size; y++) {
            this.matrix[x][y] = null;
        }
    }
}

Grid.prototype.addCard = function (card) {
    this.matrix[card.x][card.y] = card;
}

Grid.prototype.getFreePositions = function() {
    freePositions = [];
    for (x = 0; x < this.size; x++) {
        for (y = 0; y < this.size; y++) {
            if (this.matrix[x][y] == null) {
                freePositions.push({x: x, y: y});
            }
        }
    }
    return freePositions;
}

Grid.prototype.getRandomFreePosition = function () {
    var freePositions = this.getFreePositions();
    var i = Math.floor(Math.random() * (freePositions.length) );
    return freePositions[i];
}