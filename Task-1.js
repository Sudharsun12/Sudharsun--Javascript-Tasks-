// ================= VAR =================

// 1
var a = 10;
a = 20;
var a = 30;
console.log(a);
// Output: 30
// Reason: var allows redeclaration and reassignment → last value is printed

// 2
var a = 5;
var a = 15;
console.log(a);
// Output: 15
// Reason: redeclaration overwrites previous value

// 3
var a = 1;
a = 2;
a = 3;
console.log(a);
// Output: 3
// Reason: reassignment updates value → last value used

// 4
var a = 7;
a = 14;
var a = 21;
a = 28;
console.log(a);
// Output: 28
// Reason: var allows both redeclaration & reassignment

// 5
var a = 100;
var a = 200;
a = 300;
console.log(a);
// Output: 300
// Reason: final reassigned value is printed

// 6
var a = 9;
console.log(a);
// Output: 9
// Reason: no change in value

// 7
var a = 11;
a = 22;
console.log(a);
// Output: 22
// Reason: reassignment updates value

// 8
var a = 50;
var a = 60;
var a = 70;
console.log(a);
// Output: 70
// Reason: last redeclaration wins

// 9
var a = 2;
a = 4;
a = 6;
var a = 8;
console.log(a);
// Output: 8
// Reason: final redeclared value

// 10
var a = 99;
a = 88;
console.log(a);
// Output: 88
// Reason: reassigned value is printed

// 11
let b = 10;
b = 20;
console.log(b);
// Output: 20
// Reason: let allows reassignment

// 12
let b = 5;
b = 15;
b = 25;
console.log(b);
// Output: 25
// Reason: last reassigned value

// 13
let b = 1;
console.log(b);
// Output: 1
// Reason: no reassignment

// 14
let b = 7;
b = 14;
console.log(b);
// Output: 14
// Reason: reassignment allowed

// 15
let b = 100;
b = 200;
b = 300;
console.log(b);
// Output: 300
// Reason: final updated value

// 16
let b = 9;
let b = 18;
console.log(b);
// Output: Error
// Reason: let cannot be redeclared in same scope

// 17
let b = 50;
b = 60;
let b = 70;
console.log(b);
// Output: Error
// Reason: redeclaration not allowed

// 18
let b = 2;
b = 4;
console.log(b);
// Output: 4
// Reason: reassignment works

// 19
let b = 99;
b = 88;
b = 77;
console.log(b);
// Output: 77
// Reason: last reassigned value

// 20
let b = 11;
b = 22;
console.log(b);
// Output: 22
// Reason: reassignment


// 21
const c = 10;
console.log(c);
// Output: 10
// Reason: constant value remains unchanged

// 22
const c = 5;
c = 15;
console.log(c);
// Output: Error
// Reason: cannot reassign const

// 23
const c = 1;
const c = 2;
console.log(c);
// Output: Error
// Reason: cannot redeclare const

// 24
const c = 7;
console.log(c);
// Output: 7
// Reason: valid constant

// 25
const c = 100;
console.log(c);
// Output: 100
// Reason: value stays fixed

// 26
const c = 50;
c = 60;
console.log(c);
// Output: Error
// Reason: reassignment not allowed

// 27
const c = 9;
console.log(c);
// Output: 9
// Reason: constant

// 28
const c = 20;
const c = 30;
console.log(c);
// Output: Error
// Reason: redeclaration not allowed

// 29
const c = 99;
console.log(c);
// Output: 99
// Reason: constant value

// 30
const c = 11;
c = 22;
console.log(c);
// Output: Error
// Reason: cannot reassign const

// 31
var a = 1;
var a = 2;
var a = 3;
console.log(a);
// Output: 3
// Reason: last redeclaration wins

// 32
var a = 10;
a = 20;
a = 30;
var a = 40;
console.log(a);
// Output: 40
// Reason: final redeclared value

// 33
var a = 5;
a = 15;
console.log(a);
// Output: 15
// Reason: reassignment

// 34
var a = 100;
var a = 200;
var a = 300;
a = 400;
console.log(a);
// Output: 400
// Reason: last assigned value

// 35
var a = 7;
console.log(a);
// Output: 7
// Reason: no change

// 36
let b = 3;
b = 6;
b = 9;
console.log(b);
// Output: 9
// Reason: reassignment allowed

// 37
let b = 12;
let b = 24;
console.log(b);
// Output: Error
// Reason: redeclaration not allowed

// 38
let b = 8;
b = 16;
console.log(b);
// Output: 16
// Reason: reassignment

// 39
const c = 2;
console.log(c);
// Output: 2
// Reason: constant value

// 40
const c = 4;
c = 8;
Console.log(c);
// Output: Error
// Reason: const reassignment not allowed + 'Console' is incorrect (should be lowercase)