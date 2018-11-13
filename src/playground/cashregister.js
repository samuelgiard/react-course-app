var nameValue = [
  {name: 'ONE HUNDRED', value: 100},
  {name: 'TWENTY', value: 20},
  {name: 'TEN', value: 10},
  {name: 'FIVE', value: 5},
  {name: 'ONE', value: 0.50},
  {name: 'QUARTERD', value: 0.25},
  {name: 'DIME', value: 0.10},
  {name: 'NICKEL', value: 0.05},
  {name: 'PENNY', value: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var overdue = cash - price;
  var change = {};
  var totalCid = cid.reduce(function(acc, next) {
    return acc + next[1];
  }, 0);

  if (totalCid < change) {
    return {status: 'INSUFFICIENT_FUNDS',change:[]};
  }else if (totalCid === change) {
    return {status: 'CLOSED',change:cid};
  }

  cid = cid.reverse();

  var result = nameValue.reduce(function(acc, next, index) {
    if (change >= next.value) {
      var currentValue = 0;
      while (change >= next.value && cid[index][1] >= next.value) {
        change -= next.value;
        change = Math.round(change * 100) / 100;
        cid[index][1] -= next.value;
      }
      acc.push([next.name, currentValue]);
      return acc;
    } else {
      return acc;
    }
  }, []);

  // Here is your change, ma'am.
  return result.length > 0 && change === 0 ? result : 'insufficient funds';
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

var test = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(test);