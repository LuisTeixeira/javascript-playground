function HTMLActuator() {
    this.cardContainer = document.querySelector(".card-container");
}

HTMLActuator.prototype.actuate = function (grid) {
    var self = this;

    window.requestAnimationFrame(function() {
        //self.clearContainer(self.cardContainer);

        grid.matrix.forEach(function(column) {
            column.forEach(function(card) {
                self.addCard(card);
            });
        });
    });
};

HTMLActuator.prototype.addCard = function(card) {
    self = this;

    var row =  document.querySelector(".row" + card.x);
    var flipContainer = document.createElement("div");
    flipContainer.classList.add("flip-container");

    row.appendChild(flipContainer);

    var flipCoontainer = document.createElement("div");
    flipCoontainer.classList.add("flip");
    flipContainer.appendChild(flipCoontainer);

    var wrapper = document.createElement("div");
    if (card.image){
        var inner = document.createElement("img");
        inner.src = "icons/" + card.id + ".png";
    }else {
        var inner = document.createElement("div");
        inner.textContent = card.id;
    }
    var position = {x: card.x, y: card.y};
    var positionClass = this.positionClass(position);

    var classes = ["card", positionClass, "card-front"];
    this.applyClasses(wrapper, classes);

    inner.classList.add("card-inner");
    
    var backgroundCard = this.createBackCard();
    backgroundCard.classList.add("card");
    backgroundCard.classList.add(positionClass);

    wrapper.appendChild(inner);
    flipCoontainer.appendChild(backgroundCard);
    flipCoontainer.appendChild(wrapper);

    //this.cardContainer.appendChild(flipContainer);
};

HTMLActuator.prototype.normalizePosition = function(position) {
    return {x: position.x + 1, y: position.y + 1};
};

HTMLActuator.prototype.positionClass = function (position) {
    position = this.normalizePosition(position);
    return "card-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
    element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.createBackCard = function () {
    var wrapper = document.createElement("div");
    var inner = document.createElement("img");
    inner.src = "icons/background.png";
    inner.classList.add("card-inner");
    wrapper.appendChild(inner);
    wrapper.classList.add("card-back");
    return wrapper;
}