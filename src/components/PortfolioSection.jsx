import { Link } from 'react-router-dom'
import { portfolioItems } from '../data/siteData'
import IconBadge from './IconBadge'

function PortfolioSection() {
  return (
    <section className="section-block" id="portfolio">
      <div className="section-heading">
        <p className="section-tag tag-yellow">Portofolio</p>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <Link
            className="portfolio-card"
            key={item.slug}
            to={`/portfolio/${item.slug}`}
          >
            <div className="portfolio-card-top">
              <IconBadge name={item.icon} color="var(--green)" />
              <span>{item.category}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <strong>Lihat detail</strong>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
