var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;
    var enemy;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 30;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/spikey clock.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        createSawBlade(400,385);
        createSawBlade(850,270);
        createSawBlade(1070,270);
        createSawBlade(1220,385);
        createSawBlade(1520,270);
        createSawBlade(2500,270);
        createSawBlade(2220,385);
        createSawBlade(2620,385);
        createSawBlade(3100,270);
        createSawBlade(3200,270);
        createSawBlade(3350,270);
        createSawBlade(3500,385);
        createSawBlade(4400,270);
        
        function createClock(x,y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/alarm clock.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -38;
            obstacleImage.y = -48;
            obstacleImage.scaleX = .15;
            obstacleImage.scaleY = .15;
        }
        //createClock(1000,385);
        //createClock(2500,385); These work but I hate them.
        //createClock(3780,385);
        //createClock(4500,385);

        function createEnemy(x, y) {
            var enemy =  game.createGameItem('enemy',25);
            enemy.x = x;
            enemy.y = groundY-50;
            game.addGameItem(enemy);
            var enemyImage = draw.bitmap('img/bad guy clock.png');
            enemy.addChild(enemyImage);
            enemyImage.x = -25;
            enemyImage.y = -25;
            enemy.velocityX = -4;
            enemyImage.scaleX=.08;
            enemyImage.scaleY=.08;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy.shrink();
                console.log('Halle got smacked lol');
            };
            enemy.onProjectileCollision = function() {
                console.log('Halle did the smacking lol');
                game.increaseScore(50);
                enemy.fadeOut();
            };
        };
        createEnemy(800, 25);
        createEnemy(900, 25);
        createEnemy(2200, 25);
        createEnemy(3800, 25);
        createEnemy(4900, 25);
        createEnemy(5200, 25);
        createEnemy(6600, 25);
        createEnemy(7800, 25);
        createEnemy(8500, 25);
        createEnemy(9900, 25);
        createEnemy(10800, 25);
        createEnemy(11500, 25);
          
        function createCoin(x,y){
            var coin =  game.createGameItem('coin',13);
            //var money = draw.bitmap("coin.png"); this code doesn't work for some freaking reason so Imma just draw a circle.
            var money = draw.circle(12,'yellow','yellow',0);
            coin.x = x;
            coin.y = groundY -150;
            money.scaleX = 1;
            money.scaleY = 1;
            coin.addChild(money);
            coin.velocityX = -2;
            money.x = 0;
            money.y = 0;
            game.addGameItem(coin);
            console.log('it was made');
            coin.onPlayerCollision = function() {
                game.increaseScore(75);
                coin.fadeOut();
                console.log('collision with coin');
                
            };
        };
        createCoin(700, 50);
        createCoin(1000, 50);
        createCoin(3000, 50);
        createCoin(5000, 50);
        createCoin(8000, 50);
    };
    
};
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}