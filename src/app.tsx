import { Home } from "./pages/index.js"
import Router from 'preact-router';
import { createHashHistory } from 'history';
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

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
