// require('./main.css')
import 'babel-polyfill'
import react from 'react'
console.log(react)
console.log('aaa')
console.log('ccc')

let a = 55555
console.log(a)

class A {
  constructor () {
    this.aa = 'a  a'
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
