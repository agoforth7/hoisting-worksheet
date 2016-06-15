// Exercise 1

var myvar = 'my value';

(function() {
	var myvar = 'local value'; // moved above
	console.log(myvar);
	// var myvar = 'local value'; <-- This variable declaration was being hoisted to the top of the function's scope while its assignment remained here, so it was resolving to undefined.
})();



// Exercise 2

// var flag = true;

function test() {
	var flag = true; // moved variable declaration/assignment expression inside the local scope. Before, the var flag = true in the if statement was getting hoisted to the top of the function scope and resolving to undefined, making it falsey.
    if (flag) {
        /* var */flag = false; // changed to assignment expression
        console.log('Switch flag from true to false');
    }
    else {
        flag = true;
        console.log('Switch flag from false to true');
    }
}
test();



// Exercise 3

var message = 'Hello world'; 

function saySomething() {
	var message = 'Foo bar'; //<-- 2. moving it up here fixes the issue.
    console.log(message);
    // var message = 'Foo bar'; <-- 1. This declaration is getting hoisted to the top of the function's scope and resolving to undefined.
}
saySomething();



// Exercise 4

var message = 'Hello world'; 

function saySomething() {
	message = 'Foo bar'; //<-- 3. moving it up here makes it work.
    console.log(message); //<-- 1. message is not declared again, so there's no hoisting; it resolves to 'Hello world'.
    // message = 'Foo bar'; <-- 2. assignment expressions don't get hoisted.
}
saySomething();



// Exercise 5

function test() {
	var a = 1; //<-- 3. moving this here fixes it.
    console.log(a); //< 1. undefined because only the declaration is being hoisted up.
    console.log(foo()); //<-- 2. returns 2 because the whole function is being hoisted.

    // var a = 1;
    function foo() {
        return 2;
    }
}

test();



// Exercise 6

(function() {
	var bar = 1; // 3. moving this to the top fixes it.
    console.log(bar); // 1. undefined, because var bar is hoisted up but its assignment expression is not.
    foo();  // 2. logs 'aloha', because function foo is hoisted to the top.

    function foo() {
        console.log('aloha');
    }

    // var bar = 1;
    baz = 2;
})();



// Exercise 7

var run = false;

function fancy(arg1, arg2) {
    if (run) {
        console.log('I can run'); // 1. logs 'I can run', because function run has been hoisted up and redefines var run, which makes it truthy.
    }
    else {
        console.log('I can\'t run');
    }

    function run2 () { // 2. changed the function's name to avoid conflict.
        console.log('Will I run?');
    }
}
fancy();



// Exercise 8

var run = false;

function fancy(arg1, arg2) {
    if (run) {
        console.log('I can run');
    }
    else {
        console.log('I can\'t run'); // 1. logs 'I can't run', because var run is hoisted up and undefined.
    }

    var run2 = function() {  // 2. changed the function's name to avoid conflict.
        console.log('Will I run?');
    }
}
fancy();


























