QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});
QUnit.test( "Errors thrown for getAreaCode", function( assert ) {
    assert.throws( function() {
        getAreCode("415)444-5555");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        getAreCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown." );
});

QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415)555-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid line code test passed.");
});
QUnit.test( "Errors thrown for getLineCode", function( assert ) {
    assert.throws( function() {
        getLineCode("(415)4445555");
    }, "Missing '-'. An error should have been thrown." );

    assert.throws( function() {
        getAreCode("(415) 444-555");
    }, "Missing '5'. An error should have been thrown." );
});

 QUnit.test ("Test Valid Phone Number" , function (assert){
     var num = "(415) 555-5555";
     var result = ValidPhone(num)
     assert.deepEqual(result, true, "Valid phone number test passed")
 });

QUnit.test ("Test CO Code" , function (assert){
            var num = "(415) 555-5555"
            var result = getCoCode(num)
            assert.deepEqual(result,"555", "Valid Co Code test passed ")
            });
