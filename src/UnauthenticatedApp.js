import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Logo from './components/Logo'

function UnauthenticatedApp() {
  return (
    <div className="min-h-screen max-h-screen w-full bg-light-gray dark:bg-very-dark-gray flex flex-col gap-y-8 items-center justify-center">
      <div className="flex gap-x-4 items-center">
        <Logo mobile={true} />
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-blue to-light-blue">
          kanban
        </span>
      </div>
      {/* <LoginForm /> */}
      <RegisterForm />
    </div>
  )
}

export default UnauthenticatedApp
