const CarOverview = () => {
  const carDetails = [
    {
      label: "Body",
      value: "Sedan",
      icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    },
    {
      label: "Mileage",
      value: "20",
      icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
    },
    {
      label: "Fuel Type",
      value: "Petrol",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    },
    {
      label: "Year",
      value: "2023",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    { 
      label: "Transmission", 
      value: "Automatic", 
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
    },
    {
      label: "Drive Type",
      value: "All-Wheel Drive (AWD/4WD)",
      icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z",
    },
  ];

  const carSpecs = [
    { 
      label: "Condition", 
      value: "New", 
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
    },
    { 
      label: "Engine Size", 
      value: "3.5", 
      icon: "M13 10V3L4 14h7v7l9-11h-7z" 
    },
    {
      label: "Door",
      value: "4 Doors",
      icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
    },
    {
      label: "Cylinder",
      value: "12",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      label: "Color",
      value: "Black",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    },
    {
      label: "VIN",
      value: "MCB123818",
      icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
    },
  ];

  // Combine all items for the grid layout
  const allItems = [...carDetails, ...carSpecs];

  return (
    <div className="font-sans p-4">
      <h3 className="text-lg font-medium mb-4">Car Overview</h3>

      {/* Mobile: Horizontal scroll */}
      <div className="md:hidden overflow-x-auto pb-2 -mx-4 px-4">
        <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
          {allItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center" style={{ minWidth: '100px' }}>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <span className="text-xs text-gray-500 text-center">{item.label}</span>
              <span className="text-sm font-medium text-center">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 2-column grid */}
      <div className="hidden md:grid grid-cols-2 gap-y-4">
        <div className="space-y-4">
          {allItems.slice(0, 6).map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <span className="text-sm text-gray-500 w-24">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {allItems.slice(6).map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <span className="text-sm text-gray-500 w-24">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 w-full">
        <button className="rounded-full py-2 w-full text-sm bg-red-500 text-white font-medium">
          See Cart
        </button>
      </div>
    </div>
  );
};

export default CarOverview;