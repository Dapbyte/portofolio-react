function IconBadge({ name, color }) {
  return (
    <span className="icon-badge" style={{ '--badge-color': color }}>
      <IconShape name={name} />
    </span>
  )
}

function IconShape({ name }) {
  if (name === 'graduation') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 9 12 4l9 5-9 5-9-5Z" />
        <path d="M7 12v4c2.5 2 7.5 2 10 0v-4" />
        <path d="M21 9v6" />
      </svg>
    )
  }

  if (name === 'building') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 21V5l9-2v18" />
        <path d="M14 9h5v12" />
        <path d="M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1" />
      </svg>
    )
  }

  if (name === 'window') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 7h.01M10 7h.01" />
      </svg>
    )
  }

  if (name === 'bot') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="8" width="14" height="11" rx="3" />
        <path d="M12 8V4M9 4h6M8.5 13h.01M15.5 13h.01M9 17h6" />
        <path d="M5 14H3M21 14h-2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
      <path d="m19 15 .8 2.7L22 18.5l-2.2.8L19 22l-.8-2.7-2.2-.8 2.2-.8L19 15Z" />
    </svg>
  )
}

export default IconBadge
