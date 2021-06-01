import { render } from 'solid-js/web'
import { App } from '@src/App'

import './index.css'

const mountElement = document.getElementById('app')

if (mountElement) {
  render(() => <App />, mountElement)
} else {
  console.error(`'mountElement' not found`)
}
