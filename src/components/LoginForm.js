import InputGroup from './InputGroup'
import InputLabel from './InputLabel'
import InputText from './InputText'
import InputCheckbox from './InputCheckbox'
import Button from './Button'

function LoginForm() {
  return (
    <form className="w-1/4 bg-white dark:bg-dark-gray p-6 rounded-md dark:ring-1 dark:ring-dark-gray-line shadow-md dark:shadow-lg dark:shadow-card-shadow flex flex-col space-y-6">
      <InputGroup>
        <InputLabel labelName="Email address" htmlFor="email" />
        <InputText type="email" id="email" name="email" />
      </InputGroup>
      <InputGroup>
        <InputLabel labelName="Password" htmlFor="password" />
        <InputText type="password" id="password" name="password" />
      </InputGroup>
      <InputGroup inline={true}>
        <InputCheckbox id="remember" name="remember" />
        <InputLabel labelName="Remember me" htmlFor="remember" />
      </InputGroup>
      <Button type="submit" size="sm">
        Sign in
      </Button>
      <p className="text-sm dark:text-white text-center">
        Don't have an account?{' '}
        <a
          href="/"
          className="ml-1 text-dark-blue dark:text-light-blue font-medium hover:underline"
        >
          Register
        </a>
      </p>
    </form>
  )
}

export default LoginForm
