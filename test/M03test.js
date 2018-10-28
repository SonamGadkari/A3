// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (M03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output



QUnit.test('Testing Income tax calculation function with four sets of inputs', function (assert) {
    //Test Scenario 1 : With a valid data and filing type as Single
    assert.strictEqual(IncomeTax(4000,"Arizona",200,"Single"),'Total Tax on your income of $ 4000 is $ 400','Successful with a result of '+'"'+IncomeTax(4000,"Arizona",200,"Single")+'"');
    //Test Scenario 2 : With a valid data and filing type as Married
    assert.strictEqual(IncomeTax(6000000,"Nebraska",200,"Married"),'Total Tax on your income of $ 6000000 is $ 2041689.5','Successful with a result of '+'"'+IncomeTax(6000000,"Nebraska",200,"Married")+'"');
    //Test Scenario 3:  With an input as spaces
    assert.throws(function () { IncomeTax(" ","Texas",200,"Married"); },new Error('The given argument is not a valid data'), 'Successfuly raises an Error');
    //Test Scenario 4:  With an input amount as character data "ABC"
    assert.throws(function () { IncomeTax("ABC","Kansas",200,"None"); },new Error('The given argument is not a valid data'),'Successful with an outcome of invalid value.');
    //Test Scenario 5: With negative numbers in the amount fields
    assert.throws(function () {IncomeTax("-1","Texas",200,"Married"); },new Error('The given argument is not a valid data'),'Successful with an outcome of invalid value.');    
});








