
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f)', 
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/80"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E2E8F0] leading-tight mb-6">
          AI-Powered Conversion Insights for Shopify
        </h1>
        <p className="text-xl md:text-2xl text-[#E2E8F0] mb-10 leading-relaxed max-w-3xl mx-auto">
          Get instant, expert feedback on your PDP without a CRO agency.
        </p>
      </div>
    </div>
  );
};

export default Hero;
