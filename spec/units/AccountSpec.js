describe ('Account', function () {
  var account;

  beforeEach (function () {
    account = new Account();
  });

  it('Account should start empty', function () {
    expect(account.balance).toEqual(0.00);
  });
});
