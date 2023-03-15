function InputLabel({ labelName, ...props }) {
  return (
    <label
      {...props}
      className="text-gray-900 dark:text-white text-sm font-medium"
    >
      {labelName}
    </label>
  )
}

export default InputLabel
