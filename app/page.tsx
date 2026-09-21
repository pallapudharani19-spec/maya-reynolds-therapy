"use client";

import React from "react";

const images = {
  maya: "/images/maya.jpg",
  office1: "/images/office-1.jpg",
  office2: "/images/office-2.jpg",
};

function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="brand">
        <div className="brand-name">Maya Reynolds</div>
        <div className="brand-subtitle">PSYD • CLINICAL PSYCHOLOGIST</div>
      </a>

      <nav className="desktop-nav">
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#approach">APPROACH</a>
        <a href="#office">OFFICE</a>
        <a href="#faqs">FAQS</a>
        <a href="#contact" className="contact-nav">
          CONTACT
        </a>
      </nav>

      <details className="mobile-menu">
        <summary>MENU</summary>

        <div className="mobile-links">
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#approach">APPROACH</a>
          <a href="#office">OFFICE</a>
          <a href="#faqs">FAQS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </details>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-image">
          <img
            src={images.maya}
            alt="Dr. Maya Reynolds, PsyD"
          />
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            THERAPY IN SANTA MONICA • IN-PERSON & TELEHEALTH
          </div>

          <h1>
            A grounded space for
            <br />
            anxiety, trauma &
            <br />
            <span>burnout.</span>
          </h1>

          <p className="hero-description">
            Warm, collaborative therapy for adults who feel overwhelmed,
            stuck in overthinking, or emotionally on edge.
          </p>

          <a className="primary-button" href="#contact">
            BEGIN YOUR THERAPY JOURNEY
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="intro-small">
          THERAPY WITH DR. MAYA REYNOLDS, PSYD
        </div>

        <h2>
          You don't have to keep pushing through
          <span> on your own.</span>
        </h2>

        <p>
          I work with adults who may look functional on the outside while
          quietly struggling with anxiety, stress, past experiences, or
          emotional exhaustion.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section section-padding">
        <div className="about-image">
          <img
            src={images.maya}
            alt="Dr. Maya Reynolds, PsyD"
          />
        </div>

        <div className="about-content">
          <div className="section-label">ABOUT MAYA</div>

          <h2>
            A warm, collaborative, and grounded approach to therapy.
          </h2>

          <p>
            I’m a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults who feel overwhelmed by
            anxiety, stress, or the lingering effects of past experiences.
          </p>

          <p>
            Many of the people I work with are high-achieving, thoughtful,
            and self-aware—but internally feel exhausted, stuck in
            overthinking, or emotionally on edge.
          </p>

          <p>
            I believe therapy works best when clients feel respected,
            understood, and actively involved in the process. My goal is not
            just symptom relief, but helping clients develop insight,
            resilience, and a stronger relationship with themselves over time.
          </p>

          <a className="text-link" href="#approach">
            CONNECT WITH MAYA →
          </a>
        </div>
      </section>

      {/* WHO I HELP */}
      <section className="who-section section-padding">
        <div className="section-label">WHO I WORK WITH</div>

        <h2 className="section-title">
          Support for adults navigating
          <br />
          <span>life's internal pressure.</span>
        </h2>

        <div className="help-grid">
          <article className="help-card">
            <div className="card-number">01</div>
            <h3>High-Achieving Adults</h3>
            <p>
              For thoughtful, self-aware people who may appear successful
              externally while feeling exhausted, stuck, or overwhelmed
              internally.
            </p>
          </article>

          <article className="help-card">
            <div className="card-number">02</div>
            <h3>Entrepreneurs & Creatives</h3>
            <p>
              Support for people who have spent years pushing through stress
              and now feel disconnected from themselves or their needs.
            </p>
          </article>

          <article className="help-card">
            <div className="card-number">03</div>
            <h3>Professionals</h3>
            <p>
              A space to slow down, reconnect, and develop more sustainable
              ways of living and working when pressure has become difficult to
              carry.
            </p>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section section-padding">
        <div className="services-heading">
          <div className="section-label">AREAS OF SUPPORT</div>

          <h2>
            Therapy that meets you
            <br />
            <span>where you are.</span>
          </h2>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-number">01</div>

            <h3>Anxiety & Panic Therapy</h3>

            <p>
              Therapy for adults experiencing constant worry, tension,
              overthinking, difficulty sleeping, panic, or the feeling of
              always bracing for something to go wrong.
            </p>

            <a href="#approach" className="text-link">
              LEARN MORE →
            </a>
          </article>

          <article className="service-card featured">
            <div className="service-number">02</div>

            <h3>Trauma Therapy</h3>

            <p>
              Support for adults working through single-incident trauma or
              more complex, long-standing patterns connected to childhood,
              relationships, or chronic stress.
            </p>

            <a href="#approach" className="text-link">
              LEARN MORE →
            </a>
          </article>

          <article className="service-card">
            <div className="service-number">03</div>

            <h3>Burnout & Perfectionism</h3>

            <p>
              A space to slow down, reconnect with yourself, and explore more
              sustainable ways of living and working when high internal
              pressure and professional burnout take over.
            </p>

            <a href="#approach" className="text-link">
              LEARN MORE →
            </a>
          </article>
        </div>
      </section>

      {/* QUOTE / MESSAGE */}
      <section className="message-section">
        <div className="message-content">
          <div className="section-label">A DIFFERENT WAY FORWARD</div>

          <h2>
            Practical tools.
            <br />
            Deeper understanding.
            <br />
            <span>Meaningful change.</span>
          </h2>

          <p>
            Therapy can become a space to slow down, reconnect, and develop
            more sustainable ways of living and working.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="approach-section section-padding">
        <div className="approach-intro">
          <div className="section-label">MY APPROACH</div>

          <h2>
            Structured enough to support you.
            <br />
            Open enough for <span>depth.</span>
          </h2>
        </div>

        <div className="approach-content">
          <p>
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive, while still
            leaving space for reflection and depth.
          </p>

          <p>
            I integrate evidence-based methods to help clients understand both
            the emotional and physiological sides of what they’re
            experiencing.
          </p>

          <div className="methods-list">
            <div>
              <span>01</span>
              <strong>Cognitive-Behavioral Therapy</strong>
              <p>CBT</p>
            </div>

            <div>
              <span>02</span>
              <strong>Eye Movement Desensitization & Reprocessing</strong>
              <p>EMDR</p>
            </div>

            <div>
              <span>03</span>
              <strong>Mindfulness-Based Practices</strong>
              <p>MINDFULNESS</p>
            </div>

            <div>
              <span>04</span>
              <strong>Body-Oriented Techniques</strong>
              <p>BODY-ORIENTED WORK</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAUMA */}
      <section className="trauma-section">
        <div className="trauma-image">
          <img
            src={images.office1}
            alt="Calm therapy office environment"
          />
        </div>

        <div className="trauma-content">
          <div className="section-label">TRAUMA-INFORMED SUPPORT</div>

          <h2>
            Healing begins with
            <br />
            <span>safety & stabilization.</span>
          </h2>

          <p>
            Trauma work is an important part of my practice. I work with
            adults who have experienced single-incident trauma as well as more
            complex, long-standing patterns.
          </p>

          <p>
            My approach is paced carefully, with an emphasis on safety,
            stabilization, and helping clients feel more regulated in their
            daily lives—not just during sessions.
          </p>
        </div>
      </section>

      {/* TELEHEALTH */}
      <section className="telehealth-section section-padding">
        <div>
          <div className="section-label">FLEXIBLE THERAPY OPTIONS</div>

          <h2>
            In-person in
            <br />
            <span>Santa Monica.</span>
          </h2>
        </div>

        <div className="telehealth-copy">
          <p>
            I offer in-person therapy from my Santa Monica office and secure
            telehealth sessions for clients located in California.
          </p>

          <p>
            Whether you meet with me in the office or through telehealth,
            therapy provides a space to feel respected, understood, and
            actively involved in your process.
          </p>

          <a className="primary-button" href="#contact">
            EXPLORE THERAPY OPTIONS
          </a>
        </div>
      </section>

      {/* OFFICE */}
   <section id="office" className="office-section section-padding">
  <div className="section-label">OUR OFFICE</div>

  <div className="office-heading">
    <h2>
      A quiet space to
      <br />
      feel <span>grounded.</span>
    </h2>

    <p>
      Therapy should feel like a space where you can slow down, feel
      comfortable, and focus on yourself. Maya's office is designed to offer
      a calm, private, and welcoming environment for meaningful therapy work.
    </p>
  </div>

  <div className="office-grid">
    <div className="office-image large">
      <img
        src={images.office1}
        alt="Dr. Maya Reynolds therapy office"
      />
    </div>

    <div className="office-image">
      <img
        src={images.office2}
        alt="Comfortable therapy office interior"
      />
    </div>
  </div>
<div className="office-details">
  <div>
    <span>LOCATION</span>
    <strong>
      123th Street 45W,
      <br />
      Santa Monica, California
    </strong>
  </div>

  <div>
    <span>IN-PERSON</span>
    <strong>In-person therapy sessions</strong>
  </div>

  <div>
    <span>TELEHEALTH</span>
    <strong>Secure California telehealth</strong>
  </div>
</div>

  <div className="office-note">
    <p>
      The office provides a comfortable setting where clients can feel
      respected, supported, and at ease. Privacy, safety, and a sense of
      comfort are central to creating a space for honest and meaningful
      conversations.
    </p>
  </div>
</section>
      

      {/* FAQ */}
      <section id="faqs" className="faq-section section-padding">
        <div className="section-label">FREQUENTLY ASKED QUESTIONS</div>

        <h2>
          A few things you may be
          <br />
          wondering.
        </h2>

        <div className="faq-list">
          <details>
            <summary>Who does Dr. Maya Reynolds work with?</summary>
            <p>
              Maya offers therapy for adults, including high-achieving
              individuals, entrepreneurs, creatives, and professionals who
              may be experiencing anxiety, stress, trauma, burnout,
              perfectionism, or high internal pressure.
            </p>
          </details>

          <details>
            <summary>What issues can therapy address?</summary>
            <p>
              Her work often focuses on anxiety, panic, trauma, burnout,
              perfectionism, and the effects of earlier life experiences on
              relationships, confidence, and sense of safety.
            </p>
          </details>

          <details>
            <summary>What therapy methods does Maya use?</summary>
            <p>
              Maya integrates cognitive-behavioral therapy (CBT), EMDR,
              mindfulness-based practices, and body-oriented techniques.
            </p>
          </details>

          <details>
            <summary>Does Maya offer online therapy?</summary>
            <p>
              Yes. Maya offers secure telehealth sessions for clients located
              in California, as well as in-person therapy from her Santa
              Monica office.
            </p>
          </details>

          <details>
            <summary>What is Maya's approach to trauma therapy?</summary>
            <p>
              Trauma work is paced carefully with an emphasis on safety,
              stabilization, and helping clients feel more regulated in their
              daily lives.
            </p>
          </details>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="section-label">GET STARTED</div>

          <h2>
            Ready to create a more
            <br />
            sustainable way of <span>living?</span>
          </h2>

          <p>
            If you’re looking for a therapist who combines practical tools
            with depth-oriented work and understands the realities of living
            and working in a fast-paced environment, therapy can be a space to
            slow down, reconnect, and move forward.
          </p>

          <a href="/consultation" className="primary-button light-button">
            SCHEDULE A CONSULTATION
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">Maya Reynolds</div>

            <div className="footer-subtitle">
              PSYD • LICENSED CLINICAL PSYCHOLOGIST
            </div>

            <p>
              Therapy for adults navigating anxiety, trauma, burnout,
              perfectionism, and high internal pressure.
            </p>
          </div>

          <div className="footer-column">
            <h4>NAVIGATE</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#office">Office</a>
            <a href="#faqs">FAQs</a>
          </div>

          <div className="footer-column">
            <h4>THERAPY</h4>
            <a href="#services">Anxiety & Panic</a>
            <a href="#services">Trauma</a>
            <a href="#services">Burnout</a>
            <a href="#approach">CBT</a>
            <a href="#approach">EMDR</a>
          </div>

          <div className="footer-column">
            <h4>OFFICE</h4>

            <p>
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>

            <p>
              In-person therapy
              <br />
              Secure California telehealth
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Dr. Maya Reynolds, PsyD</span>
          <span>Licensed Clinical Psychologist</span>
          <span>Santa Monica, California</span>
        </div>
      </footer>
    </main>
  );
}