import { useRef } from "react";
import PreLoader from '../../public/about-images/preloader 1.svg';
import QuickBenefitsImg from '../../public/about-images/2025-05-10_14-20.png'

const QuickBenefits = () => {
  const benefits = [
    {
      id: "01",
      title: "Save Money",
      description: "Best Supplier Prices Negotiated Our Services > Sourcing & Procurement",
    },
    {
      id: "02",
      title: "Custom Service",
      description: "We Do What You Want",
    },
    {
      id: "03",
      title: "Real-Time Photo, Document, And ETA Tracking",
      description: "",
    },
    {
      id: "04",
      title: "Secure Payments",
      description: "",
    },
    {
      id: "05",
      title: "Fast, Transparent Communication",
      description: "",
    },
    {
      id: "06",
      title: "Total Logistics & Customs",
      description: "We Do What You Want",
    },
  ];

  const imageRef = useRef(null);

  return (
    <div className="w-full mt-10 py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl plus-jakarta-sans mb-2">Quick Benefits</h2>
        <p className="text-gray-600 plus-jakarta-sans-400 max-w-3xl mx-auto">
          We deliver quality Equipments that exceed industry standards, tailored to your unique requirements.
        </p>
      </div>

      <div className="hidden md:block mt-7">
        <div>

        <img 
          ref={imageRef}
          src={QuickBenefitsImg} 
          alt="Company Benefits with Save Money, Custom Service, Real-Time Tracking, Secure Payments, Fast Communication, and Total Logistics"
          className=" h-auto object-contain mx-auto select-none pointer-events-none "
          draggable="false"
          />
          </div>
      </div>

      <div className="md:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <div className="relative bg-[#F8F5F1] p-3 rounded-md shadow-2xl">
                  <img
                    src={PreLoader}
                    alt="Benefit icon"
                    className="w-10 h-10 object-contain"
                  />
                  <div className="absolute top-3.5 -right-9 bg-[#33AAB4] text-white text-xs p-2 border-2 border-blue-300">
                    {benefit.id}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">{benefit.title}</h3>
              <p className="text-sm text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickBenefits;