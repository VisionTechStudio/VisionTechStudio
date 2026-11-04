import { useEffect, useRef, useState } from 'react'
import './HomeContact.css'

const CONTACT_FORM_ENDPOINT =
  'https://socialmbt.com/wp-json/contact-form-7/v1/contact-forms/6/feedback'

const SERVICES = [
  'Social Media Strategy',
  'Social Media Management',
  'Social Media Advertising',
  'Content Development',
  'Reporting & Analytics',
  'Consulting',
  'All of the Above',
]

const CONTACT_DETAILS = [
  {
    number: '01',
    label: 'WORK AND GENERAL INQUIRIES',
    value: '+44 20 7946 0123',
    href: 'tel:+442079460123',
    icon: 'phone',
  },
  {
    number: '02',
    label: 'POST ADDRESS',
    value: '42 Berkeley Square, Mayfair, London W1J 5AW, United Kingdom',
    href: 'https://www.google.com/maps/search/?api=1&query=42+Berkeley+Square+Mayfair+London+W1J+5AW',
    icon: 'location',
  },
]

function ContactIcon({ type }) {
  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.1 3.8 9.4 7.5 7.8 9.2c1.1 2.3 2.9 4.1 5.2 5.2l1.7-1.6 3.7 2.3-.6 3.1c-.1.6-.7 1-1.3 1C9 18.5 5.5 15 4.8 7.5c-.1-.6.4-1.2 1-1.3l1.3-2.4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-7-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HomeContact() {
  const sectionRef = useRef(null)

  const [selectedServices, setSelectedServices] = useState([])
  const [status, setStatus] = useState('idle')
  const [responseMessage, setResponseMessage] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const elements = section.querySelectorAll('[data-contact-reveal]')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('contact-is-visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact-is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const toggleService = (service) => {
    setSelectedServices((current) => {
      if (current.includes(service)) {
        return current.filter((item) => item !== service)
      }

      if (service === 'All of the Above') {
        return ['All of the Above']
      }

      return [
        ...current.filter((item) => item !== 'All of the Above'),
        service,
      ]
    })

    setErrors((current) => ({
      ...current,
      services: '',
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (status === 'submitting') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const nextErrors = {}

    if (selectedServices.length === 0) {
      nextErrors.services = 'Please select at least one service.'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('invalid')
      setResponseMessage('Please select a service before submitting.')
      return
    }

    setErrors({})
    setResponseMessage('')
    setStatus('submitting')

    formData.set('_wpcf7', '6')
    formData.set('_wpcf7_version', '6.2.3')
    formData.set('_wpcf7_locale', 'en_US')
    formData.set('_wpcf7_unit_tag', 'wpcf7-f6-p15-o1')
    formData.set('_wpcf7_container_post', '15')
    formData.set('_wpcf7_posted_data_hash', '')

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json, */*;q=0.1',
        },
        body: formData,
      })

      const result = await response.json()

      if (!response.ok || !result.status) {
        throw new Error(
          result.message || 'The contact form request failed.',
        )
      }

      const statusMap = {
        mail_sent: 'success',
        mail_failed: 'failed',
        validation_failed: 'invalid',
        acceptance_missing: 'invalid',
        spam: 'failed',
        aborted: 'failed',
        payment_required: 'failed',
      }

      const nextStatus = statusMap[result.status] || 'failed'

      setStatus(nextStatus)
      setResponseMessage(
        result.message ||
          (nextStatus === 'success'
            ? 'Thank you! Your message has been sent.'
            : 'We could not submit your message. Please try again.'),
      )

      if (Array.isArray(result.invalid_fields)) {
        const fieldErrors = {}

        result.invalid_fields.forEach((field) => {
          const name = String(field.field || '').replace(/\[\]$/, '')
          if (name) {
            fieldErrors[name] = field.message || 'Please check this field.'
          }
        })

        setErrors(fieldErrors)
      }

      if (result.status === 'mail_sent') {
        form.reset()
        setSelectedServices([])
        setErrors({})
      }
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus('failed')
      setResponseMessage(
        'We could not submit your message. Please check your connection and try again.',
      )
    }
  }

  const clearFieldError = (fieldName) => {
    setErrors((current) => ({
      ...current,
      [fieldName]: '',
    }))

    if (status === 'invalid') {
      setStatus('idle')
      setResponseMessage('')
    }
  }

  return (
    <section
      className="vt-contact"
      id="Contact"
      ref={sectionRef}
    >
      <div className="vt-contact__container">
        <div className="vt-contact__top">
          <div className="vt-contact__intro" data-contact-reveal>
            <div className="vt-contact__eyebrow">
              <span className="vt-contact__eyebrow-line" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="vt-contact__main-heading">
              Why settle for average when your brand can{' '}
              <span>lead on social media?</span>
            </h2>

            <p className="vt-contact__description">
              Have a project in mind? Let's talk about your goals,
              explore the possibilities, and build a strategy that
              helps your brand move forward.
            </p>

            <div className="vt-contact__details">
              {CONTACT_DETAILS.map((detail) => (
                <article
                  className="vt-contact-detail"
                  key={detail.number}
                >
                  <div className="vt-contact-detail__icon">
                    <ContactIcon type={detail.icon} />
                  </div>

                  <div className="vt-contact-detail__content">
                    <span className="vt-contact-detail__label">
                      {detail.label}
                    </span>

                    <a
                      href={detail.href}
                      target={
                        detail.icon === 'location' ? '_blank' : undefined
                      }
                      rel={
                        detail.icon === 'location'
                          ? 'noreferrer'
                          : undefined
                      }
                    >
                      {detail.value}
                    </a>
                  </div>

                  <span className="vt-contact-detail__number">
                    {detail.number}
                  </span>
                </article>
              ))}
            </div>

            <div className="vt-contact__side-note">
              <span className="vt-contact__side-note-dot" />
              <p>Let's turn your next idea into something meaningful.</p>
            </div>
          </div>

          <div
            className="vt-contact__form-panel"
            data-contact-reveal
          >
            <div className="vt-contact__form-heading">
              <div>
                <span className="vt-contact__form-kicker">
                  START A CONVERSATION
                </span>
                <h3>Have a project in mind?</h3>
                <p>
                  Tell us a little about yourself and what you
                  would like to achieve.
                </p>
              </div>

              <div className="vt-contact__form-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <path
                    d="M8 24h32M24 8v32"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

            <form
              className="vt-contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-busy={status === 'submitting'}
            >
              <div className="vt-contact-form__grid">
                <div className="vt-contact-field">
                  <label htmlFor="contact-name">
                    Your name <span>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="your-name"
                    placeholder="Enter your name"
                    maxLength={400}
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors['your-name'])}
                    onChange={() => clearFieldError('your-name')}
                  />
                  {errors['your-name'] && (
                    <span className="vt-contact-field__error">
                      {errors['your-name']}
                    </span>
                  )}
                </div>

                <div className="vt-contact-field">
                  <label htmlFor="contact-email">
                    Email address <span>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="your-email"
                    placeholder="Enter your email"
                    maxLength={400}
                    autoComplete="email"
                    required
                    aria-invalid={Boolean(errors['your-email'])}
                    onChange={() => clearFieldError('your-email')}
                  />
                  {errors['your-email'] && (
                    <span className="vt-contact-field__error">
                      {errors['your-email']}
                    </span>
                  )}
                </div>

                <div className="vt-contact-field">
                  <label htmlFor="contact-location">
                    Your location <span>*</span>
                  </label>
                  <input
                    id="contact-location"
                    type="text"
                    name="your-location"
                    placeholder="City, Country"
                    maxLength={400}
                    autoComplete="country-name"
                    required
                    aria-invalid={Boolean(errors['your-location'])}
                    onChange={() => clearFieldError('your-location')}
                  />
                  {errors['your-location'] && (
                    <span className="vt-contact-field__error">
                      {errors['your-location']}
                    </span>
                  )}
                </div>

                <div className="vt-contact-field">
                  <label htmlFor="contact-company">
                    Company name
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company-name"
                    placeholder="Your company (optional)"
                    maxLength={400}
                    autoComplete="organization"
                    aria-invalid={Boolean(errors['company-name'])}
                    onChange={() => clearFieldError('company-name')}
                  />
                  {errors['company-name'] && (
                    <span className="vt-contact-field__error">
                      {errors['company-name']}
                    </span>
                  )}
                </div>
              </div>

              <div className="vt-contact-services">
                <div className="vt-contact-services__heading">
                  <label>
                    WHAT DO YOU WANT OUR HELP WITH?
                    <span> *</span>
                  </label>
                  <small>Select all that apply</small>
                </div>

                <div className="vt-contact-services__options">
                  {SERVICES.map((service) => {
                    const isSelected = selectedServices.includes(service)

                    return (
                      <label
                        className={`vt-contact-service-option ${
                          isSelected ? 'is-selected' : ''
                        }`}
                        key={service}
                      >
                        <input
                          type="checkbox"
                          name="services[]"
                          value={service}
                          checked={isSelected}
                          onChange={() => toggleService(service)}
                        />

                        <span className="vt-contact-service-option__check">
                          <svg viewBox="0 0 16 16" fill="none">
                            <path
                              d="m3 8 3.2 3.2L13 4.5"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        <span>{service}</span>
                      </label>
                    )
                  })}
                </div>

                {errors.services && (
                  <span className="vt-contact-field__error">
                    {errors.services}
                  </span>
                )}
              </div>

              <div className="vt-contact-field vt-contact-field--message">
                <label htmlFor="contact-message">
                  Tell us about your project
                </label>
                <textarea
                  id="contact-message"
                  name="your-message"
                  rows="4"
                  maxLength={2000}
                  placeholder="Share your ideas, goals, or any details that can help us understand your project..."
                  aria-invalid={Boolean(errors['your-message'])}
                  onChange={() => clearFieldError('your-message')}
                />
                {errors['your-message'] && (
                  <span className="vt-contact-field__error">
                    {errors['your-message']}
                  </span>
                )}
              </div>

              <div className="vt-contact-form__bottom">
                <p className="vt-contact-form__privacy">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M5 8V6a5 5 0 0 1 10 0v2m-11 0h12v9H4V8Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Your information stays private.
                </p>

                <button
                  type="submit"
                  className="vt-contact-form__submit"
                  disabled={status === 'submitting'}
                >
                  <span>
                    {status === 'submitting'
                      ? 'SENDING...'
                      : "LET'S TALK"}
                  </span>

                  <span className="vt-contact-form__submit-icon">
                    {status === 'submitting' ? (
                      <span className="vt-contact-spinner" />
                    ) : (
                      <ArrowIcon />
                    )}
                  </span>
                </button>
              </div>

              {responseMessage && (
                <div
                  className={`vt-contact-form__response is-${status}`}
                  role="status"
                  aria-live="polite"
                >
                  <span className="vt-contact-form__response-icon">
                    {status === 'success' ? '✓' : '!'}
                  </span>
                  <p>{responseMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="vt-contact__bottom" data-contact-reveal>
          <span className="vt-contact__bottom-line" />
          <p>
            GOOD THINGS START WITH A CONVERSATION.
          </p>
          <span className="vt-contact__bottom-line" />
        </div>
      </div>
    </section>
  )
}

export default HomeContact