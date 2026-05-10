import { contacts } from '../data/siteData'
import SocialIcon from './SocialIcon'

function ContactSection() {
  return (
    <section className="section-block contact-section" id="contact">
      <div className="section-heading">
        <p className="section-tag tag-orange">Contact</p>
        <h2>Get in touch</h2>
      </div>
      <div className="social-links" aria-label="Social media links">
        {contacts.map((contact) => (
          <a
            className={`social-link social-${contact.name.toLowerCase()}`}
            href={contact.href}
            key={contact.name}
            target="_blank"
            rel="noreferrer"
            aria-label={`${contact.name}: ${contact.handle}`}
            title={contact.name}
          >
            <SocialIcon name={contact.name} />
            <span>{contact.handle}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactSection
