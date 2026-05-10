import { useEffect, useState } from 'react'
import { animatedRoles } from '../data/siteData'

function AnimatedRole() {
  const [activeRole, setActiveRole] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveRole((currentRole) => (currentRole + 1) % animatedRoles.length)
    }, 1800)

    return () => window.clearInterval(intervalId)
  }, [])

  const role = animatedRoles[activeRole]

  return (
    <span
      className="animated-role"
      key={role.label}
      style={{ '--role-color': role.color }}
    >
      {role.label}
    </span>
  )
}

export default AnimatedRole
