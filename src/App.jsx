import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Clock, Tooth, Shield,
  Star, InstagramLogo, ArrowRight, Heart, Users,
  FirstAid, CalendarBlank, Certificate, Sparkle, Smiley
} from '@phosphor-icons/react'
import './index.css'

const WHATSAPP = 'https://wa.me/5548984240845?text=Olá! Gostaria de agendar uma consulta na Lagoa Odontologia.'
const PHONE = '(48) 3232-8330'
const PHONE2 = '(48) 8424-0845'
const ADDRESS = 'R. Henrique Veras do Nascimento, 240, sala 201 — Shopping Via Lagoa, Lagoa da Conceição, Florianópolis/SC'
const HOURS = 'Seg a Sex, 8h às 19h'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>{children}</motion.div>)
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [menuOpen])
  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand"><img src="./images/logo.svg" alt="Lagoa Odontologia" /></a>
        <div className="navbar-links">
          {links.map(l => <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>)}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-cta"><WhatsappLogo size={14} weight="fill" /> Agendar</a>
        </div>
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}><WhatsappLogo size={18} weight="fill" /> Agendar Consulta</a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"><img src="./images/hero-clinic.jpg" alt="Lagoa Odontologia Integrada" /></div>
      <div className="hero-content">
        <Reveal><div className="hero-badge"><span className="hero-badge-dot" />A Clínica Mais Humana da Lagoa da Conceição</div></Reveal>
        <Reveal delay={0.1}><h1>Odontologia com<br /><em>alma e cuidado</em></h1></Reveal>
        <Reveal delay={0.2}><p className="hero-subtitle">Há mais de 20 anos cuidando de sorrisos na Lagoa da Conceição. Equipe multidisciplinar com especialistas em todas as áreas da odontologia. Mais que tirar sua dor — queremos entender você.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" /> Agendar Consulta</a>
            <a href="#especialidades" className="btn-outline">Especialidades <ArrowRight size={16} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="hero-info">
            <div className="hero-info-item"><MapPin size={16} weight="duotone" /><span>Lagoa da Conceição</span></div>
            <div className="hero-info-item"><Clock size={16} weight="duotone" /><span>8h às 19h</span></div>
            <div className="hero-info-item"><Star size={16} weight="fill" /><span>4.7 — 30+ avaliações</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="history" id="sobre">
      <div className="container">
        <div className="history-grid">
          <Reveal><div className="history-image"><img src="./images/consultorio.jpg" alt="Consultório Lagoa Odonto" /></div></Reveal>
          <div>
            <Reveal><div className="section-label">Nossa História</div><div className="history-year">2002</div><h2 className="section-title">Mais de 20 anos<br /><em>promovendo sorrisos</em></h2></Reveal>
            <Reveal delay={0.15}><p className="history-text">A Lagoa Odontologia nasceu em 2002 com a missão de oferecer odontologia humanizada e de excelência na Lagoa da Conceição. Somos mais que dentistas — somos promotores de sorrisos, atendendo com alma.</p></Reveal>
            <Reveal delay={0.25}><p className="history-text" style={{ marginTop: 16 }}>Nossa equipe multidisciplinar conta com especialistas em todas as áreas da odontologia. Localizada no Shopping Via Lagoa, oferecemos conforto, tecnologia e o atendimento mais humano da região.</p></Reveal>
            <Reveal delay={0.35}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}><CalendarBlank size={18} weight="duotone" /> Agendar Avaliação</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Specialties() {
  const items = [
    { icon: Sparkle, title: 'Estética Dental', desc: 'Clareamento, facetas em porcelana, lentes de contato dental. Sorriso dos sonhos com naturalidade.', image: './images/sorriso.jpg' },
    { icon: FirstAid, title: 'Implantodontia', desc: 'Implantes dentários de última geração. Recupere sua mastigação e autoconfiança.', image: './images/implante.jpg' },
    { icon: Shield, title: 'Ortodontia', desc: 'Aparelhos convencionais, estéticos e alinhadores invisíveis. Planejamento digital personalizado.', image: './images/hero-clinic.jpg' },
    { icon: Tooth, title: 'Endodontia', desc: 'Tratamento de canal com microscopia e instrumentação moderna. Conforto e precisão.', image: './images/consultorio.jpg' },
    { icon: Smiley, title: 'Prótese Dentária', desc: 'Próteses fixas, removíveis e sobre implante. Devolvemos função e estética ao seu sorriso.', image: './images/esterilizacao.jpg' },
    { icon: Heart, title: 'Odontopediatria', desc: 'Atendimento infantil especializado com carinho e paciência. Primeiros cuidados bucais.', image: './images/sorriso.jpg' },
  ]
  return (
    <section className="cardapio" id="especialidades">
      <div className="container">
        <Reveal><div className="section-label">Especialidades</div><h2 className="section-title">Todas as áreas em<br />um só <em>lugar</em></h2></Reveal>
        <div className="cardapio-grid">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cardapio-card">
                <div className="cardapio-card-image"><img src={p.image} alt={p.title} /></div>
                <div className="cardapio-card-content">
                  <div className="cardapio-card-category"><p.icon size={14} weight="duotone" /> Odontologia</div>
                  <h3 className="cardapio-card-title">{p.title}</h3>
                  <p className="cardapio-card-desc">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Differentials() {
  const features = [
    { icon: Heart, title: 'Atendimento Humanizado', desc: 'Mais que tratar dentes, cuidamos de pessoas. Entendemos você na sua essência e integralidade.' },
    { icon: Users, title: 'Equipe Multidisciplinar', desc: 'Especialistas em todas as áreas da odontologia reunidos em um só lugar.' },
    { icon: Shield, title: 'Tecnologia Avançada', desc: 'Equipamentos de última geração para diagnósticos precisos e tratamentos confortáveis.' },
    { icon: MapPin, title: 'Localização Privilegiada', desc: 'No Shopping Via Lagoa, no coração da Lagoa da Conceição. Fácil acesso e estacionamento.' },
  ]
  return (
    <section className="experience" id="diferenciais">
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Diferenciais</div><h2 className="section-title">Odontologia que<br />cuida com <em>alma</em></h2></Reveal>
            <div className="experience-features">
              {features.map((f, i) => (<Reveal key={f.title} delay={i * 0.1}><div className="experience-feature"><div className="experience-feature-icon"><f.icon size={22} weight="duotone" /></div><div><h4>{f.title}</h4><p>{f.desc}</p></div></div></Reveal>))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/sorriso.jpg" alt="Sorriso saudável" />
              <div className="experience-image-badge"><span className="number">20+</span><span className="label">Anos na Lagoa</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    { src: './images/hero-clinic.jpg', alt: 'Clínica' },
    { src: './images/consultorio.jpg', alt: 'Consultório' },
    { src: './images/sorriso.jpg', alt: 'Sorriso' },
    { src: './images/implante.jpg', alt: 'Implante' },
    { src: './images/esterilizacao.jpg', alt: 'Equipamentos' },
  ]
  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <Reveal><div className="section-label">Galeria</div><h2 className="section-title">Conheça nosso <em>espaço</em></h2></Reveal>
        <div className="gallery-grid">{images.map((img, i) => (<Reveal key={i} delay={i * 0.08}><div className="gallery-item"><img src={img.src} alt={img.alt} /></div></Reveal>))}</div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    { text: 'Melhor clínica odontológica da região da Lagoa. Atendimento super humanizado, os profissionais realmente se importam. Me senti acolhida desde a recepção.', author: 'Camila R.', rating: 5 },
    { text: 'Excelentes profissionais! Fiz implante e estética dental. O resultado ficou incrível e natural. A equipe é atenciosa e explica tudo com clareza. Recomendo demais.', author: 'Paulo H.', rating: 5 },
    { text: 'Levo toda a família para a Lagoa Odonto há anos. Desde as crianças até os avós. Confiança total na equipe. Localização perfeita no Shopping Via Lagoa.', author: 'Beatriz L.', rating: 5 },
  ]
  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <div className="reviews-header">
          <div><Reveal><div className="section-label">Avaliações Google</div><h2 className="section-title">O que dizem nossos <em>pacientes</em></h2></Reveal></div>
          <Reveal delay={0.1}>
            <div className="reviews-score">
              <div className="reviews-score-number">4.7</div>
              <div className="reviews-score-meta">
                <div className="reviews-stars">{[...Array(5)].map((_, i) => <Star key={i} size={18} weight={i < 5 ? 'fill' : 'duotone'} />)}</div>
                <div className="reviews-count">30+ avaliações no Google</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (<Reveal key={i} delay={i * 0.12}><div className="review-card"><div className="review-card-quote">&ldquo;</div><div className="review-card-stars">{[...Array(r.rating)].map((_, j) => <Star key={j} size={14} weight="fill" />)}</div><p className="review-card-text">{r.text}</p><div className="review-card-author">{r.author}</div></div></Reveal>))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <h2>Seu sorriso merece<br /><em>cuidado especial</em></h2>
          <p>Agende sua consulta na clínica odontológica mais humana da Lagoa da Conceição.</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" /> WhatsApp</a>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" /> {PHONE}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: MapPin, title: 'Endereço', text: ADDRESS },
    { icon: Clock, title: 'Horário', text: HOURS },
    { icon: Phone, title: 'Telefone', text: `${PHONE} | ${PHONE2}` },
    { icon: Users, title: 'WhatsApp', text: PHONE2 },
  ]
  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal><div className="section-label">Localização</div><h2 className="section-title">Agende sua <em>consulta</em></h2></Reveal>
        <div className="contact-grid">
          <div className="contact-info">
            {items.map((item, i) => (<Reveal key={item.title} delay={i * 0.1}><div className="contact-item"><div className="contact-item-icon"><item.icon size={20} weight="duotone" /></div><div><h4>{item.title}</h4><p>{item.text}</p></div></div></Reveal>))}
            <Reveal delay={0.4}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16 }}><WhatsappLogo size={18} weight="fill" /> Agendar pelo WhatsApp</a></Reveal>
          </div>
          <Reveal delay={0.2}><div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.5!2d-48.4665!3d-27.5963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQ2LjciUyA0OMKwMjcnNTkuNCJX!5e0!3m2!1spt-BR!2sbr!4v1" title="Localização Lagoa Odontologia" loading="lazy" /></div></Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div><div className="footer-brand-text">Lagoa Odontologia</div><p className="footer-brand-desc">A clínica odontológica mais humana da Lagoa da Conceição. 20+ anos, todas as especialidades. Shopping Via Lagoa, Florianópolis.</p></div>
          <div><div className="footer-title">Navegação</div><ul className="footer-links"><li><a href="#sobre">Sobre</a></li><li><a href="#especialidades">Especialidades</a></li><li><a href="#diferenciais">Diferenciais</a></li><li><a href="#avaliacoes">Avaliações</a></li><li><a href="#contato">Contato</a></li></ul></div>
          <div><div className="footer-title">Contato</div><ul className="footer-links"><li><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li><li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp: {PHONE2}</a></li><li><a>{ADDRESS}</a></li></ul></div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Lagoa Odontologia Integrada — Todos os direitos reservados</span>
          <div className="footer-social"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={20} weight="regular" /></a></div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() { return <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float"><WhatsappLogo size={28} weight="fill" /></a> }

export default function App() {
  return (<><Navbar /><main><Hero /><About /><Specialties /><Differentials /><Gallery /><Reviews /><CtaSection /><Contact /></main><Footer /><WhatsAppFloat /></>)
}
