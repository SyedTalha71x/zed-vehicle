import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import FAQS from '../../public/Frame 427320605.png';

function App() {
  const [openItem, setOpenItem] = useState(0);
  const answerRefs = useRef([]);

  useEffect(() => {
    answerRefs.current = answerRefs.current.slice(0, faqItems.length);
  }, []);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref && index !== openItem) {
        gsap.to(ref, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            if (ref) {
              ref.style.display = 'none';
            }
          }
        });
      }
    });

    // Then open the selected one if there is one
    if (openItem !== null && answerRefs.current[openItem]) {
      const ref = answerRefs.current[openItem];
      ref.style.display = 'block';
      ref.style.height = 'auto';
      const height = ref.offsetHeight;
      ref.style.height = '0px';
      ref.style.opacity = 0;
      
      gsap.to(ref, {
        height: height,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [openItem]);

  const faqItems = [
    {
      question: "Can you source anything",
      answer: "You can browse our inventory, select a vehicle, and request a quote. Once you confirm, our team will guide you through the ordering process."
    },
    {
      question: "How do I know I’m getting the best deal?",
      answer: "Yes, we offer comprehensive shipping insurance to protect your items during transit."
    },
    {
      question: "Do you offer shipping insurance?",
      answer: "We have expertise in handling customs procedures for most countries around the world."
    },
    {
      question: "Can you handle customs in my country?",
      answer: "We provide real-time tracking information for all shipments through our online portal."
    },
    {
      question: "What’s in your tracking updates?",
      answer: "Yes, all our documentation is suitable for tax accounting purposes."
    },
    {
      question: "Can I see your contract form or insurance certificate before committing?",
      answer: "We accept credit cards, PayPal, bank transfers, and various other payment methods."
    },
    {
      question: "What payment methods do you support?",
      answer: "Our most popular services include international shipping, customs clearance, and insurance coverage."
    },
    {
      question: "What are your most popular exports?",
      answer: "We export to over 200 countries and territories worldwide."
    },
    {
      question: "Which countries do you export to?",
      answer: "Yes, our team can provide guidance on compliance requirements and necessary legal documentation."
    },
    {
        question: "Can you advise on compliance or legal docs?",
        answer: "Yes, our team can provide guidance on compliance requirements and necessary legal documentation."
      }
  ];

  const setAnswerRef = (el, index) => {
    answerRefs.current[index] = el;
  };

  return (
    <div className="px-4 py-8">
      <div className='lg:w-[90%] w-full mx-auto'>
        <div className='flex ml-6 text-blue-600 plus-jakarta-sans-400 justify-start items-center gap-2 mb-4'>
          <div>Home</div>
          <div>/ FAQS</div>
        </div>

        <div className="mb-8">
          <img 
            src={FAQS}
            alt="Customer service team" 
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className='max-w-3xl w-full mx-auto'>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-8">General</h2>
          
          <div className="divide-y divide-gray-200 plus-jakarta-sans-400">
            {faqItems.map((item, index) => (
              <div key={index} className="py-3">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{index + 1}. {item.question}</span>
                  <span className="ml-6 flex-shrink-0 transition-transform duration-300" 
                    style={{ transform: openItem === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
               <div 
                  id={`faq-answer-${index}`}
                  ref={(el) => setAnswerRef(el, index)} 
                  className="overflow-hidden"
                  style={{
                    height: index === 0 && openItem === 0 ? 'auto' : 0,
                    opacity: index === 0 && openItem === 0 ? 1 : 0,
                    display: index === 0 && openItem === 0 ? 'block' : 'none'
                  }}
                >
                  <div className="mt-2 pr-12 pb-2">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;