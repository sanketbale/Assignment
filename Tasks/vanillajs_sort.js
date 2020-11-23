// Sort the payeeList object data to satisfy following conditions:
// - Primary account should be the first item in the list
// - followed by Pay anyone accounts
// - followed by Linked accounts
// - followed by BPAY accounts
// Within each group elements should be sort by name descending
// Please write 2 versions:
// 1. Using vanilla JavaScript only.
// 2. A simplified version using any utility library (Lodash / UnderScore / jQuery).

let data = [
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

data = data.sort(GetSortOrder("name"))

primary = []
payanyone = []
linked = []
bpay = []

for (i = 0; i < data.length; i++) {

    if (data[i].primary.isPrimary) {
        primary.push(data[i])
        continue;
    }
    if (data[i].payeeType == 'PAY_ANYONE') {
        payanyone.push(data[i])
        continue;
    }
    if (data[i].payeeType == 'LINKED') {
        linked.push(data[i])
        continue;
    }
    if (data[i].payeeType == 'BPAY') {
        bpay.push(data[i])
        continue;
    }
}

function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return -1;
        } else if (a[prop] < b[prop]) {
            return 1;
        }
        return 0;
    }
}
orderedData = primary.concat(payanyone, linked, bpay);
console.log(orderedData)