let console1 = "XBOX";
const games = [];

games[0] = {
    name: 'Crash Bandicoot N. Sane Trilogy',
    price: 1060,
    sold: 20,
    console: 'PS4',
    showDetail: function(){
    console.log(`name: ${this.name}`);
    console.log(`price: ${this.price}`);
    console.log(`sold: ${this.sold}`);
    console.log(`console: ${this.console}`);
    console.log(`"1"`);
    },
};
games[1] = {
    name: 'Lego Marvel Super Heroes',
    price: 700,
    sold: 25,
    console: 'XBOX',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"2"`);
        },
};
games[2] = {
    name: 'Gta V',
    price: 1449,
    sold: 30,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"3"`);
        },
};
games[3] = {
    name: 'Mortal Kombat Xl',
    price: 1190,
    sold: 34,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"4"`);
        },
};
games[4] = {
    name: 'Gta V',
    price: 1250,
    sold: 60,
    console: 'XBOX',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"5"`);
        },
};
games[5]= {
    name: 'Fifa 2017',
    price: 890,
    sold: 15,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"6"`);
        },
};
games[6] = {
    name: 'Uncharted 4',
    price: 950,
    sold: 30,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"7"`);
        },
};
games[7] = {
    name: 'Mortal Kombat Xl',
    price: 940,
    sold: 30,
    console: 'XBOX',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"8"`);
        },
};
games[8] = {
    name: 'Need For Speed',
    price: 790,
    sold: 10,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"9"`);
        },
};
games[9] = {
    name: 'Lego Batman',
    price: 1000,
    sold: 18,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"10"`);
        },
};
games[10] = {
    name: 'Fifa 17',
    price: 1290,
    sold: 12,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"11"`);
        },
};
games[11] = {
    name: 'Resident Evil 7',
    price: 1390,
    sold: 10,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"12"`);
        },
};
games[12] = {
    name: 'Dragon Ball XX',
    price: 1390,
    sold: 25,
    console: 'XBOX',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`console: ${this.console}`);
        console.log(`"13"`);
        },
};
const xboxGames = games.filter(function(game) {
    return (console1 === game.console);
});
for (let x = 0; x <= xboxGames.length-1; x++) {
    xboxGames[x].showDetail();
};