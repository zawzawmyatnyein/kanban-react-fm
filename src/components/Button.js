const variantClMap = {
  primary: 'text-white bg-dark-blue hover:bg-light-blue',
  secondary: 'text-dark-blue bg-dark-blue-opacity hover:opacity-70',
  danger: 'text-white bg-red hover:opacity-70',
}

const sizeClMap = {
  sm: 'text-sm px-4 py-2',
  base: 'text-base px-6 py-3',
}

function Button({ name, size = 'base', variant = 'primary', children }) {
  return (
    <button
      className={`inline-flex w-full items-center gap-x-2 font-medium rounded-3xl ${variantClMap[variant]} ${sizeClMap[size]}`}
    >
      {children}
      {name}
    </button>
  )
}

export default Button
