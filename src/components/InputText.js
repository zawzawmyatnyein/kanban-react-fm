function InputText({ type, id, name }) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      className="block w-full rounded-md dark:bg-dark-gray border-medium-gray focus:outline-none focus:ring-dark-blue focus:border-dark-blue"
    />
  )
}

export default InputText
