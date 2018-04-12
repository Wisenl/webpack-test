// require('./main.css')
import 'babel-polyfill'
console.log('bbb')

let a = 55555
console.log(a)

class A {
  constructor () {
    this.aa = 'aaaaaaa'
  }
  hei () {
    console.log(this.aa)
  }
}
let aa = new A()
console.log(aa.hei())
Object.assign(aa, {b: 'dddd-------------'})
let fun = aa.fun = () => {
  let o = Object
  let k = 'kk'
  o.assign(aa, {b: k})
  console.log(aa)
}
fun()
console.log('change')
if (module.hot) {
  module.hot.accept()
}
