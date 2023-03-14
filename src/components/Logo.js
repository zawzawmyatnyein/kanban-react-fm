function Logo({ mobile = false }) {
  const theme = 'light'

  if (mobile) {
    return <img src="/logo-mobile.svg" alt="kanban logo" />
  }

  return (
    <img
      src={theme === 'light' ? '/logo-dark.svg' : '/logo-light.svg'}
      alt="kanban logo"
    />
  )
}

export default Logo
