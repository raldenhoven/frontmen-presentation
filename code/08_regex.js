const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;

const MATCHED_DATE = RE_DATE.exec('2018-06-21');

console.log(MATCHED_DATE.groups.year);  // 2018
console.log(MATCHED_DATE.groups.month); // 06
console.log(MATCHED_DATE.groups.day);   // 21

// Source: https://github.com/tc39/proposal-regexp-named-groups