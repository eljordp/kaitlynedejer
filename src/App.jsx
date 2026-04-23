import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = [
  { label: 'about', href: '#about', num: '01' },
  { label: 'sculpt', href: '#sculpt', num: '02' },
  { label: 'shop', href: '#shop', num: '03' },
  { label: 'gallery', href: '#gallery', num: '04' },
  { label: 'say hi', href: '#contact', num: '05' },
]

const SOCIALS = [
  { name: 'Instagram', url: 'https://instagram.com/kaitlynedejer', icon: 'ig' },
  { name: 'TikTok', url: 'https://tiktok.com/@kaitlynedejer', icon: 'tt' },
  { name: 'Pinterest', url: 'https://pinterest.com/kaitlynedejer', icon: 'pin' },
  { name: 'YouTube', url: 'https://youtube.com/@kaitlynedejer', icon: 'yt' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/kaitlynedejer', icon: 'li' },
]

const SHOPS = [
  { name: 'ShopMy', desc: 'curated favs', url: 'https://shopmy.us/shop/kaitlynedejerr', note: 'the edit' },
  { name: 'Amazon', desc: 'daily essentials', url: 'https://www.amazon.com/shop/kaitlynedejer', note: 'always in my cart' },
  { name: 'Poshmark', desc: 'my pre-loved closet', url: 'https://poshmark.com/closet/kaitlynedejer', note: 'vintage finds' },
  { name: 'LikeToKnowIt', desc: 'outfit details', url: 'https://www.shopltk.com/explore/kaitlynedejer', note: 'daily fits' },
  { name: "KK's Presets", desc: 'photo editing', url: 'https://www.etsy.com/shop/KKsPresetsShop', note: 'my signature look' },
  { name: 'TikTok Shop', desc: 'trending things', url: 'https://vt.tiktok.com/ZTNU9FA1S/?page=TikTokShop', note: 'obsessed rn' },
]

const GALLERY_IMAGES = [
  { src: '/img/gallery-1.jpg', alt: 'Golden Gate Bridge day', link: 'https://instagram.com/p/DXXZyKxEvpu/', caption: 'golden gate, golden hour' },
  { src: '/img/gallery-2.jpg', alt: 'Sporty active fit', link: 'https://instagram.com/p/DXUyD1sj3Ev/', caption: 'post-sculpt' },
  { src: '/img/gallery-3.jpg', alt: 'Outfit of the day', link: 'https://instagram.com/p/DXPkqcPD-Pg/', caption: 'ootd' },
  { src: '/img/gallery-4.jpg', alt: 'SF vibes', link: 'https://instagram.com/p/DXM9_qBjzAW/', caption: 'sf days' },
  { src: '/img/gallery-5.jpg', alt: 'Turtleneck look', link: 'https://instagram.com/p/DXKVPu0CfBQ/', caption: 'cozy szn' },
  { src: '/img/gallery-6.jpg', alt: 'Sisters night out', link: 'https://instagram.com/p/DXKORz8gS_B/', caption: 'sister night' },
  { src: '/img/gallery-7.jpg', alt: 'Checkered outfit', link: 'https://instagram.com/p/DXH5XmjD1iC/', caption: 'checkers' },
  { src: '/img/gallery-8.jpg', alt: 'College senior vibes', link: 'https://instagram.com/p/DXHz_gND_PV/', caption: 'senior year' },
]

const HERO_STACK = [
  { src: '/img/gallery-3.jpg', tilt: -8 },
  { src: '/img/gallery-1.jpg', tilt: 5 },
  { src: '/img/gallery-5.jpg', tilt: -3 },
  { src: '/img/gallery-7.jpg', tilt: 7 },
]

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function SocialIcon({ type, className = 'w-5 h-5' }) {
  const props = { viewBox: '0 0 24 24', className, fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (type) {
    case 'ig':
      return (<svg {...props}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>)
    case 'tt':
      return (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" /></svg>)
    case 'pin':
      return (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0a12 12 0 00-4.37 23.17c-.07-.94-.13-2.4.03-3.44l1.15-4.86s-.29-.58-.29-1.44c0-1.35.78-2.36 1.76-2.36.83 0 1.23.62 1.23 1.37 0 .84-.53 2.09-.81 3.25-.23.97.49 1.76 1.45 1.76 1.74 0 3.07-1.83 3.07-4.48 0-2.34-1.68-3.98-4.09-3.98-2.78 0-4.42 2.09-4.42 4.25 0 .84.32 1.74.73 2.23.08.1.09.18.07.28l-.27 1.11c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.42-2.03-3.89 0-3.16 2.3-6.07 6.63-6.07 3.48 0 6.19 2.48 6.19 5.79 0 3.46-2.18 6.24-5.21 6.24-1.02 0-1.98-.53-2.31-1.15l-.63 2.4c-.23.88-.84 1.98-1.26 2.65A12 12 0 1012 0z" /></svg>)
    case 'yt':
      return (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" /></svg>)
    case 'li':
      return (<svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0z" /></svg>)
    default: return null
  }
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-paper/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="font-serif text-[22px] md:text-2xl italic text-ink leading-none">
          kaitlyn<span className="text-terracotta">.</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="group relative text-[13px] tracking-wide text-ink-soft hover:text-terracotta transition-colors duration-300">
              <span className="scrawl text-ink-fade mr-1 text-base">{link.num}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] px-3 py-4 bg-transparent border-none cursor-pointer"
          aria-label="Menu"
        >
          <span className={`block w-6 h-[1.5px] bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-paper/97 backdrop-blur-md border-b border-ink/10 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col px-6 py-6 gap-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 py-3 border-b border-ink/10 last:border-0 text-ink hover:text-terracotta transition-colors"
            >
              <span className="scrawl text-ink-fade text-lg">{link.num}</span>
              <span className="font-serif text-2xl italic">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

/** Draggable/swipeable polaroid stack */
function PhotoStack() {
  const [order, setOrder] = useState([0, 1, 2, 3])
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)

  const sendToBack = () => {
    setOrder(o => [...o.slice(1), o[0]])
    setDragX(0)
  }

  const onDown = (x) => {
    setDragging(true)
    startX.current = x
  }
  const onMove = (x) => {
    if (!dragging) return
    setDragX(x - startX.current)
  }
  const onUp = () => {
    if (!dragging) return
    setDragging(false)
    if (Math.abs(dragX) > 80) sendToBack()
    else setDragX(0)
  }

  return (
    <div
      className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[380px] md:w-[340px] md:h-[430px] select-none touch-none"
      onMouseDown={(e) => onDown(e.clientX)}
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={(e) => onDown(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onUp}
      onClick={sendToBack}
    >
      {order.map((idx, stackPos) => {
        const photo = HERO_STACK[idx]
        const isTop = stackPos === order.length - 1
        const offset = (order.length - 1 - stackPos)
        const translate = isTop ? `translate(${dragX}px, 0)` : `translate(${offset * 6}px, ${offset * 6}px)`
        const rotate = isTop ? `rotate(${photo.tilt + dragX * 0.05}deg)` : `rotate(${photo.tilt}deg)`
        const opacity = isTop ? 1 - Math.min(Math.abs(dragX) / 400, 0.4) : 1 - offset * 0.08
        return (
          <div
            key={idx}
            className="tape absolute inset-0 bg-cream p-3 pb-14 shadow-[0_12px_28px_-8px_rgba(31,27,21,0.35)] transition-transform duration-300 ease-out"
            style={{
              transform: `${translate} ${rotate}`,
              transition: dragging && isTop ? 'none' : 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
              zIndex: stackPos,
              cursor: isTop ? 'grab' : 'default',
              opacity,
            }}
          >
            <div className="w-full h-full bg-paper-dark overflow-hidden">
              <img src={photo.src} alt="" className="w-full h-full object-cover" draggable={false} />
            </div>
            <span className="absolute bottom-3 left-0 right-0 text-center scrawl text-ink-soft text-xl">
              {idx === 0 && 'hi, it\'s me'}
              {idx === 1 && 'sf, my love'}
              {idx === 2 && 'cozy szn'}
              {idx === 3 && 'good days'}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="min-h-[100svh] pt-24 md:pt-28 pb-16 px-5 md:px-10 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <Reveal>
            <div className="scrawl text-terracotta text-2xl md:text-3xl mb-3">issue no. 01 — spring '26</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif italic font-light text-ink leading-[0.92] tracking-tight text-[56px] sm:text-[76px] md:text-[104px] lg:text-[128px] mb-4">
              kaitlyn<br />
              <span className="not-italic font-normal">edejer.</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] text-ink-soft mb-8">
              <span className="uppercase tracking-[0.25em] text-xs">digital creator</span>
              <span className="text-terracotta">✦</span>
              <span className="uppercase tracking-[0.25em] text-xs">sculpt instructor</span>
              <span className="text-terracotta">✦</span>
              <span className="uppercase tracking-[0.25em] text-xs">san francisco</span>
            </div>
          </Reveal>
          <Reveal delay={380}>
            <p className="font-serif text-xl md:text-2xl italic text-ink-soft leading-snug max-w-md mb-8">
              college life, cozy fits, sf mornings &amp; everything i <span className="scrawl not-italic text-terracotta text-3xl">luv</span>
              — all in one place.
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div className="flex items-center gap-5">
              {SOCIALS.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-ink-soft hover:text-terracotta transition-colors duration-300 p-3 -m-3"
                >
                  <SocialIcon type={s.icon} className="w-[22px] h-[22px]" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <Reveal delay={200}>
            <PhotoStack />
          </Reveal>
          <span className="scrawl absolute -bottom-2 right-4 md:right-12 text-ink-fade text-lg rotate-[-4deg] hidden sm:block">
            ← drag / tap to flip
          </span>
        </div>
      </div>
    </section>
  )
}

/** Marquee ticker of things kaitlyn loves */
function LoveTicker() {
  const items = ['matcha mornings', 'giants games', 'poshmark finds', 'sculpt class', 'golden hour', 'sf fog', 'a good playlist', 'vintage denim', 'cozy sweaters', 'bookshop dates']
  const full = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-5 md:py-7 border-y border-ink/15 bg-paper-dark/60">
      <div className="flex gap-12 md:gap-16 whitespace-nowrap ticker-track">
        {full.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-12 md:gap-16 font-serif italic text-ink text-2xl md:text-4xl">
            {t}
            <span className="text-terracotta">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-5 md:px-10 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-5 md:col-start-1">
          <Reveal>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden transform rotate-[-2deg] bg-cream p-3 pb-16 shadow-[0_18px_40px_-12px_rgba(31,27,21,0.3)] tape">
                <img src="/img/gallery-1.jpg" alt="Kaitlyn at the Golden Gate Bridge" className="w-full h-full object-cover" />
                <span className="absolute bottom-4 left-0 right-0 text-center scrawl text-ink-soft text-xl">first morning in the city</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-20">
          <Reveal>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="scrawl text-terracotta text-3xl">01</span>
              <span className="uppercase tracking-[0.3em] text-[11px] text-ink-fade">about the girl</span>
              <span className="flex-1 border-b border-ink/15 mb-2"></span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-ink leading-[0.95] mb-8">
              hiii, <span className="italic">i'm kaitlyn</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-ink-soft text-[17px] leading-relaxed mb-5 max-w-lg">
              digital creator, fitness instructor, and a college senior at USF who's <em>literally</em> not ready to graduate yet.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="my-8 border-l-2 border-terracotta pl-5 py-1">
              <p className="font-serif italic text-2xl md:text-3xl text-ink leading-snug">
                "living for the little moments, dressing for yourself, and never underestimating the power of a good playlist."
              </p>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <p className="text-ink-soft text-[17px] leading-relaxed max-w-lg">
              my days are a mix of content creating, teaching sculpt classes at CorePower, exploring sf with a matcha in hand,
              and hunting for the perfect vintage find on poshmark. also a giants girlie — will always say yes to a day at the ballpark.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Sculpt() {
  const cards = [
    { t: 'private events', d: 'birthdays, bachelorettes, and celebrations with your people.', n: 'a' },
    { t: 'group classes', d: 'join a community workout in sf. all levels welcome.', n: 'b' },
    { t: 'pop-ups', d: 'collaborative fitness events with local brands and studios.', n: 'c' },
  ]
  return (
    <section id="sculpt" className="py-24 md:py-36 px-5 md:px-10 bg-paper-dark/50 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="scrawl text-terracotta text-3xl">02</span>
            <span className="uppercase tracking-[0.3em] text-[11px] text-ink-fade">move with me</span>
            <span className="flex-1 border-b border-ink/15 mb-2"></span>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-14">
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl md:text-7xl font-light text-ink leading-[0.95]">
                sculpt <span className="italic">with</span><br />kaitlyn.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pt-6">
            <Reveal delay={200}>
              <p className="text-ink-soft text-[17px] leading-relaxed">
                high-energy sculpt classes that'll leave you feeling <em>so</em> good.
                available for private events, group bookings, and pop-ups across the bay area.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-7">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 120}>
              <div className="bg-cream p-7 md:p-8 h-full border border-ink/10 relative group hover:border-terracotta/50 transition-colors">
                <span className="scrawl text-terracotta text-4xl absolute top-4 right-5">{c.n}</span>
                <h3 className="font-serif italic text-2xl md:text-3xl text-ink mb-3 leading-tight">{c.t}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://docs.google.com/forms/d/1ranJpPom8hAU1uqbLTQHb5sXI2V574UqFitPK3BmlXY/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-9 py-4 bg-ink text-cream text-sm tracking-[0.2em] uppercase hover:bg-terracotta transition-colors duration-300 min-h-[48px]"
            >
              book a session
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <span className="scrawl text-ink-fade text-xl">let's sweat ✦</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Shop() {
  return (
    <section id="shop" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="scrawl text-terracotta text-3xl">03</span>
            <span className="uppercase tracking-[0.3em] text-[11px] text-ink-fade">the edit</span>
            <span className="flex-1 border-b border-ink/15 mb-2"></span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-14">
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl md:text-7xl font-light text-ink leading-[0.95]">
                shop <span className="italic">my</span><br />favorites.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pt-6">
            <Reveal delay={200}>
              <p className="text-ink-soft text-[17px] leading-relaxed">
                everything i love, all in one place. from daily essentials to the vintage finds
                i'll never stop hunting for.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal>
        <div className="overflow-x-auto pb-8 -mx-5 px-5 md:-mx-10 md:px-10 scrollbar-none">
          <div className="flex gap-6 md:gap-8 min-w-min">
            {SHOPS.map((shop, i) => (
              <a
                key={shop.name}
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group shrink-0 w-[240px] md:w-[280px] bg-cream p-5 pb-10 border border-ink/10 hover:border-terracotta/60 transition-all duration-500 hover:-translate-y-1 relative"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className="aspect-[3/4] bg-paper-dark mb-4 overflow-hidden relative flex items-center justify-center">
                  <span className="font-serif italic text-4xl md:text-5xl text-ink/30">{shop.name.charAt(0)}</span>
                  <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-ink-fade bg-cream/80 px-2 py-1">no. 0{i + 1}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-1">{shop.name}</h3>
                    <p className="text-ink-fade text-[13px]">{shop.desc}</p>
                  </div>
                  <span className="scrawl text-terracotta text-lg whitespace-nowrap rotate-[-6deg] leading-tight text-right">{shop.note}</span>
                </div>
                <span className="absolute bottom-3 right-5 text-[11px] tracking-[0.2em] uppercase text-ink-fade group-hover:text-terracotta transition-colors">
                  visit →
                </span>
              </a>
            ))}
            <div className="shrink-0 w-5 md:w-10"></div>
          </div>
        </div>
      </Reveal>

      <div className="max-w-6xl mx-auto px-5 md:px-10 mt-3">
        <span className="scrawl text-ink-fade text-lg">← swipe →</span>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-36 px-5 md:px-10 bg-paper-dark/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="scrawl text-terracotta text-3xl">04</span>
            <span className="uppercase tracking-[0.3em] text-[11px] text-ink-fade">from the camera roll</span>
            <span className="flex-1 border-b border-ink/15 mb-2"></span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-ink leading-[0.95] mb-14">
            moments <span className="italic">&amp;</span><br />memories.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, i) => {
            const tilt = (i % 4 === 0 ? -2 : i % 4 === 1 ? 1.5 : i % 4 === 2 ? -1 : 2)
            return (
              <Reveal key={i} delay={i * 60}>
                <a
                  href={img.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-cream p-2 pb-10 shadow-[0_8px_20px_-8px_rgba(31,27,21,0.25)] hover:shadow-[0_18px_36px_-12px_rgba(31,27,21,0.35)] transition-all duration-500 relative"
                  style={{ transform: `rotate(${tilt}deg)` }}
                >
                  <div className="aspect-square overflow-hidden bg-paper-dark">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="absolute bottom-2 left-0 right-0 text-center scrawl text-ink-soft text-base md:text-lg">{img.caption}</span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={400}>
          <div className="text-center mt-16">
            <a
              href="https://instagram.com/kaitlynedejer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-ink-soft hover:text-terracotta transition-colors min-h-[44px]"
            >
              <SocialIcon type="ig" />
              follow along
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 px-5 md:px-10 relative">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="scrawl text-terracotta text-3xl">05</span>
            <span className="uppercase tracking-[0.3em] text-[11px] text-ink-fade">say hi</span>
            <span className="flex-1 border-b border-ink/15 mb-2"></span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-ink leading-[0.9]">
                let's<br /><span className="italic">work together</span>.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={200}>
              <p className="text-ink-soft text-[16px] leading-relaxed">
                collabs, brand partnerships, or booking a sculpt session — i'd love to hear from you.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={350}>
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="mailto:kaitlynedejer@yahoo.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-terracotta text-cream text-sm tracking-[0.25em] uppercase hover:bg-ink transition-colors duration-300 min-h-[52px]"
            >
              say hello
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="flex flex-col">
              <span className="scrawl text-ink-soft text-2xl">or find me here ↓</span>
              <div className="flex items-center gap-5 mt-2">
                {SOCIALS.map(s => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="text-ink-soft hover:text-terracotta transition-colors p-3 -m-3"
                  >
                    <SocialIcon type={s.icon} className="w-[22px] h-[22px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={550}>
          <p className="scrawl text-ink-fade text-2xl md:text-3xl mt-16 text-right">— xx, kk</p>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 px-5 md:px-10 border-t border-ink/15 bg-paper-dark/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-ink-fade">
        <span className="font-serif italic text-lg text-ink">kaitlyn edejer<span className="text-terracotta">.</span></span>
        <span className="tracking-wide">© {new Date().getFullYear()} · made with love in sf</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <LoveTicker />
      <About />
      <Sculpt />
      <Shop />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
