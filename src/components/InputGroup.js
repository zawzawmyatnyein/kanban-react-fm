function InputGroup({ inline = false, children }) {
  return (
    <div
      className={`flex ${
        inline ? 'items-center space-x-3' : 'flex-col space-y-2'
      }`}
    >
      {children}
    </div>
  )
}

export default InputGroup
