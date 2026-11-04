
import { useState } from 'react'
import './HomeFAQ.css'

const faqs = [
  {
    category: 'General',
    question: 'What is VisionTechStudio and who do you work with?',
    answer:
      'We’re a premium digital marketing studio specializing in service-based businesses. We take on a limited number of clients to provide in-house-level attention and deliver exceptional results.',
  },
  {
    category: 'General',
    question: 'How does VisionTechStudio differ from other agencies?',
    answer:
      'Most agencies try to serve everyone and deliver average results. We work with a limited number of clients, embedding deeply into your brand so it feels like an in-house team, without the overhead.',
  },
  {
    category: 'Services',
    question: 'Do you handle both organic social media and paid advertising?',
    answer:
      'Yes. Our approach integrates organic content, paid social campaigns, and creative content to drive engagement, authority, and measurable results.',
  },
  {
    category: 'Services',
    question: 'Can VisionTechStudio manage all my social media platforms?',
    answer:
      'Absolutely. We handle everything from strategy and content creation to community management and ad campaigns across Instagram, Facebook, TikTok, LinkedIn, and more.',
  },
  {
    category: 'Process',
    question: 'Do you offer custom strategies for each client?',
    answer:
      'Every client gets a tailored strategy based on audience research, market positioning, and your business goals — built during our discovery phase before any work begins.',
  },
  {
    category: 'Pricing',
    question: 'Will VisionTechStudio help my business generate leads and revenue?',
    answer:
      'Yes. Our campaigns are designed to turn attention into real business outcomes, from generating leads to increasing sales and building long-term brand authority.',
  },
]

const categories = ['General', 'Services', 'Process', 'Pricing']

function PlusIcon({ open }) {
  return (
    <span className={`faq-plus ${open ? 'is-open' : ''}`} aria-hidden="true">
      <span />
      <span />
    </span>
  )
}

function HomeFAQ() {
  const [activeCategory, setActiveCategory] = useState('General')
  const [openIndex, setOpenIndex] = useState(0)

  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory)

  return (
    <section className="home-faq" id="FAQ">
      <div className="home-faq__container">

        <div className="home-faq__heading">
          <h2>Frequently Asked Questions</h2>
          <p>Frequently asked questions about VisionTechStudio services.</p>
        </div>

        <div className="home-faq__tabs">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`home-faq__tab ${
                activeCategory === category ? 'is-active' : ''
              }`}
              onClick={() => {
                setActiveCategory(category)
                setOpenIndex(0)
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="home-faq__list">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `home-faq-panel-${activeCategory}-${index}`

            return (
              <article
                className={`home-faq__item ${isOpen ? 'is-active' : ''}`}
                key={faq.question}
              >
                <h3 className="home-faq__question-heading">
                  <button
                    type="button"
                    className="home-faq__question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <PlusIcon open={isOpen} />
                  </button>
                </h3>

                <div
                  className="home-faq__answer-wrapper"
                  id={panelId}
                  aria-hidden={!isOpen}
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="home-faq__answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default HomeFAQ
