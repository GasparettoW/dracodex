import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { Reset, GlobalStyle } from './styles'
import WebFont from 'webfontloader'
import { useEffect } from 'react'
import { Header } from './components/Header'

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Press Start 2P', 'Nunito'],
      },
    })
  }, [])

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  )
}

export default App
