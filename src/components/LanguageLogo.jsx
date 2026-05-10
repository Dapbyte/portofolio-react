function LanguageLogo({ name }) {
  if (name === 'Python') {
    return (
      <svg className="python-logo" viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 3c-5 0-6 2.1-6 4.6V11h7.2v1.8H7.5C4.8 12.8 3 15 3 18s1.8 5.2 4.5 5.2h2.8v-4c0-2.8 2.1-4.8 5-4.8h5.8c2.4 0 4.4-2 4.4-4.4V7.6C25.5 5.1 23.4 3 16 3Zm-3.3 2.7a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"
          fill="#3776ab"
        />
        <path
          d="M16 29c5 0 6-2.1 6-4.6V21h-7.2v-1.8h9.7c2.7 0 4.5-2.2 4.5-5.2s-1.8-5.2-4.5-5.2h-2.8v4c0 2.8-2.1 4.8-5 4.8h-5.8c-2.4 0-4.4 2-4.4 4.4v2.4c0 2.5 2.1 4.6 9.5 4.6Zm3.3-2.7a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z"
          fill="#ffd43b"
        />
      </svg>
    )
  }

  return (
    <svg className="cpp-logo" viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M16 3 5 9.4v13.2L16 29l11-6.4V9.4L16 3Z"
        fill="#00599c"
      />
      <path
        d="M16 9.5c-3.7 0-6.5 2.8-6.5 6.5s2.8 6.5 6.5 6.5c2.4 0 4.3-1.1 5.4-2.8l-2.7-1.6c-.6.8-1.5 1.3-2.7 1.3-2 0-3.4-1.4-3.4-3.4s1.4-3.4 3.4-3.4c1.2 0 2.1.5 2.7 1.3l2.7-1.6c-1.1-1.7-3-2.8-5.4-2.8Z"
        fill="#ffffff"
      />
      <path
        d="M23 14v4M21 16h4M27 14v4M25 16h4"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}

export default LanguageLogo
