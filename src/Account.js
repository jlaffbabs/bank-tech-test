class Account {
  constructor () {
    this.balance = 0.00;
  };

  deposit (num) {
    this.balance += num;
  };

  withdraw (num) {
    this.balance -= num;
  };
};
