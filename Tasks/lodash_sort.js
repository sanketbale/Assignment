// Sort the payeeList object array to satisfy following conditions:
// - Primary account should be the first item in the list
// - followed by Pay anyone accounts
// - followed by Linked accounts
// - followed by BPAY accounts
// Within each group elements should be sort by name descending
// Please write 2 versions:
// 1. Using vanilla JavaScript only.
// 2. A simplified version using any utility library (Lodash / UnderScore / jQuery).

const _ = require("lodash")

var data = [
    {
      name: 'Mary',
      payeeType: 'PAY_ANYONE',
      primary: { isPrimary: false },
    },
    {
      name: 'Zachary',
      payeeType: 'BPAY',
      primary: { isPrimary: false },
    },
    {
      name: 'Andy',
      payeeType: 'BPAY',
      primary: { isPrimary: false },
    },
    {
      name: 'Sam',
      payeeType: 'LINKED',
      primary: { isPrimary: false },
    },
    {
      name: 'John',
      payeeType: 'BPAY',
      primary: { isPrimary: false },
    },
    {
      name: 'Alex',
      payeeType: 'PAY_ANYONE',
      primary: { isPrimary: false },
    },
    {
      name: 'Zac',
      payeeType: 'LINKED',
      primary: { isPrimary: true },
    },
    {
      name: 'Angela',
      payeeType: 'LINKED',
      primary: { isPrimary: false },
    },
    {
      name: 'Ben',
      payeeType: 'PAY_ANYONE',
      primary: { isPrimary: false },
    },
];
  
//Using lodash
 var orderedData = _.orderBy(data, 
            ['primary.isPrimary',
            function(o) { if(o.payeeType == "PAY_ANYONE") return 1 ; if(o.payeeType == "LINKED") return 2; if(o.payeeType == "BPAY")  return 3; },
            'name'],
            ['desc', 'asc','desc']); 
 console.log(orderedData)