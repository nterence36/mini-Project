class Battle {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    attack(attacker, defender) {
      // Calculate the damage
      const damage = Math.floor(Math.random() * attacker.firepower);
        
      // Apply the damage to the defender's health
      defender.hull -= damage;
  
      // Log the attack
      console.log(`${attacker.name} attacked ${defender.name} for ${damage} damage.`);
  
      // Check if the defender is still alive
      if (defender.hull <= 0 ) {
        console.log(`${defender.name} has been defeated!`);
      }
    }
  
    start() {
      // Loop until one of the players is defeated
      while (this.player1.hull > 0 && this.player2.hull > 0) {
        // Player 1 attacks Player 2
        this.attack(this.player1, this.player2);
  
        // Check if Player 2 is still alive
        if (this.player2.hull > 0) {
          // Player 2 attacks Player 1
          this.attack(this.player2, this.player1);
        }
      }
  
      // Log the winner
      if (this.player1.hull > 0) {
        console.log(`${this.player1.name} wins!`);
      } else {
        console.log(`${this.player2.name} wins!`);
      }
    }
  }
  
  class USAssemblyShip {
    constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = accuracy;
    }
  }
  class alienShip {
    constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
      this.firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
      this.accuracy = accuracy;
    }
  }
  const player1 = new USAssemblyShip('Player 1');
  const player2 = new alienShip('Player 2');
  const battle = new Battle(player1, player2);
  battle.start();