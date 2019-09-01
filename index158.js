let gameConsole = 'PS4';
let budget = null;
let games = [
    {
        name: 'Crash Bandicoot N.Sane Trilogy',
        price: 1060,
        sold: 20,
        console: 'PS4',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` },
    },
    {
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBOX',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Gta V',
        price: 1250,
        sold: 60,
        console: 'XBOX',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Fifa 2017',
        price: 890,
        sold: 15,
        console: 'PS4',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: ' Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'PS4',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Fifa 17',
        price: 1290,
        sold: 12,
        console: 'PS4',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    },
    {
        name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX',
        showDetail: function () { return ` name: ${this.name}\n price:${this.price}\n sold:${this.sold}\n console:${this.console} \n` }
    }
];
let ps4Games = games.filter(function (game) {
    if (game.console === gameConsole) {
        budget += game.price
    }
});
let gameNames = ['Crash Bandicoot N. Sane Trilogy', 'Gta V', 'Mortal Kombat Xl', 'Fifa 2017', 'Uncharted 4', 'Need For Speed', 'Lego Batman', 'Fifa 2017', 'Resident Evil 7'];
let gamePrices = [1060, 1449, 1190, 890, 950, 790, 1000, 1290, 1390,];
console.log('Game Names:', gameNames);
console.log('Game Prices:', gamePrices);
console.log(`I need ${budget} CAD to get all these PS4 great games`);