describe ('User Can Withdraw Money', function () {
  var account;

  beforeEach (function () {
    account = new Account;
  });

  it('A user should be able to withdraw money from his account', function () {
    account.deposit(400.00);
    account.withdraw(250.50);
    expect(account.balance).toEqual(149.50);
  });
});
