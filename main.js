// require('./main.css')
import 'babel-polyfill'
console.log('bbb')

if (module.hot) {
  module.hot.accept()
}
let a = 555
console.log(a)

class A {
  constructor () {
    this.aa = 'aa'
  }
  hei () {
    console.log(this.aa)
  }
}
let aa = A()
console.log(aa.hei())
Object.assign(aa, {b: 'dddd---------'})
let fun = aa.fun = () => {
  let o = Object
  let k = 'kkk'
  o.assign(aa, {b: k})
}
