"use strict";
// Classes, interfaces, inheritance and access modifiers
// [x] Class and functions
// [x] Static
// [x] Private, Protected, Public
// [x] Extends
// [x] Interface
// [x] Implements
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Player extends User {
    game;
    constructor(name, age, game) {
        super(name, age);
        this.game = game;
    }
    static getCurrentTime() {
        return new Date();
    }
    getPlayerName() {
        return this.name;
    }
    getPlayerGame() {
        return this.game;
    }
}
const player = new Player('Arthur', 23, 'Rocket League');
console.log(`${player.getPlayerName()} is ${player.age} years old and is playing ${player.getPlayerGame()}`);
console.log(`It's ${Player.getCurrentTime()} right now`);
