import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Shop', href: '#shop' },
  { label: 'Sculpt', href: '#sculpt' },
  { label: 'Brands', href: '#brands' },
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
  { name: 'ShopMy', desc: 'my curated favorites', url: 'https://shopmy.us/shop/kaitlynedejerr', color: '#F8E8E0', logo: 'shopmy' },
  { name: 'Amazon Storefront', desc: 'top picks & daily essentials', url: 'https://www.amazon.com/shop/kaitlynedejer', color: '#FFF1D6', logo: 'amazon' },
  { name: 'Poshmark', desc: 'my pre-loved closet', url: 'https://poshmark.com/closet/kaitlynedejer', color: '#FFE4EE', logo: 'poshmark' },
  { name: 'LikeToKnowIt', desc: 'outfit details & links', url: 'https://www.shopltk.com/explore/kaitlynedejer', color: '#F0E8E4', logo: 'ltk' },
  { name: "KK's Presets", desc: 'photo editing presets', url: 'https://www.etsy.com/shop/KKsPresetsShop', color: '#FFE0E0', logo: 'etsy' },
  { name: 'TikTok Shop', desc: 'trending products i luv', url: 'https://vt.tiktok.com/ZTNU9FA1S/?page=TikTokShop', color: '#E4F4F8', logo: 'tiktok' },
]

const BRAND_PARTNERS = [
  'White Fox Boutique',
  'Old Navy',
  'Pistola Denim',
  'Revlon',
  'Dippin\' Daisy\'s',
  'CorePower Yoga',
  'Elisa Johnson',
  'SF Giants',
]

const STATS = [
  { number: '19.3K', label: 'Instagram followers' },
  { number: '1.8K+', label: 'posts created' },
  { number: '✓', label: 'Meta verified creator' },
]

// Featured reel from her Instagram
const FEATURED_REEL = 'https://www.instagram.com/reel/DXXGZ5tgRCk/embed/'

// Gallery photo of her in fitness/sporty look — used for Sculpt hero
const SCULPT_PHOTO = '/img/gallery-2.jpg'

// KK Collective hero — using the pink sweatsuit shot at the bridge
const COLLECTIVE_PHOTO = '/img/gallery-1.jpg'

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
const ABOUT_PHOTO = '/img/gallery-5.jpg'

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

function PlatformLogo({ type }) {
  const base = "w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
  switch (type) {
    case 'shopmy':
      return <div className={`${base} bg-pink-deep text-cream`}>SM</div>
    case 'amazon':
      return (
        <div className={`${base} bg-charcoal text-cream`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.495.13.105.175.066.327-.105.453-.226.16-.519.347-.886.547-1.121.66-2.36 1.174-3.713 1.54-1.354.367-2.673.55-3.954.55-1.98 0-3.85-.347-5.61-1.04-1.762-.694-3.347-1.66-4.755-2.9-.083-.073-.124-.143-.124-.213 0-.046.018-.088.054-.124zm6.272-6.213c0-1.077.265-2 .795-2.767.531-.768 1.252-1.346 2.165-1.736.835-.357 1.85-.612 3.046-.765.408-.048 1.07-.108 1.99-.18v-.387c0-.972-.107-1.626-.32-1.96-.322-.453-.83-.68-1.523-.68h-.193c-.508.05-.946.213-1.317.49-.371.276-.609.658-.713 1.146-.066.307-.218.483-.456.527L7.747 6.59c-.265-.06-.398-.197-.398-.41 0-.043.005-.086.014-.13.265-1.385.929-2.412 1.992-3.082C10.418 2.295 11.667 1.94 13.103 1.94h.395c1.834 0 3.265.474 4.292 1.42.158.143.302.297.43.46.13.165.235.32.317.464.083.144.158.34.226.587.069.246.118.405.149.477.03.072.054.234.07.485.018.252.027.395.027.43v4.41c0 .314.046.6.137.857.092.257.18.443.265.557.085.114.226.295.42.544.077.107.116.198.116.273 0 .085-.04.157-.117.218-.823.71-1.27 1.097-1.34 1.16-.115.103-.252.114-.412.034-.227-.184-.413-.36-.555-.527-.143-.166-.244-.282-.302-.347-.058-.066-.176-.21-.353-.435-.176-.224-.297-.38-.36-.467-.94 1.013-1.866 1.638-2.778 1.876-.572.156-1.279.234-2.122.234-1.296 0-2.36-.397-3.19-1.19-.83-.794-1.246-1.916-1.246-3.367zm3.467-.397c0 .646.16 1.163.482 1.55.32.387.755.58 1.302.58.046 0 .115-.01.207-.03.092-.02.157-.034.193-.04.704-.184 1.246-.638 1.628-1.36.18-.32.317-.673.41-1.05.092-.378.137-.683.137-.917v-.488c-.876 0-1.54.062-1.99.187-1.32.378-1.99 1.08-1.99 2.105z"/>
          </svg>
        </div>
      )
    case 'poshmark':
      return <div className={`${base} bg-[#7B189F] text-cream`}>P</div>
    case 'ltk':
      return <div className={`${base} bg-charcoal text-cream text-xs tracking-tight`}>LTK</div>
    case 'etsy':
      return <div className={`${base} bg-[#F1641E] text-cream font-serif italic`}>E</div>
    case 'tiktok':
      return (
        <div className={`${base} bg-charcoal text-cream`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
          </svg>
        </div>
      )
    default:
      return <div className={`${base} bg-pink text-cream`}>?</div>
  }
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
    <section id="sculpt" className="py-20 md:py-28 px-6 md:px-12 bg-pink-deep relative overflow-hidden text-cream">
      {/* Decorative big sparkles */}
      <Sparkle className="absolute top-12 left-8 md:left-20 w-8 h-8 text-pink-light opacity-40 animate-float-slow" />
      <Sparkle className="absolute bottom-12 right-8 md:right-20 w-10 h-10 text-pink-light opacity-30 animate-float" />
      <Heart className="absolute top-1/3 right-1/4 w-6 h-6 text-pink-light opacity-30 animate-float" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Bold photo */}
          <Reveal direction="left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-pink-light/30 rounded-3xl rotate-3" />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={SCULPT_PHOTO}
                  alt="Kaitlyn in fitness gear"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cream text-pink-deep px-6 py-3 rounded-full font-serif italic text-lg shadow-xl">
                let's sculpt
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-pink-light mb-4 flex items-center gap-2">
                <Sparkle className="w-3 h-3" /> Sculpt With Kaitlyn
              </p>
              <h2 className="font-serif text-5xl md:text-6xl font-light leading-none mb-6">
                book a class.<br />
                <span className="italic text-pink-light">leave glowing.</span>
              </h2>
              <p className="text-pink-light/90 font-light text-lg leading-relaxed mb-8 max-w-md">
                high-energy sculpt classes in sf and beyond &mdash; perfect for private events,
                bachelorettes, group workouts, or brand pop-ups. come move with me <Heart className="inline w-4 h-4 -mt-1" />
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {['private events', 'group classes', 'brand pop-ups', 'birthdays'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-pink-light/40 text-pink-light text-xs tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://docs.google.com/forms/d/1ranJpPom8hAU1uqbLTQHb5sXI2V574UqFitPK3BmlXY/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-cream text-pink-deep text-sm tracking-widest uppercase rounded-full hover:scale-105 shadow-xl transition-all duration-300 font-medium"
              >
                Book a Session
                <span>&rarr;</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Brands() {
  return (
    <section id="brands" className="py-24 md:py-32 px-6 md:px-12 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-pink-soft/60 blur-3xl pointer-events-none" />
      <Sparkle className="absolute top-16 right-12 w-5 h-5 text-pink animate-float-slow" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-14">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-pink-deep mb-4 flex items-center justify-center gap-2">
              <Sparkle className="w-3 h-3" /> For Brands <Sparkle className="w-3 h-3" />
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
              let's <span className="italic text-pink-deep">create together</span>
            </h2>
            <p className="max-w-xl mx-auto text-charcoal-light font-light leading-relaxed">
              authentic content for brands my audience actually loves.
              fashion, fitness, beauty, and college lifestyle &mdash; all rooted in san francisco.
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={150}>
          <div className="grid grid-cols-3 gap-4 mb-14 max-w-3xl mx-auto">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center px-2 py-6 md:px-4 md:py-8 bg-pink-soft/50 rounded-2xl border border-pink-light/40">
                <div className="font-serif text-3xl md:text-5xl text-pink-deep mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm tracking-wide text-charcoal-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Past partners */}
        <div className="text-center mb-10">
          <Reveal delay={300}>
            <p className="text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              past collaborations
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {BRAND_PARTNERS.map(brand => (
                <span key={brand} className="font-serif text-lg md:text-xl text-charcoal italic">
                  {brand}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Reel embed */}
        <Reveal delay={500}>
          <div className="mt-16 max-w-md mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-pink-deep mb-4 text-center flex items-center justify-center gap-2">
              <Sparkle className="w-3 h-3" /> Recent Work
            </p>
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-pink-light/40 bg-cream">
              <iframe
                src={FEATURED_REEL}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                title="Featured Instagram Reel"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={600}>
          <div className="text-center mt-12">
            <a
              href="mailto:kaitlynedejer@yahoo.com?subject=Brand Partnership Inquiry"
              className="inline-flex items-center gap-2 px-10 py-4 bg-pink-deep text-cream text-sm tracking-widest uppercase rounded-full hover:bg-pink-darker hover:scale-105 shadow-lg shadow-pink/40 transition-all duration-300"
            >
              Request Media Kit
              <span>&rarr;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Collective() {
  return (
    <section id="collective" className="py-20 md:py-28 px-6 md:px-12 bg-pink-soft/40 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-pink-light/30 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal direction="right" className="md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-pink-deep/20 rounded-3xl" />
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={COLLECTIVE_PHOTO}
                  alt="Kaitlyn wearing the KK Sweat Set"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-pink-deep text-cream px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium">
                Coming Back
              </div>
            </div>
          </Reveal>

          <div className="md:order-1">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-pink-deep mb-4 flex items-center gap-2">
                <Heart className="w-3 h-3" /> KK Collective
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
                kk's <span className="italic text-pink-deep">sweat set</span>
              </h2>
              <p className="text-charcoal-light font-light leading-relaxed mb-5">
                my own clothing line &mdash; the perfect oversized sweat set
                for matcha runs, sculpt class, and everything in between.
              </p>
              <p className="text-charcoal-light font-light leading-relaxed mb-8">
                getting ready for a relaunch this season. drop your email
                to be the first to know when it's back <Sparkle className="inline w-3 h-3 text-pink-deep" />
              </p>

              <a
                href="mailto:kaitlynedejer@yahoo.com?subject=Notify me — KK Collective relaunch"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-pink-deep text-pink-deep text-sm tracking-widest uppercase rounded-full hover:bg-pink-deep hover:text-cream transition-all duration-300 font-medium"
              >
                Notify Me
                <Heart className="w-3 h-3" />
              </a>
            </Reveal>
          </div>
        </div>
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
                className="group block p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink/30 h-full border border-pink-light/40 bg-cream relative overflow-hidden"
              >
                {/* Color blob accent */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: shop.color }}
                />
                <div className="relative flex items-start gap-4">
                  <PlatformLogo type={shop.logo} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl text-charcoal mb-1 group-hover:text-pink-deep transition-colors leading-tight">
                      {shop.name}
                    </h3>
                    <p className="text-charcoal-light font-light text-sm">{shop.desc}</p>
                  </div>
                </div>
                <span className="relative inline-flex items-center gap-1 mt-5 text-xs tracking-widest uppercase text-pink-deep font-medium">
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
      <About />
      <Shop />
      <Sculpt />
      <Collective />
      <Brands />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
