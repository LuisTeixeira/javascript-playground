var data = [
    "Birne",
    "Bein",
    "Toilettenpapier",
    "Zaun",
    "Zahn",
    "Sahne",
    "Leckerli",
    "Hund"
];

function GameManager(Actuator) {
    this.actuator = new Actuator;
    this.setup();
}

GameManager.prototype.setup = function() {
    this.grid = new Grid();
    this.addCards();
    this.actuate()
};

GameManager.prototype.addCards = function() {
    for (var i = 0; i < 8; i++) {
        this.addCardPair(data[i]);
    }
};

GameManager.prototype.addCardPair = function(id) {
    var wordCardPosition = this.grid.getRandomFreePosition();
    var wordCard = new Card(id, false, wordCardPosition);
    this.grid.addCard(wordCard);

    var imageCardPosition = this.grid.getRandomFreePosition();
    imageCard = new Card(id, true, imageCardPosition);
    this.grid.addCard(imageCard);
}

GameManager.prototype.actuate = function() {
    this.actuator.actuate(this.grid);
}