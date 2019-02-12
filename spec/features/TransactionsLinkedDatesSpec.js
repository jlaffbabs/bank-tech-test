describe ('Transactions are attached to a date', function () {
  var account;

  beforeEach (function () {
    account = new Account;
  });

  it('A transaction should have a date attached for statement', function () {
    account.deposit(320.00);
    var today = new Date();
    expect(account.statement()).toContain(today.toLocaleDateString('en-GB'));
  });
});
