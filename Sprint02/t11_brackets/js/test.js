mocha.setup('bdd');
describe("checkBrackets", function (){
  describe("Incorrect cases", function (){
    it("Undefined test",function() {
        chai.assert.equal(checkBrackets(undefined), -1)
    })
    it("NaN test",function() {
      chai.assert.equal(checkBrackets(NaN), -1)
    })
    it("Number test",function() {
      chai.assert.equal(checkBrackets(125), -1)
    })
    it("Null test",function() {
      chai.assert.equal(checkBrackets(null), -1)
    })
    it("Array test",function() {
      chai.assert.equal(checkBrackets(["(()(", "sf()()()"]), -1)
    })
    it("Without brackets test",function() {
        chai.assert.equal(checkBrackets("sfdfdgkk"), -1)
    })
    it("Empty string test",function() {
      chai.assert.equal(checkBrackets(""), -1)
    })
  })
  describe("Correct cases", function (){
    it("Working test 1",function() {
      chai.assert.equal(checkBrackets(")))))Fff()((()()()"), 7)
    })
    it("Working test 2",function() {
      chai.assert.equal(checkBrackets("djkcn))))fgjlkgn((((gnC(((fjdf"), 11)
    })
    it("Working test 3",function() {
      chai.assert.equal(checkBrackets("(())(())(())())())(vnkncn xskcndvnnvkdxckncndxckxmdcxkdxc(((((((((((((((("), 19)
    })
    it("Working test 4",function() {
      chai.assert.equal(checkBrackets("(())((sfsdf))())(vnkncn dxc(((()ff)F)F)(((((((((((("), 14)
    })
    it("Working test 5",function() {
      chai.assert.equal(checkBrackets("()"), 0)
    })
    it("Working test 6",function() {
      chai.assert.equal(checkBrackets(")("), 2)
    })
    it("Working test 7",function() {
      chai.assert.equal(checkBrackets("(()())("), 1)
    })
    it("Working test 8",function() {
      chai.assert.equal(checkBrackets("1)()(())2(()"), 2)
    })
    it("Working test 9",function() {
      chai.assert.equal(checkBrackets("("), 1)
    })
    it("Working test 10",function() {
      chai.assert.equal(checkBrackets(")"), 1)
    })
  })
});
mocha.run();