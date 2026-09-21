"use client";

import React from "react";

export default function ConsultationPage() {
  return (
    <main className="consultation-page">
      <section className="consultation-hero">
        <div className="consultation-content">
          <div className="section-label">SCHEDULE A CONSULTATION</div>

          <h1>
            Let’s begin your
            <br />
            <span>therapy journey.</span>
          </h1>

          <p>
            Taking the first step toward therapy can feel significant. This
            consultation is an opportunity to connect, ask questions, and
            explore whether working together feels like the right fit.
          </p>

          <form className="consultation-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">HOW CAN I HELP?</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me a little about what brings you to therapy..."
                required
              />
            </div>

            <button type="submit" className="consultation-button">
              REQUEST A CONSULTATION
            </button>
          </form>

          <a href="/" className="back-home">
            ← BACK TO MAYA REYNOLDS
          </a>
        </div>
      </section>
    </main>
  );
}