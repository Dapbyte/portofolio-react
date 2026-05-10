import { aboutFacts, languages } from '../data/siteData'
import IconBadge from './IconBadge'
import LanguageLogo from './LanguageLogo'

function AboutSection() {
  return (
    <section className="section-block about-board" id="about">
      <div className="section-heading about-title">
        <p className="section-tag tag-green">About</p>
        <h2>Think. Build. Test. Repeat.</h2>
      </div>

      <div className="about-layout">
        <article className="about-note">
          <span className="pin" aria-hidden="true" />
          <div className="about-note-heading">
            <IconBadge name="spark" color="var(--yellow)" />
            <h3>Profile Snapshot</h3>
          </div>
          <p>
            Saya <mark>M Daffa Arrafi</mark>, mahasiswa{' '}
            <mark>Informatics</mark> yang tertarik di bidang software, AI,
            dan integrasi dengan perangkat fisik. Saya suka belajar hal baru,
            cepat beradaptasi, dan senang mencoba berbagai pendekatan saat
            membangun sebuah project. Fokus saya lebih ke membuat solusi yang
            jelas, fungsional, dan masih bisa terus dikembangkan.
          </p>
        </article>

        <div className="fact-grid">
          {aboutFacts.map((fact) => (
            <div className="fact-tile" key={fact.label}>
              <IconBadge name={fact.icon} color={fact.color} />
              <div>
                <span>
                  {fact.label}
                </span>
                <strong>{fact.value}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="skill-panel">
          <div className="panel-heading">
            <IconBadge name="spark" color="var(--orange)" />
            <h3>Bahasa Pemrograman</h3>
          </div>
          <div className="skill-list">
            {languages.map((language) => (
              <span className="language-chip mt-4" key={language}>
                <LanguageLogo name={language} />
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
