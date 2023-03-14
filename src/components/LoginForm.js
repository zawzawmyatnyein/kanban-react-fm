function LoginForm() {
  return (
    <form className="w-1/4 bg-white dark:bg-dark-gray p-6 rounded-md dark:ring-1 dark:ring-dark-gray-line shadow-md dark:shadow-lg dark:shadow-card-shadow flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="email"
          className="text-gray-900 dark:text-white text-sm font-medium"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="rounded-md dark:bg-dark-gray border-medium-gray focus:outline-none focus:ring-dark-blue focus:border-dark-blue"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="password"
          className="text-gray-900 dark:text-white text-sm font-medium"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="rounded-md dark:bg-dark-gray border-medium-gray focus:outline-none focus:ring-dark-blue focus:border-dark-blue"
        />
      </div>
      <div className="flex items-center space-x-3">
        <input
          id="remember"
          type="checkbox"
          name="remember"
          className="rounded dark:bg-transparent dark:checked:bg-dark-blue text-dark-blue border-medium-gray focus:ring-dark-blue dark:ring-offset-dark-gray"
        />
        <label
          htmlFor="remember"
          className="text-gray-900 dark:text-white text-sm font-medium"
        >
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-3 rounded-md text-sm text-white bg-dark-blue outline-none focus:ring-2 focus:ring-offset-1 focus:ring-dark-blue"
      >
        Sign in
      </button>
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
