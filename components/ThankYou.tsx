import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const ThankYou: React.FC = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    if (document.querySelector('script[src*="MeetingsEmbedCode.js"]')) {
      return;
    }

    // Create and load the HubSpot Meetings Embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    
    script.onerror = () => {
      console.error('Failed to load HubSpot Meetings Embed script');
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      const existingScript = document.querySelector('script[src*="MeetingsEmbedCode.js"]');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-digica-red selection:text-white">
      <Header />
      <main className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-digica-dark mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              We've received your submission.
            </p>
            <p className="text-lg text-gray-500">
              Schedule your Manufacturing AI Strategy Session below
            </p>
          </div>
          
          {/* HubSpot Meetings Embed Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div 
              className="meetings-iframe-container" 
              data-src="https://meetings.hubspot.com/ben952/manufacturing-ai-strategy-session?embed=true"
            ></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

