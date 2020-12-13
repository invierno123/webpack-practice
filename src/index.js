import png from './assets/1.png'
import x from './x'
const div = document.getElementById('app1')
div.innerHTML=`<img src="${png}">`

const button=document.createElement('button')
button.innerText='懒加载'
button.onclick=()=>{
const promise=import('./lazy')
  promise.then((moudule)=>{
    const fn = moudule.default
    fn()
  },()=>{})
}
div.appendChild(button)