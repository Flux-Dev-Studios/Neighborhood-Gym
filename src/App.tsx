import { useState } from "react";
import {
  ArrowDown, ArrowRight, Check, Dumbbell, Menu, MoveUpRight, Play,
  Sparkles, X, Zap, HeartPulse, Instagram, Facebook, Youtube,
} from "lucide-react";

type Plan = {
  name: string;
  price: string;
  suffix: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "STARTER",
    price: "$19",
    suffix: "/ month",
    description: "A fresh start for your fitness journey.",
    features: ["Full gym access", "Locker room access", "2 group classes / week", "Fitness assessment"],
  },
  {
    name: "UNLIMITED",
    price: "$39",
    suffix: "/ month",
    description: "Your routine, without the limits.",
    features: ["Everything in Starter", "Unlimited group classes", "Sauna & recovery zone", "Monthly progress check-in", "Guest pass every month"],
    featured: true,
  },
  {
    name: "ELITE",
    price: "$69",
    suffix: "/ month",
    description: "Extra support. Exceptional results.",
    features: ["Everything in Unlimited", "2 personal training sessions", "Priority class booking", "Nutrition guidance", "Bring a friend anytime"],
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("UNLIMITED");
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Neighborhood Gym home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><Dumbbell size={20} strokeWidth={2.8} /></span>
          NEIGHBORHOOD<span>GYM</span><i>.</i>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); scrollTo(item.href); }}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#pricing" onClick={(event) => { event.preventDefault(); scrollTo("#pricing"); }}>
            Join the club <ArrowUpRightIcon />
          </a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> YOUR NEXT CHAPTER STARTS HERE</div>
          <h1>STRONG<br />LOOKS <span>GOOD</span><br />ON YOU<span className="period">.</span></h1>
          <p>Build strength. Find your people. Feel unstoppable. Your goals are personal — your training should be too.</p>
          <div className="hero-actions">
            <button className="button button-hero" onClick={() => scrollTo("#pricing")}>Find your plan <ArrowRight size={18} /></button>
            <button className="play-link" onClick={() => scrollTo("#about")}><span className="play-circle"><Play size={14} fill="currentColor" /></span> Discover Neighborhood Gym </button>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO FEEL IT</span><ArrowDown size={29} /></a>
        <div className="hero-bottom-note">TRAIN HARD. LIVE WELL.</div>
      </section>

      <section className="ticker" aria-label="Neighborhood Gym values">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="ticker-group" key={index}>
              <span>MOVE BETTER</span><Sparkles /><span>FEEL STRONGER</span><Sparkles /><span>LIVE BRIGHTER</span><Sparkles /><span>YOUR PACE. YOUR POWER.</span><Sparkles />
            </div>
          ))}
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-kicker"><span>01 / THE NEIGHBORHOOD GYM WAY</span><span className="kicker-line" /></div>
        <div className="about-grid">
          <div>
            <h2>MORE THAN A<br />GYM. <span>YOUR</span><br /><span className="outline-word">HAPPY PLACE.</span></h2>
          </div>
          <div className="about-copy">
            <p className="lead">Fitness isn't a finish line. It's how you show up for yourself, one good decision at a time.</p>
            <p>From your first rep to your next personal best, we're here for the whole journey. Expert coaches, seriously good energy, and a community that celebrates every win.</p>
            <a href="#contact" className="text-link" onClick={(event) => { event.preventDefault(); scrollTo("#contact"); }}>Get to know us <ArrowRight size={17} /></a>
          </div>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-red">
            <span className="feature-number">01</span><div className="feature-icon"><Dumbbell /></div>
            <h3>TRAIN YOUR WAY</h3><p>Strength, cardio, mobility — the tools you need to make progress that feels good.</p><span className="feature-arrow"><ArrowRight /></span>
          </article>
          <article className="feature-card feature-dark">
            <span className="feature-number">02</span><div className="feature-icon"><HeartPulse /></div>
            <h3>GOOD ENERGY ONLY</h3><p>Big encouragement, zero judgment. Find your people and enjoy the process.</p><span className="feature-arrow"><ArrowRight /></span>
          </article>
          <article className="feature-card feature-cream">
            <span className="feature-number">03</span><div className="feature-icon"><Sparkles /></div>
            <h3>BUILT AROUND YOU</h3><p>Real coaching and flexible plans that fit your life, not the other way around.</p><span className="feature-arrow"><ArrowRight /></span>
          </article>
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-symbol">“</div>
        <p>YOU DON'T HAVE TO BE<br />GREAT TO <span>START.</span></p>
        <div className="quote-bottom"><span>JUST START. WE'LL GO FROM THERE.</span><span>NEIGHBORHOOD GYM / EST. 2024</span></div>
        <div className="quote-orbit" />
      </section>

      <section className="pricing section-pad" id="pricing">
        <div className="section-kicker"><span>02 / MEMBERSHIP</span><span className="kicker-line" /><span>NO HIDDEN FEES. JUST GOOD ENERGY.</span></div>
        <div className="pricing-heading">
          <h2>YOUR GOALS.<br /><span>YOUR PLAN.</span></h2>
          <p>Pick the membership that fits your life right now. You can always level up when you're ready.</p>
        </div>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <article className={`plan-card ${plan.featured ? "plan-featured" : ""}`} key={plan.name}>
              {plan.featured && <div className="popular-tag"><Sparkles size={13} /> MOST LOVED</div>}
              <div className="plan-top"><span>0{index + 1} / MEMBERSHIP</span><span className="plan-icon">{index === 0 ? <Dumbbell /> : index === 1 ? <Zap /> : <Sparkles />}</span></div>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="price">{plan.price}<span>{plan.suffix}</span></div>
              <div className="plan-divider" />
              <ul>{plan.features.map((feature) => <li key={feature}><span><Check size={13} /></span>{feature}</li>)}</ul>
              <button className={plan.featured ? "button button-dark" : "button button-outline"} onClick={() => { setSelectedPlan(plan.name); scrollTo("#contact"); }}>
                Choose {plan.name.toLowerCase()} <ArrowRight size={17} />
              </button>
            </article>
          ))}
        </div>
        <p className="pricing-note"><Check size={15} /> All plans include a no-pressure first visit. Cancel or change your plan anytime.</p>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-left">
          <div className="section-kicker"><span>03 / SAY HELLO</span><span className="kicker-line" /></div>
          <h2>LET'S MAKE<br />SOMETHING <span>HAPPEN.</span></h2>
          <p>Questions, goals, or just want to see the space? We're all ears. Your first step can be a simple hello.</p>
          <div className="contact-detail"><span className="contact-detail-icon">✳</span><div><small>COME FIND US</small><strong>24 Motion Street, Your City</strong></div></div>
          <div className="contact-detail"><span className="contact-detail-icon">@</span><div><small>DROP US A LINE</small><strong>hello@neighborhoodgym.club</strong></div></div>
          <div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram /></a><a href="https://facebook.com" aria-label="Facebook"><Facebook /></a><a href="https://youtube.com" aria-label="YouTube"><Youtube /></a></div>
        </div>
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="success-state"><div className="success-icon"><Check size={26} /></div><h3>YOU'RE ON YOUR WAY.</h3><p>Thanks for reaching out! This demo form has captured your submission locally. Connect it to your email or CRM to receive real messages.</p><button className="button button-dark" onClick={() => setSubmitted(false)}>Send another message <ArrowRight size={17} /></button></div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>LET'S CONNECT</span><span className="form-star">✳</span></div>
              <label>Your name<input name="name" placeholder="What should we call you?" required /></label>
              <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>I'm interested in<select name="interest" value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)}><option value="STARTER">Starter membership</option><option value="UNLIMITED">Unlimited membership</option><option value="ELITE">Elite membership</option><option value="TOUR">A gym tour</option><option value="OTHER">Something else</option></select></label>
              <label>Your message<textarea name="message" placeholder="Tell us a little about your goals..." rows={3} required /></label>
              <button type="submit" className="button button-red">Send it our way <ArrowRight size={18} /></button>
              <small className="form-privacy">By sending this, you're taking the first step. We love that for you.</small>
            </form>
          )}
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Dumbbell size={18} strokeWidth={2.8} /></span> Neighborhood<span>GYM</span><i>.</i></a>
        <span>© 2026 NEIGHBORHOOD GYM CLUB. BUILT FOR YOUR NEXT CHAPTER.</span>
        <a className="back-top" href="#home">BACK TO TOP <MoveUpRight size={15} /></a>
      </footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <MoveUpRight size={16} />;
}

export default App;
