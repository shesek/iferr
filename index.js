// Generated by CoffeeScript 1.7.1
(function() {
  var exports, iferr, throwerr, throwr, tiferr,
    __slice = [].slice;

  iferr = function(fail, succ) {
    return function() {
      var a, err;
      err = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (err != null) {
        return fail(err);
      } else {
        return succ.apply(null, a);
      }
    };
  };

  tiferr = function(fail, succ) {
    return iferr(fail, function() {
      var a, err;
      a = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      try {
        return succ.apply(null, a);
      } catch (_error) {
        err = _error;
        return fail(err);
      }
    });
  };

  throwr = function(err) {
    throw err;
  };

  throwerr = function(succ) {
    return iferr(throwr, succ);
  };

  module.exports = exports = iferr;

  exports.iferr = iferr;

  exports.tiferr = tiferr;

  exports.throwerr = throwerr;

}).call(this);
