import React, { useEffect } from "react";

const CalendlyEmbed = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Calendly inline widget
    // @ts-ignore
    script.onload = () => {
      // @ts-ignore
      if (window.Calendly) {
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/geepytechnologies/30min", // Replace with your Calendly link
        });
      }
    };

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="calendly-inline-widget" data-auto-load="false"></div>;
};

export default CalendlyEmbed;
