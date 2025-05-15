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
      question: "Can you source anything?",
      answer: "Yes — we act as your export broker and can source a wide range of goods, from vehicles and machinery to specialty items. Let us know what you're after and we’ll do the legwork."
    },
    {
      question: "How do I know I’m getting the best deal?",
      answer: "We work directly with verified suppliers and auction platforms, and always aim to secure competitive wholesale pricing. You'll receive clear breakdowns and photos before any commitment."
    },
    {
      question: "Do you offer shipping insurance?c",
      answer: "Yes, shipping insurance is available upon request. We can include this in your quote and provide policy documentation if needed."
    },
    {
      question: "Can you handle customs in my country?",
      answer: "We can help coordinate with agents in your country and provide the paperwork required for customs clearance. While we don’t directly control overseas customs, we ensure you’re prepared."
    },
    {
      question: "What’s in your tracking updates?",
      answer: "Tracking updates include real-time shipping status, estimated delivery timeframes, port details, and any relevant customs or transport updates."
    },
    {
      question: "Can I see your contract form or insurance certificate before committing?",
      answer: "Absolutely. Transparency is key — we're happy to share sample contracts, terms of service, and insurance certificates beforehand."
    },
    {
      question: "What payment methods do you support?",
      answer: "We accept bank transfers, international wire (SWIFT), and secure online payments depending on your country. We’ll confirm all options in your invoice."
    },
    {
      question: "What are your most popular exports?",
      answer: "Used 4x4 vehicles (like Toyota Land Cruisers and Hilux), heavy equipment, and auto parts are among our top exports — especially to African and Pacific regions."
    },
    {
      question: "Which countries do you export to?",
      answer: "We export globally, with strong relationships in Africa, Southeast Asia, and the Pacific Islands. If you're unsure, contact us to confirm."
    },
    {
        question: "Can you advise on compliance or legal docs?",
        answer: "Yes — we provide guidance on export documentation, legal compliance, import permits, and vehicle regulations specific to your country."
      },
      {
        question: "Do you offer inspections or photos before shipment?",
        answer: "Yes, we provide detailed photos, condition reports, and optional third-party inspections before anything is sent."
      },
      {
        question: "Is there a minimum or maximum order size?",
        answer: "There’s no strict minimum. We ship anything from a single car to full container loads depending on your needs."
      },
      {
        question: " Can I request specific brands or models?",
        answer: "Of course — let us know your specs and we’ll do our best to find exactly what you’re after."
      },
      {
        question: " How long does shipping take?",
        answer: "Shipping times vary by destination and product. We’ll give you an ETA before you place your order."
      },
      {
        question: "Can I pick up the goods myself?",
        answer: "Yes, if you prefer to arrange your own shipping or pick-up, we can coordinate that too."
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