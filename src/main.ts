import './style.css'
import typescriptLogo from './typescript.svg'
import './data-structures/stack'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Explore algorithms and data structures with TS</h1>
 
  </div>
`

document.querySelector<HTMLButtonElement>('#counter')
