import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = [
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Sculpt', href: '#sculpt' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { name: 'Instagram', url: 'https://instagram.com/kaitlynedejer', icon: 'ig' },
  { name: 'TikTok', url: 'https://tiktok.com/@kaitlynedejer', icon: 'tt' },
  { name: 'Pinterest', url: 'https://pinterest.com/kaitlynedejer', icon: 'pin' },
  { name: 'YouTube', url: 'https://youtube.com/@kaitlynedejer', icon: 'yt' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/kaitlynedejer', icon: 'li' },
]

const SHOPS = [
  { name: 'ShopMy', desc: 'my curated favorites', url: 'https://shopmy.us/shop/kaitlynedejerr', color: '#F8E8E0' },
  { name: 'Amazon Storefront', desc: 'top picks & daily essentials', url: 'https://www.amazon.com/shop/kaitlynedejer', color: '#E8F0E8' },
  { name: 'Poshmark', desc: 'my pre-loved closet', url: 'https://poshmark.com/closet/kaitlynedejer', color: '#E8E4F0' },
  { name: 'LikeToKnowIt', desc: 'outfit details & links', url: 'https://www.shopltk.com/explore/kaitlynedejer', color: '#F0E8E4' },
  { name: 'KK\'s Presets', desc: 'photo editing presets', url: 'https://www.etsy.com/shop/KKsPresetsShop', color: '#E4ECF0' },
  { name: 'TikTok Shop', desc: 'trending products i luv', url: 'https://vt.tiktok.com/ZTNU9FA1S/?page=TikTokShop', color: '#F0E4EA' },
]

const GALLERY_IMAGES = [
  { src: '/img/gallery-1.jpg', alt: 'Golden Gate Bridge day', link: 'https://instagram.com/p/DXXZyKxEvpu/' },
  { src: '/img/gallery-2.jpg', alt: 'Sporty active fit', link: 'https://instagram.com/p/DXUyD1sj3Ev/' },
  { src: '/img/gallery-3.jpg', alt: 'Outfit of the day', link: 'https://instagram.com/p/DXPkqcPD-Pg/' },
  { src: '/img/gallery-4.jpg', alt: 'SF vibes', link: 'https://instagram.com/p/DXM9_qBjzAW/' },
  { src: '/img/gallery-5.jpg', alt: 'Turtleneck look', link: 'https://instagram.com/p/DXKVPu0CfBQ/' },
  { src: '/img/gallery-6.jpg', alt: 'Sisters night out', link: 'https://instagram.com/p/DXKORz8gS_B/' },
  { src: '/img/gallery-7.jpg', alt: 'Checkered outfit', link: 'https://instagram.com/p/DXH5XmjD1iC/' },
  { src: '/img/gallery-8.jpg', alt: 'College senior vibes', link: 'https://instagram.com/p/DXHz_gND_PV/' },
]

const PROFILE_PIC = '/img/gallery-3.jpg'
const ABOUT_PHOTO = '/img/gallery-1.jpg'

// Scroll reveal hook
function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

// Animated wrapper
function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, visible] = useReveal()

  const dirStyles = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
    none: '',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${dirStyles[direction]}`} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function SocialIcon({ type }) {
  switch (type) {
    case 'ig':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'tt':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
        </svg>
      )
    case 'pin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0a12 12 0 00-4.37 23.17c-.07-.94-.13-2.4.03-3.44l1.15-4.86s-.29-.58-.29-1.44c0-1.35.78-2.36 1.76-2.36.83 0 1.23.62 1.23 1.37 0 .84-.53 2.09-.81 3.25-.23.97.49 1.76 1.45 1.76 1.74 0 3.07-1.83 3.07-4.48 0-2.34-1.68-3.98-4.09-3.98-2.78 0-4.42 2.09-4.42 4.25 0 .84.32 1.74.73 2.23.08.1.09.18.07.28l-.27 1.11c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.42-2.03-3.89 0-3.16 2.3-6.07 6.63-6.07 3.48 0 6.19 2.48 6.19 5.79 0 3.46-2.18 6.24-5.21 6.24-1.02 0-1.98-.53-2.31-1.15l-.63 2.4c-.23.88-.84 1.98-1.26 2.65A12 12 0 1012 0z" />
        </svg>
      )
    case 'yt':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
        </svg>
      )
    case 'li':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0z" />
        </svg>
      )
    default:
      return null
  }
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-serif text-xl md:text-2xl tracking-wide text-charcoal">
          Kaitlyn Edejer
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest uppercase text-charcoal-light hover:text-rose-dark transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-cream/95 backdrop-blur-md ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="flex flex-col items-center gap-6 py-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-charcoal-light hover:text-rose-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0l2.4 8.4L24 12l-9.6 3.6L12 24l-2.4-8.4L0 12l9.6-3.6L12 0z" />
    </svg>
  )
}

function Heart({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21s-7-4.35-9.5-9.5C.85 7.5 3 4 6.5 4c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 3.5 0 5.65 3.5 4 7.5C19 16.65 12 21 12 21z" />
    </svg>
  )
}

function Marquee() {
  const items = ['college life', 'matcha mornings', 'sculpt classes', 'sf days', 'poshmark finds', 'giants games', 'fashion edits', 'shop my favs']
  return (
    <div className="bg-pink-deep text-cream py-4 overflow-hidden border-y border-pink-darker/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="font-serif text-lg md:text-xl italic mx-6 flex items-center gap-6">
            {item}
            <Sparkle className="w-3 h-3" />
          </span>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20 pb-12 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-32 -left-20 w-72 h-72 rounded-full bg-pink-soft/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-pink-light/40 blur-3xl pointer-events-none" />

      {/* Floating decorations */}
      <Sparkle className="absolute top-28 right-12 md:right-32 w-5 h-5 text-pink-deep animate-float" />
      <Heart className="absolute top-1/3 left-8 md:left-32 w-4 h-4 text-pink animate-float-slow" />
      <Sparkle className="absolute bottom-32 left-16 md:left-1/4 w-4 h-4 text-pink-deep animate-float-slow" />
      <Heart className="absolute bottom-40 right-10 md:right-1/4 w-5 h-5 text-pink animate-float" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Photo with pink ring accent */}
        <div className={`relative mb-10 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-pink-light via-pink to-pink-deep opacity-40 blur-md" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-cream shadow-xl shadow-pink/30">
            <img
              src={PROFILE_PIC}
              alt="Kaitlyn Edejer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-charcoal leading-none mb-4 text-center transition-all duration-1000 ease-out delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Kaitlyn Edejer
        </h1>

        <div className={`flex items-center gap-3 mb-6 transition-all duration-1000 ease-out delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="h-px w-8 bg-pink-deep" />
          <p className="text-base md:text-lg text-pink-darker font-serif italic tracking-wide">
            Digital Creator
          </p>
          <Sparkle className="w-3 h-3 text-pink-deep" />
          <p className="text-base md:text-lg text-pink-darker font-serif italic tracking-wide">
            San Francisco
          </p>
          <span className="h-px w-8 bg-pink-deep" />
        </div>

        <p className={`max-w-md text-charcoal-light font-light leading-relaxed text-center mb-10 transition-all duration-1000 ease-out delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          college life, fashion, &amp; things i luv &mdash; all in one place <Heart className="inline w-3 h-3 text-pink-deep -mt-1" />
        </p>

        <div className={`flex items-center gap-5 transition-all duration-1000 ease-out delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {SOCIALS.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-charcoal-light hover:text-pink-deep hover:scale-110 transition-all duration-300"
            >
              <SocialIcon type={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative">
      <Sparkle className="absolute top-20 right-12 md:right-32 w-4 h-4 text-pink animate-float-slow" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal direction="left" className="order-2 md:order-1">
          <div className="relative">
            {/* Pink frame accent */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-pink-soft rounded-sm -z-0" />
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg shadow-pink/20">
              <img
                src={ABOUT_PHOTO}
                alt="Kaitlyn at the Golden Gate Bridge"
                className="w-full h-full object-cover"
              />
            </div>
            <Heart className="absolute -bottom-4 -right-4 w-10 h-10 text-pink-deep animate-float" />
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal delay={0}>
            <p className="text-xs tracking-[0.3em] uppercase text-pink-deep mb-4 flex items-center gap-2">
              <Sparkle className="w-3 h-3" /> About <Sparkle className="w-3 h-3" />
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
              hiii i'm <span className="text-pink-deep italic">kaitlyn!</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-charcoal-light font-light leading-relaxed mb-5">
              digital creator, fitness instructor, and a college senior at the University of San Francisco
              who's literally not ready to graduate yet.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-charcoal-light font-light leading-relaxed mb-5">
              my days are a mix of content creating, teaching sculpt classes at CorePower,
              exploring SF with a matcha in hand, and hunting for the perfect vintage find on Poshmark.
              also a Giants girlie and will always say yes to a day at the ballpark.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-charcoal-light font-light leading-relaxed">
              i believe in living for the little moments, dressing for yourself,
              and never underestimating the power of a good playlist.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Sculpt() {
  return (
    <section id="sculpt" className="py-24 md:py-32 px-6 md:px-12 bg-pink-soft/40 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-pink-light/30 blur-3xl pointer-events-none" />
      <Heart className="absolute top-16 left-12 w-5 h-5 text-pink-deep animate-float-slow" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-pink-deep mb-4 flex items-center justify-center gap-2">
              <Sparkle className="w-3 h-3" /> Fitness <Sparkle className="w-3 h-3" />
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
              Sculpt With <span className="text-pink-deep italic">Kaitlyn</span>
            </h2>
            <p className="max-w-lg mx-auto text-charcoal-light font-light leading-relaxed">
              high-energy sculpt classes that'll leave you feeling so good.
              available for private events, group bookings, and pop-ups across the Bay Area.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Private Events', desc: 'customized sculpt sessions for birthdays, bachelorettes, and celebrations with your people.' },
            { title: 'Group Classes', desc: 'join a community workout in SF. all levels welcome, just bring your energy.' },
            { title: 'Pop-Ups', desc: 'collaborative fitness events with local brands and studios around the city.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 150}>
              <div className="bg-cream p-8 rounded-sm text-center h-full border border-pink-light/40 hover:border-pink hover:shadow-lg hover:shadow-pink/20 transition-all duration-300">
                <Heart className="w-5 h-5 text-pink-deep mx-auto mb-4" />
                <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal-light font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="text-center mt-12">
            <a
              href="https://docs.google.com/forms/d/1ranJpPom8hAU1uqbLTQHb5sXI2V574UqFitPK3BmlXY/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-pink-deep text-cream text-sm tracking-widest uppercase rounded-full hover:bg-pink-darker hover:scale-105 shadow-lg shadow-pink/40 transition-all duration-300"
            >
              Book a Session
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Shop() {
  return (
    <section id="shop" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <Sparkle className="absolute top-20 left-12 w-4 h-4 text-pink animate-float" />
      <Heart className="absolute bottom-20 right-16 w-5 h-5 text-pink-deep animate-float-slow" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-pink-deep mb-4 flex items-center justify-center gap-2">
              <Sparkle className="w-3 h-3" /> Shop <Sparkle className="w-3 h-3" />
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
              Shop My <span className="text-pink-deep italic">Favorites</span>
            </h2>
            <p className="max-w-lg mx-auto text-charcoal-light font-light leading-relaxed">
              everything i love, all in one place. from daily essentials to curated finds.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOPS.map((shop, i) => (
            <Reveal key={shop.name} delay={i * 100}>
              <a
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink/20 h-full border border-pink-light/40"
                style={{ backgroundColor: shop.color }}
              >
                <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-pink-deep transition-colors">
                  {shop.name}
                </h3>
                <p className="text-charcoal-light font-light text-sm mb-4">{shop.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs tracking-widest uppercase text-pink-deep font-medium">
                  Visit
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 bg-pink-soft/40 relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-pink-light/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-pink-deep mb-4 flex items-center justify-center gap-2">
              <Sparkle className="w-3 h-3" /> Gallery <Sparkle className="w-3 h-3" />
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
              <span className="italic text-pink-deep">moments</span> &amp; vibes
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group aspect-square rounded-2xl overflow-hidden block ring-2 ring-cream hover:ring-pink-deep/40 transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={700}>
          <div className="text-center mt-12">
            <a
              href="https://instagram.com/kaitlynedejer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-cream text-pink-deep border border-pink-deep/30 rounded-full text-sm tracking-widest uppercase hover:bg-pink-deep hover:text-cream hover:border-pink-deep transition-all duration-300"
            >
              <SocialIcon type="ig" />
              Follow Along
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <Heart className="absolute top-16 left-12 md:left-1/4 w-5 h-5 text-pink-deep animate-float" />
      <Sparkle className="absolute bottom-24 right-16 md:right-1/4 w-5 h-5 text-pink animate-float-slow" />

      <div className="max-w-3xl mx-auto text-center relative">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-pink-deep mb-4 flex items-center justify-center gap-2">
            <Sparkle className="w-3 h-3" /> Get In Touch <Sparkle className="w-3 h-3" />
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            let's <span className="italic text-pink-deep">work together</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-charcoal-light font-light leading-relaxed mb-10 max-w-lg mx-auto">
            interested in collaborations, brand partnerships, or booking a sculpt session?
            i'd love to hear from you <Heart className="inline w-3 h-3 text-pink-deep -mt-1" />
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href="mailto:kaitlynedejer@yahoo.com"
            className="inline-block px-12 py-4 bg-pink-deep text-cream text-sm tracking-widest uppercase rounded-full hover:bg-pink-darker hover:scale-105 shadow-lg shadow-pink/40 transition-all duration-300"
          >
            Say Hello
          </a>
        </Reveal>

        <Reveal delay={450}>
          <div className="flex items-center justify-center gap-6 mt-12">
            {SOCIALS.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-charcoal-light hover:text-pink-deep hover:scale-110 transition-all duration-300"
              >
                <SocialIcon type={s.icon} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-pink-light/50 bg-cream">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-gray tracking-wide">
        <span className="font-serif text-sm text-charcoal-light flex items-center gap-2">
          Kaitlyn Edejer <Heart className="w-3 h-3 text-pink-deep" />
        </span>
        <span>&copy; {new Date().getFullYear()} &middot; made with love in sf</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Shop />
      <About />
      <Sculpt />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
