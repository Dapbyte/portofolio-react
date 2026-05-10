import dapaPhoto from '../assets/dapa_porto.png'
import AnimatedRole from './AnimatedRole'

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="parallax-layer hero-layer-one" aria-hidden="true" />
      <div className="parallax-layer hero-layer-two" aria-hidden="true" />
      <div className="moving-shape shape-one" aria-hidden="true" />
      <div className="moving-shape shape-two" aria-hidden="true" />

      <div className="hero-copy">
        <p className="eyebrow tag-blue">Informatics Student</p>
        <h1>
          Daffa is here
          <span>
            Enthusiast in <AnimatedRole />
          </span>
        </h1>
      </div>
      <div className="hero-image-parallax">
        <div className="name-badge" aria-label="Dapa">
          Dapa
        </div>
        <div className="hero-image-card" aria-label="Foto M Daffa Arrafi">
          <img src={dapaPhoto} alt="M Daffa Arrafi" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
