var add = require('../index.js')
var expect = require('chai').expect

describe('加法函数的测试', function() {
  it('1 加 2 应该等于 3', function() {
    expect(add(1, 2)).to.be.equal(3)
  });
});

describe('加法函数的测试', function () {
  it('3 加 -3 应该等于 0', function () {
    expect(add(3, -3)).to.be.equal(0)
  })
})