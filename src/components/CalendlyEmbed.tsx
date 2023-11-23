import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const CalendlyEmbed = () => {
  useEffect(() => {
    // Calendly script has to be loaded after the component mounts
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the Calendly script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Embed Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/circumvent/30min?text_color=0b0b0b"
        style={{ minWidth: "320px", height: "1000px" }}
      />

      {/* Helmet to inject script into the head */}
      <Helmet>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </Helmet>
    </div>
  );
};

export default CalendlyEmbed;
