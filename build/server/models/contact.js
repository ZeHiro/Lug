// Generated by CoffeeScript 1.6.3
var Contact, DataPoint, americano, cozydb, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

americano = require('americano');

cozydb = require('cozydb');

DataPoint = (function(_super) {
  __extends(DataPoint, _super);

  function DataPoint() {
    _ref = DataPoint.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  DataPoint.schema = {
    name: String,
    value: String,
    type: String
  };

  return DataPoint;

})(cozydb.Model);

module.exports = Contact = americano.getModel('Contact', {
  fn: String,
  n: String,
  datapoints: [DataPoint]
});
