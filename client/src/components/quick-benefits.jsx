import { ArcherContainer, ArcherElement } from "react-archer";
import PreLoader from '../../public/about-images/preloader 1.svg';

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

  return (
    <div className="w-full py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl plus-jakarta-sans mb-2">Quick Benefits</h2>
        <p className="text-gray-600 plus-jakarta-sans-400 max-w-3xl mx-auto">
          We deliver quality Equipments that exceed industry standards, tailored to your unique requirements.
        </p>
      </div>

      {/* Desktop version with Archer connectors (hidden on mobile) */}
      <div className="hidden md:block plus-jakarta-sans-400">
        <ArcherContainer strokeColor="#33AAB4" strokeWidth={2} strokeDasharray="5,5" arrowLength={8} arrowThickness={4}>
          <div className="relative">
            {/* Top row */}
            <div className="flex flex-col md:flex-row justify-between mb-20 md:mb-32 gap-8 md:gap-4">
              <div className="w-full md:w-1/3">
                <ArcherElement
                  id="element1"
                  relations={[
                    {
                      targetId: "element2",
                      targetAnchor: "left",
                      sourceAnchor: "right",
                      style: { strokeDasharray: "5,5" },
                      sourceOffset: { x: 80, y: 0 },  // Extends the arrow from source
                      targetOffset: { x: 80, y: 0 },  // Extends the arrow to target
                      label: <div className="archer-label"></div>,
                    },
                  ]}
                >
                  <div className="flex flex-col items-center md:items-start h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative bg-[#F8F5F1] p-3 rounded-md shadow-2xl">
                        <img
                          src={PreLoader}
                          alt="Benefit icon"
                          className="w-10 h-10 object-contain"
                        />
                        <div className="absolute top-3.5 -right-9 bg-[#33AAB4] text-white text-xs p-2 border-2 border-blue-300">
                          {benefits[0].id}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center md:text-left">{benefits[0].title}</h3>
                    <p className="text-sm text-gray-600 text-center md:text-left">{benefits[0].description}</p>
                  </div>
                </ArcherElement>
              </div>

              <div className="w-full md:w-1/3">
                <ArcherElement
                  id="element2"
                  relations={[
                    {
                      targetId: "element3",
                      targetAnchor: "left",
                      sourceAnchor: "right",
                      style: { strokeDasharray: "5,5" },
                      label: <div className="archer-label"></div>,
                    },
                  ]}
                >
                  <div className="flex flex-col items-center h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative bg-[#F8F5F1] p-3 rounded-md shadow-2xl">
                        <img
                          src={PreLoader}
                          alt="Benefit icon"
                          className="w-10 h-10 object-contain"
                        />
                        <div className="absolute top-3.5 -right-9 bg-[#33AAB4] text-white text-xs p-2 border-2 border-blue-300">
                          {benefits[1].id}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">{benefits[1].title}</h3>
                    <p className="text-sm text-gray-600 text-center">{benefits[1].description}</p>
                  </div>
                </ArcherElement>
              </div>

              <div className="w-full md:w-1/3">
                <ArcherElement
                  id="element3"
                  relations={[
                    {
                      targetId: "element6",
                      targetAnchor: "top",
                      sourceAnchor: "bottom",
                      style: { strokeDasharray: "5,5" },
                      label: <div className="archer-label"></div>,
                    },
                  ]}
                >
                  <div className="flex flex-col items-center md:items-end h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative bg-[#F8F5F1] p-3 rounded-md shadow-2xl">
                        <img
                          src={PreLoader}
                          alt="Benefit icon"
                          className="w-10 h-10 object-contain"
                        />
                        <div className="absolute top-3.5 -right-9 bg-[#33AAB4] text-white text-xs p-2 border-2 border-blue-300">
                          {benefits[2].id}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center md:text-right">{benefits[2].title}</h3>
                    <p className="text-sm text-gray-600 text-center md:text-right">{benefits[2].description}</p>
                  </div>
                </ArcherElement>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
              <div className="w-full md:w-1/3">
                <ArcherElement
                  id="element4"
                  relations={[
                    {
                      targetId: "element5",
                      targetAnchor: "left",
                      sourceAnchor: "right",
                      style: { strokeDasharray: "5,5" },
                      label: <div className="archer-label"></div>,
                    },
                  ]}
                >
                  <div className="flex flex-col items-center md:items-start h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative bg-[#F8F5F1] p-3 rounded-md shadow-2xl">
                        <img
                          src={PreLoader}
                          alt="Benefit icon"
                          className="w-10 h-10 object-contain"
                        />
                        <div className="absolute top-3.5 -right-9 bg-[#33AAB4] text-white text-xs p-2 border-2 border-blue-300">
                          {benefits[5].id}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center md:text-left">{benefits[5].title}</h3>
                    <p className="text-sm text-gray-600 text-center md:text-left">{benefits[5].description}</p>
                  </div>
                </ArcherElement>
              </div>

              <div className="w-full md:w-1/3">
                <ArcherElement
                  id="element5"
                  relations={[
                    {
                      targetId: "element6",
                      targetAnchor: "left",
                      sourceAnchor: "right",
                      style: { strokeDasharray: "5,5" },
                      label: <div className="archer-label"></div>,
                    },
                  ]}
                >
                  <div className="flex flex-col items-center h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative bg-[#F8F5F1] p-3 rounded-md shadow-2xl">
                        <img
                          src={PreLoader}
                          alt="Benefit icon"
                          className="w-10 h-10 object-contain"
                        />
                        <div className="absolute top-3.5 -right-9 bg-[#33AAB4] text-white text-xs p-2 border-2 border-blue-300">
                          {benefits[4].id}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">{benefits[4].title}</h3>
                    <p className="text-sm text-gray-600 text-center">{benefits[4].description}</p>
                  </div>
                </ArcherElement>
              </div>

              <div className="w-full md:w-1/3">
                <ArcherElement id="element6">
                  <div className="flex flex-col items-center md:items-end h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative bg-[#F8F5F1] p-3 rounded-md shadow-2xl">
                        <img
                          src={PreLoader}
                          alt="Benefit icon"
                          className="w-10 h-10 object-contain"
                        />
                        <div className="absolute top-3.5 -right-9 bg-[#33AAB4] text-white text-xs p-2 border-2 border-blue-300">
                          {benefits[3].id}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center md:text-right">{benefits[3].title}</h3>
                    <p className="text-sm text-gray-600 text-center md:text-right">{benefits[3].description}</p>
                  </div>
                </ArcherElement>
              </div>
            </div>
          </div>
        </ArcherContainer>
      </div>

      {/* Mobile version (shown only on mobile) */}
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