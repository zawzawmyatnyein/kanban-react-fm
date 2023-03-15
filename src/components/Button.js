const variantClMap = {
  primary: 'text-white bg-dark-blue hover:bg-light-blue focus:ring-dark-blue',
  secondary: 'text-dark-blue bg-very-light-blue hover:opacity-70 focus:ring-light-blue',
  danger: 'text-white bg-red hover:opacity-70 focus:ring-red',
}

const sizeClMap = {
  xs: 'text-xs px-3 py-3',
  sm: 'text-sm px-4 py-3',
  base: 'text-[15px] px-6 py-3',
}

function Button({ size = 'base', variant = 'primary', rounded = false, ...props }) {
  return (
    <button
      className={`inline-flex w-full justify-center items-center gap-x-2 font-semibold tracking-wide ${
        rounded ? 'rounded-3xl' : 'rounded-md'
      } outline-none focus:ring-2 focus:ring-offset-1 ${variantClMap[variant]} ${sizeClMap[size]}`}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
