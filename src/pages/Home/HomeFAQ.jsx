
import { useState } from 'react'
import './HomeFAQ.css'

const categories = [
  'General',
  'Payments',
  'Features',
  'Security',
]

const faqItems = [
  {
    question: 'How often do you need to repair your roof?',
    answer:
      'Most roofs need minor repairs every 5–10 years and major repairs every 15–20 years. We recommend a yearly inspection, plus an extra check after heavy storms, so small issues get caught early.',
  },
  {
    question: 'Do you offer a next day delivery service?',
    answer:
      'Yes, next-day delivery may be available depending on your location and the service you choose. Please contact our team to confirm availability for your area.',
  },
  {
    question: 'What is the standard delivery time?',
    answer:
      'Standard delivery times depend on your location and the type of service requested. Our team can provide an estimated delivery schedule when you place your order.',
  },
  {
    question: 'How can I access emergency services?',
    answer:
      'You can contact our support team directly to request emergency assistance. Our team will guide you through the next steps and help arrange the required service.',
  },
  {
    question: 'Do you offer an installation service?',
    answer:
      'Yes, installation assistance can be arranged for eligible services. Contact our team to discuss your requirements and confirm the available installation options.',
  },
]

function FAQ() {
  const [hoverIndex, setHoverIndex] = useState(null)

  return (
    <section className="home-faq">
      <div className="home-faq__container">
        <div className="home-faq__section-content">
          <h2 className="home-faq__heading">
            Frequently Asked Question
          </h2>

          <p className="home-faq__subtitle">
            Frequently asked questions about GrowthLab services
          </p>
        </div>

        <div className="home-faq__content">
          <div className="home-faq__category-list">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`home-faq__category ${
                  index === 0 ? 'home-faq__category--active' : ''
                }`}
                aria-current={index === 0 ? 'true' : undefined}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="home-faq__accordion">
            {faqItems.map((item, index) => {
              const isOpen = hoverIndex === index

              return (
                <article
                  key={item.question}
                  className={`home-faq__item ${
                    isOpen ? 'home-faq__item--open' : ''
                  }`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <button
                    type="button"
                    className="home-faq__question-button"
                    aria-expanded={isOpen}
                  >
                    <span className="home-faq__question">
                      {item.question}
                    </span>

                    <span className="home-faq__icon-wrap">
                      <span
                        className={`home-faq__icon ${
                          isOpen ? 'home-faq__icon--open' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="home-faq__answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
