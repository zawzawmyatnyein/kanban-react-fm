import Board from './components/Board'
import Logo from './components/Logo'
import Sidebar from './components/Sidebar'

function AuthenticatedApp() {
  return (
    <div className="min-h-screen max-h-screen w-full flex bg-white dark:bg-dark-gray divide-x divide-light-gray-line dark:divide-dark-gray-line">
      <div className="w-80 min-h-screen divide-y divide-light-gray-line dark:divide-dark-gray-line flex flex-col">
        <div className="pl-8 h-24 flex items-center">
          <Logo />
        </div>
        <Sidebar />
      </div>
      <Board />
    </div>
  )
}

export default AuthenticatedApp
