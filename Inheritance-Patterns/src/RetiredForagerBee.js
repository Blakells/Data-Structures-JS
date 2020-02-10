class retiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
  }
  forage() {
    return 'too old';
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
}
//f
