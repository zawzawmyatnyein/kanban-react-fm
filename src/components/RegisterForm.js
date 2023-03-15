import Button from './Button'
import InputGroup from './InputGroup'
import InputLabel from './InputLabel'
import InputText from './InputText'

function RegisterForm() {
  return (
    <form className="w-1/4 bg-white dark:bg-dark-gray p-6 rounded-md dark:ring-1 dark:ring-dark-gray-line shadow-md dark:shadow-lg dark:shadow-card-shadow flex flex-col space-y-6">
      <InputGroup>
        <InputLabel labelName="Username" htmlFor="username" />
        <InputText type="text" id="username" name="username" />
      </InputGroup>
      <InputGroup>
        <InputLabel labelName="Email address" htmlFor="email" />
        <InputText type="email" id="email" name="email" />
      </InputGroup>
      <InputGroup>
        <InputLabel labelName="Password" htmlFor="password" />
        <InputText type="password" id="password" name="password" />
      </InputGroup>
      <InputGroup>
        <InputLabel labelName="Confirm password" htmlFor="password_confirmation" />
        <InputText type="password" id="password_confirmation" name="password_confirmation" />
      </InputGroup>
      <Button type="submit" size="sm">
        Register
      </Button>
      <p className="text-sm dark:text-white text-center">
        Already have an account?{' '}
        <a
          href="/"
          className="ml-1 text-dark-blue dark:text-light-blue font-medium hover:underline"
        >
          Sign in
        </a>
      </p>
    </form>
  )
}

export default RegisterForm
