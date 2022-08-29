// Classes, interfaces, inheritance and access modifiers
// [x] Class and functions
// [x] Static
// [x] Private, Protected, Public
// [x] Extends
// [x] Interface
// [x] Implements

// https://dev.to/satansdeer/typescript-constructor-shorthand-3ibd

interface IUser {
  getName: () => string; // private
  age: number; // public
}

class User implements IUser {
  constructor(protected name: string, public age: number) {}

  getName() {
    return this.name;
  }
}

interface IPlayer {
  getPlayerName: () => string;
  getPlayerGame: () => string;
}

class Player extends User implements IPlayer {
  constructor(name: string, age: number, private game: string) {
    super(name, age);
  }

  public static getCurrentTime() {
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
console.log(
  `${player.getPlayerName()} is ${player.age} years old and is playing ${player.getPlayerGame()}`
);

console.log(`It's ${Player.getCurrentTime()} right now`);

export {};
