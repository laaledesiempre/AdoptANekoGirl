import { Home } from "./pages/index.js"
import Router from 'preact-router';
import { createHashHistory } from 'history';
import './app.css'

export function App() {

  return (
    <>
      <main>
        <Router history={createHashHistory()}>
          <Home path="/" />
        </Router>
      </main>
    </>
  )
}
