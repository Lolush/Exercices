var wallet = 10;
var bank = 4;

function withdraw(amountOfMoney) {
  if (bank - amountOfMoney >= 0) {
    wallet = wallet + amountOfMoney;
    bank = bank - amountOfMoney;
    console.log(bank, wallet);
  } else {
      console.log('bank empty');
  } 
}

withdraw(4);

function deposit(amountOfMoney) {
  if (wallet - amountOfMoney >= 0) {
    bank = bank + amountOfMoney;
    wallet = wallet - amountOfMoney;
    console.log(bank, wallet);
  } else {
      console.log('wallet empty');
  }
}

deposit(6);
