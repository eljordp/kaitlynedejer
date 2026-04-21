import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Sculpt', href: '#sculpt' },
  { label: 'Shop', href: '#shop' },
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
  { name: 'ShopMy', desc: 'Curated favorites', url: 'https://shopmy.us/shop/kaitlynedejerr', color: '#F8E8E0' },
  { name: 'Amazon Storefront', desc: 'Top picks & essentials', url: 'https://www.amazon.com/shop/kaitlynedejer', color: '#E8F0E8' },
  { name: 'Poshmark', desc: 'Pre-loved closet', url: 'https://poshmark.com/closet/kaitlynedejer', color: '#E8E4F0' },
  { name: 'LikeToKnowIt', desc: 'Outfit details & links', url: 'https://www.shopltk.com/explore/kaitlynedejer', color: '#F0E8E4' },
  { name: 'Presets Shop', desc: 'Photo editing presets', url: 'https://www.etsy.com/shop/KKsPresetsShop', color: '#E4ECF0' },
  { name: 'TikTok Shop', desc: 'Trending products', url: 'https://vt.tiktok.com/ZTNU9FA1S/?page=TikTokShop', color: '#F0E4EA' },
]

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

        {/* Desktop nav */}
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

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
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

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
      {/* Photo placeholder */}
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-rose-light/60 mb-10 flex items-center justify-center overflow-hidden border-2 border-rose/30">
        <span className="text-warm-gray text-sm tracking-wide">Photo</span>
      </div>

      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-charcoal leading-none mb-4">
        Kaitlyn Edejer
      </h1>
      <p className="text-lg md:text-xl text-warm-gray font-light tracking-wide mb-8">
        Digital Creator &middot; San Francisco
      </p>
      <p className="max-w-md text-charcoal-light font-light leading-relaxed text-center mb-12">
        College life, fashion, fitness, and all the things I love &mdash; curated in one place.
      </p>

      {/* Social row */}
      <div className="flex items-center gap-5">
        {SOCIALS.map(s => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="text-charcoal-light hover:text-rose-dark transition-colors duration-300"
          >
            <SocialIcon type={s.icon} />
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-gray hover:text-rose-dark transition-colors">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 6l5 5 5-5" />
        </svg>
      </a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Photo placeholder */}
        <div className="aspect-[3/4] bg-cream-dark rounded-sm flex items-center justify-center order-2 md:order-1">
          <span className="text-warm-gray text-sm tracking-wide">Photo</span>
        </div>

        <div className="order-1 md:order-2">
          <p className="text-xs tracking-[0.3em] uppercase text-rose-dark mb-4">About</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            Nice to meet you
          </h2>
          <p className="text-charcoal-light font-light leading-relaxed mb-5">
            Hey, I'm Kaitlyn! I'm a digital creator and fitness instructor based in San Francisco.
            My world revolves around fashion, wellness, and sharing the moments that make life beautiful.
          </p>
          <p className="text-charcoal-light font-light leading-relaxed mb-5">
            When I'm not creating content, you can find me teaching Sculpt classes,
            exploring the city, or hunting for the perfect vintage find on Poshmark.
          </p>
          <p className="text-charcoal-light font-light leading-relaxed">
            I believe in living intentionally, dressing for yourself,
            and never underestimating the power of a good playlist.
          </p>
        </div>
      </div>
    </section>
  )
}

function Sculpt() {
  return (
    <section id="sculpt" className="py-24 md:py-32 px-6 md:px-12 bg-cream-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-rose-dark mb-4">Fitness</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            Sculpt With Kaitlyn
          </h2>
          <p className="max-w-lg mx-auto text-charcoal-light font-light leading-relaxed">
            High-energy sculpt classes designed to challenge, inspire, and leave you feeling stronger.
            Available for private events, group bookings, and pop-up classes across the Bay Area.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Private Events', desc: 'Customized sculpt sessions for birthdays, bachelorettes, and celebrations.' },
            { title: 'Group Classes', desc: 'Join a community workout in SF. All levels welcome, just bring your energy.' },
            { title: 'Pop-Ups', desc: 'Collaborative fitness events with local brands and studios.' },
          ].map((item) => (
            <div key={item.title} className="bg-cream p-8 rounded-sm text-center">
              <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
              <p className="text-charcoal-light font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://docs.google.com/forms/d/1ranJpPom8hAU1uqbLTQHb5sXI2V574UqFitPK3BmlXY/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-charcoal text-charcoal text-sm tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  )
}

function Shop() {
  return (
    <section id="shop" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-rose-dark mb-4">Shop</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            Shop My Favorites
          </h2>
          <p className="max-w-lg mx-auto text-charcoal-light font-light leading-relaxed">
            Everything I love, all in one place. From daily essentials to curated finds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOPS.map((shop) => (
            <a
              key={shop.name}
              href={shop.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: shop.color }}
            >
              <h3 className="font-serif text-lg text-charcoal mb-2 group-hover:text-rose-dark transition-colors">
                {shop.name}
              </h3>
              <p className="text-charcoal-light font-light text-sm">{shop.desc}</p>
              <span className="inline-block mt-4 text-xs tracking-widest uppercase text-rose-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Visit &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-rose-dark mb-4">Gallery</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
            Moments
          </h2>
        </div>

        {/* Photo grid — placeholders for her content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => {
            const heights = ['aspect-square', 'aspect-[3/4]', 'aspect-square', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-square', 'aspect-[4/3]', 'aspect-square']
            return (
              <div
                key={i}
                className={`${heights[i]} bg-rose-light/30 rounded-sm flex items-center justify-center`}
              >
                <span className="text-warm-gray text-xs tracking-wide">Photo {i + 1}</span>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/kaitlynedejer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-charcoal-light hover:text-rose-dark transition-colors"
          >
            <SocialIcon type="ig" />
            Follow Along
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-rose-dark mb-4">Get In Touch</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
          Let's Work Together
        </h2>
        <p className="text-charcoal-light font-light leading-relaxed mb-10 max-w-lg mx-auto">
          Interested in collaborations, brand partnerships, or booking a Sculpt session?
          I'd love to hear from you.
        </p>

        <a
          href="mailto:kaitlynedejer@yahoo.com"
          className="inline-block px-10 py-4 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-rose-dark transition-colors duration-300"
        >
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6 mt-12">
          {SOCIALS.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-charcoal-light hover:text-rose-dark transition-colors duration-300"
            >
              <SocialIcon type={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-rose-light/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-gray tracking-wide">
        <span className="font-serif text-sm text-charcoal-light">Kaitlyn Edejer</span>
        <span>&copy; {new Date().getFullYear()} &middot; All rights reserved</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Sculpt />
      <Shop />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
