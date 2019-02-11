class Account {
  constructor () {
    this.balance = 0.00;
  };

  deposit (amount) {
    this.balance += amount;
  };

  withdraw (amount) {
    this.balance -= amount;
  };
};
