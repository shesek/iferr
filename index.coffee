# Returns a function that delegates to `fail` on error and to `succ` on success
iferr = (fail, succ) -> (err, a...) ->
  if err? then fail err
  else succ a...

# Like iferr, but also catches errors thrown from `succ` and passes to `fail`
tiferr = (fail, succ) -> iferr fail, (a...) ->
  try succ a...
  catch err then fail err

# Throw errors
throwr = (err) -> throw err
throwerr = (succ) -> iferr throwr, succ or noop
noop = ->

module.exports = exports = iferr
exports.iferr = iferr
exports.tiferr = tiferr
exports.throwerr = throwerr
