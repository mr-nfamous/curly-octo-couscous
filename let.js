const repr = JSON. stringify
const str = String
const isArray = Array.isArray
function flash() {
  tk.flash([...arguments].join(''))}

function attrgetter
(name) {
  const f = new Function( "return i=>i."+name)
  return f()
}

function isIterable 
(i) {
  if ('string' == typeof i) return true
  return ((i instanceof Object) & Symbol.iterator in i)
}

function isIterator(ob) {return iternext(ob)?true:false
}

function iternext
(it) {
  var f, p=it instanceof Object
  if (p && (p = Symbol.iterator) in it && it[p] === it) 
    return it.next
}

function * ifilter
(it, fn) { 
  for (let e of it)
    if (fn(e))
      yield e
}

function*accumulate(it, fn=undefined, d=undefined) {
  if (!fn) fn = (a,b)=>(a+b)
  it = it[Symbol.iterator]()

  if (d==undefined) {
    if ((d = it.next).done)
      throw new Error("accumulate missing value")
    d = d.value
  }
  yield d
  for (let e of it)
    yield (d = f(d,e))
}

function any
(it, ...f) {
  if (f.length) 
    return any(imap(it, f.shift), ...f)
  for (let e of it)
    if (e) return true
  return false
}

function all
(it, ...f) {
  if (f.length) 
    return all(imap(it, f.shift), ...f)
  for (let e of it)
    if (!e) return false
  return true
}

function isinstance
(ob, tp) {
  if (!isArray(tp))
    return ob instanceof tp
  for (const c of tp) 
    if (!(ob instanceof c))
      return false
 return false
    
}

let rj=[
  1,
  [],
  {},
  "c",
  new Set(),
  flash,
  String,
  null,
  undefined,
  0
]
let rnc=k=>isinstance(k, [String,Array])
flash(rnc([]))


class Iter {

  [Symbol.iterator] 
  () {
  return this
  }

  constructor
  (it) {
  this.iterator = it[Symbol.iterator]
  }

}
