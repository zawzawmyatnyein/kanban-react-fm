import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

const user = { name: 'john' }
// const user = null

function App() {
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App
