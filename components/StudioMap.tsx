"use client";

import { AnimatedSection } from "./AnimatedSection";

export default function StudioMap() {
  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-16 tracking-wide">Visit Our Studio</h2>
        
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200">
          {/* Google Maps iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.2419522554064!2d78.14729607538771!3d11.6772575419316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1fc04f02ea7%3A0x31b98fe21e754bd6!2sFUSION%20DOT%20ARCHITECTS!5e0!3m2!1sen!2sin!4v1757009366392!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full relative z-10"
            title="Fusion Dot Architects Location"
            onLoad={() => {
              console.log('✅ Google Maps iframe loaded successfully');
              // Hide the loading message when iframe loads
              const loadingDiv = document.querySelector('.map-loading-fallback') as HTMLElement;
              if (loadingDiv) {
                loadingDiv.style.display = 'none';
              }
            }}
            onError={(e) => {
              console.error('❌ Google Maps iframe failed to load:', e);
              // Show alternative map or error message
              const loadingDiv = document.querySelector('.map-loading-fallback') as HTMLElement;
              if (loadingDiv) {
                loadingDiv.innerHTML = `
                  <div class="text-center">
                    <p class="text-lg mb-2 text-orange-600">Google Maps blocked by ad blocker</p>
                    <p class="text-sm mb-4">Please disable your ad blocker or use the alternative map below</p>
                    <a href="https://www.google.com/maps/place/FUSION+DOT+ARCHITECTS/@11.6772575,78.1472961,17z/data=!3m1!4b1!4m6!3m5!1s0x3babf1fc04f02ea7:0x31b98fe21e754bd6!8m2!3d11.6772575!4d78.149471!16s%2Fg%2F11q8q8q8q8" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      Open in Google Maps
                    </a>
                  </div>
                `;
              }
            }}
          />
          
          {/* Fallback content in case iframe fails */}
          <div className="map-loading-fallback absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-600 pointer-events-none z-0">
            <div className="text-center">
              <p className="text-lg mb-2">Loading map...</p>
              <p className="text-sm">If the map doesn't load, please refresh the page</p>
            </div>
          </div>
        </div>
        
        {/* Alternative map using OpenStreetMap (less likely to be blocked) */}
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4 text-center">Alternative Map View</h3>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-200">
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.14529607538771%2C11.6752575419316%2C78.14929607538771%2C11.6792575419316&layer=mapnik&marker=11.6772575,78.1472961"
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              className="w-full h-full"
              title="Fusion Dot Architects Location - OpenStreetMap"
              onLoad={() => {
                console.log('✅ OpenStreetMap iframe loaded successfully');
              }}
              onError={(e) => {
                console.error('❌ OpenStreetMap iframe failed to load:', e);
              }}
            />
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            If Google Maps is blocked, you can use this alternative map view
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}