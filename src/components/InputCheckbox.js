function InputCheckbox({ id, name }) {
  return (
    <input
      id={id}
      type="checkbox"
      name={name}
      className="rounded dark:bg-transparent dark:checked:bg-dark-blue text-dark-blue border-medium-gray focus:ring-dark-blue dark:ring-offset-dark-gray"
    />
  )
}

export default InputCheckbox
