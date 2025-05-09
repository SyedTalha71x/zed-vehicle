import { useEffect, useRef } from "react";
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

  const canvasRef = useRef(null);
  
  // Custom function to draw connecting lines between benefits
  useEffect(() => {
    const drawConnections = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = "#33AAB4";
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      
      // Get element positions
      const elements = Array.from(document.querySelectorAll('.benefit-element'));
      if (elements.length < 6) return;
      
      // Only draw on desktop
      if (window.innerWidth < 768) return;
      
      // Draw horizontal connections in top row
      drawHorizontalConnection(ctx, elements[0], elements[1]);
      drawHorizontalConnection(ctx, elements[1], elements[2]);
      
      // Draw vertical connection from top-right to bottom-right
      drawVerticalConnection(ctx, elements[2], elements[5]);
      
      // Draw horizontal connections in bottom row
      drawHorizontalConnection(ctx, elements[3], elements[4]);
      drawHorizontalConnection(ctx, elements[4], elements[5]);
    };
    
    const drawHorizontalConnection = (ctx, fromEl, toEl) => {
      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();
      const canvasRect = canvasRef.current.getBoundingClientRect();
      
      const startX = fromRect.right - canvasRect.left;
      const startY = fromRect.top + (fromRect.height / 2) - canvasRect.top;
      const endX = toRect.left - canvasRect.left;
      const endY = toRect.top + (toRect.height / 2) - canvasRect.top;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Draw arrow head
      drawArrowhead(ctx, endX, endY, 'left');
    };
    
    const drawVerticalConnection = (ctx, fromEl, toEl) => {
      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();
      const canvasRect = canvasRef.current.getBoundingClientRect();
      
      const startX = fromRect.left + (fromRect.width / 2) - canvasRect.left;
      const startY = fromRect.bottom - canvasRect.top;
      const endX = toRect.left + (toRect.width / 2) - canvasRect.left;
      const endY = toRect.top - canvasRect.top;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Draw arrow head
      drawArrowhead(ctx, endX, endY, 'top');
    };
    
    const drawArrowhead = (ctx, x, y, direction) => {
      const arrowLength = 8;
      const arrowThickness = 4;
      
      ctx.setLineDash([]);
      ctx.beginPath();
      
      if (direction === 'left') {
        ctx.moveTo(x, y);
        ctx.lineTo(x + arrowLength, y - arrowThickness);
        ctx.lineTo(x + arrowLength, y + arrowThickness);
        ctx.closePath();
      } else if (direction === 'top') {
        ctx.moveTo(x, y);
        ctx.lineTo(x - arrowThickness, y + arrowLength);
        ctx.lineTo(x + arrowThickness, y + arrowLength);
        ctx.closePath();
      }
      
      ctx.fillStyle = "#33AAB4";
      ctx.fill();
    };
    
    // Initial draw
    drawConnections();
    
    // Redraw on resize
    const handleResize = () => {
      drawConnections();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl plus-jakarta-sans mb-2">Quick Benefits</h2>
        <p className="text-gray-600 plus-jakarta-sans-400 max-w-3xl mx-auto">
          We deliver quality Equipments that exceed industry standards, tailored to your unique requirements.
        </p>
      </div>

      {/* Desktop version with custom connectors (hidden on mobile) */}
      <div className="hidden md:block plus-jakarta-sans-400 relative">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
        <div className="relative">
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between mb-20 md:mb-32 gap-8 md:gap-4">
            <div className="w-full md:w-1/3">
              <div className="benefit-element flex flex-col items-center md:items-start h-full">
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
            </div>

            <div className="w-full md:w-1/3">
              <div className="benefit-element flex flex-col items-center h-full">
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
            </div>

            <div className="w-full md:w-1/3">
              <div className="benefit-element flex flex-col items-center md:items-end h-full">
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
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            <div className="w-full md:w-1/3">
              <div className="benefit-element flex flex-col items-center md:items-start h-full">
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
            </div>

            <div className="w-full md:w-1/3">
              <div className="benefit-element flex flex-col items-center h-full">
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
            </div>

            <div className="w-full md:w-1/3">
              <div className="benefit-element flex flex-col items-center md:items-end h-full">
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
            </div>
          </div>
        </div>
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