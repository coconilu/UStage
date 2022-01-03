import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

function render() {
	const app = document.getElementById('app')
	ReactDOM.render(<App />, app)
}

render()
