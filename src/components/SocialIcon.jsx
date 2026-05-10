function SocialIcon({ name }) {
  if (name === 'Instagram') {
    return (
      <svg className="outline-logo" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" />
      </svg>
    )
  }

  if (name === 'GitHub') {
    return (
      <svg className="solid-logo" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.7a9.3 9.3 0 0 0-2.9 18.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.8 9.8 0 0 1 5.2 0c1.9-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.8 1 .8 2v2.9c0 .3.2.6.8.5A9.3 9.3 0 0 0 12 2.7Z" />
      </svg>
    )
  }

  return (
    <svg className="solid-logo" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="8" width="4" height="13" />
      <circle cx="5" cy="4.8" r="2.2" />
      <path d="M10 8h3.8v1.8c.6-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.2V21h-4v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21h-4V8Z" />
    </svg>
  )
}

export default SocialIcon
