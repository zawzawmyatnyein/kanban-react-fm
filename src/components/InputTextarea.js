function InputTextarea({ id, name, rows = 3 }) {
  return (
    <textarea
      id={id}
      name={name}
      className="block w-full rounded-md dark:bg-dark-gray border-medium-gray focus:outline-none focus:ring-dark-blue focus:border-dark-blue"
      rows={rows}
    ></textarea>
  )
}

export default InputTextarea
