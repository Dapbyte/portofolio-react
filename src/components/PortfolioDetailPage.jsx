import { Link, useParams } from 'react-router-dom'
import { portfolioItems } from '../data/siteData'
import IconBadge from './IconBadge'
import ModelComparisonTabs from './ModelComparisonTabs'
import Navbar from './Navbar'

function PortfolioDetailPage() {
  const { slug } = useParams()
  const item = portfolioItems.find((portfolio) => portfolio.slug === slug)

  if (!item) {
    return (
      <>
        <Navbar />
        <main className="detail-shell">
          <section className="detail-card">
            <p className="section-tag">404</p>
            <h1>Portofolio tidak ditemukan.</h1>
            <Link className="neo-button" to="/#portfolio">
              Kembali ke portofolio
            </Link>
          </section>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="detail-shell">
        <section className="detail-card">
          <p className="section-tag">{item.category}</p>
          <h1>{item.title}</h1>
          <p className="detail-description">{item.description}</p>

          {item.highlights && (
            <div className="detail-highlights">
              {item.highlights.map((highlight) => (
                <div className="highlight-tile" key={highlight.label}>
                  <span>{highlight.label}</span>
                  <strong>{highlight.value}</strong>
                </div>
              ))}
            </div>
          )}

          <div className="detail-section">
            <h2>Tech Stack</h2>
            <div className="skill-list">
              {item.stack.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h2>Flow Pengerjaan</h2>
            <ol className="flow-card-list">
              {item.flow.map((step, index) => (
                <li key={typeof step === 'string' ? step : step.title}>
                  <div className="flow-node">
                    <IconBadge name="spark" color={index % 2 ? 'var(--blue)' : 'var(--yellow)'} />
                  </div>
                  <article className="flow-card">
                    <span>Step {String(index + 1).padStart(2, '0')}</span>
                    <h3>{typeof step === 'string' ? step : step.title}</h3>
                    {typeof step !== 'string' && (
                      <ul>
                        {step.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {item.modelComparison && (
            <div className="detail-section">
              <h2>Model Comparison</h2>
              <ModelComparisonTabs comparison={item.modelComparison} />
            </div>
          )}

          <Link className="neo-button" to="/#portfolio">
            Kembali ke portofolio
          </Link>
        </section>
      </main>
    </>
  )
}

export default PortfolioDetailPage
