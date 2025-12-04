import React from 'react';
import CookieConsent from 'react-cookie-consent';

export const CookieBar: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="digicaCookieConsent"
      style={{ 
        background: "#1A1A1A",
        padding: "15px 20px",
        fontSize: "14px",
        color: "#fff"
      }}
      buttonStyle={{ 
        background: "#D93C2C", 
        color: "#fff", 
        fontSize: "14px",
        padding: "10px 20px",
        borderRadius: "4px",
        fontWeight: "500",
        cursor: "pointer"
      }}
      declineButtonStyle={{ 
        background: "#666", 
        color: "#fff", 
        fontSize: "14px",
        padding: "10px 20px",
        borderRadius: "4px",
        fontWeight: "500",
        cursor: "pointer"
      }}
      expires={365}
      onAccept={() => {
        // Optional: Add tracking or analytics here
      }}
      onDecline={() => {
        // Optional: Handle decline action
      }}
    >
      This website uses cookies to enhance the user experience.{" "}
      <a 
        href="https://www.digica.com/privacy-and-cookie-policy.html" 
        style={{ color: "#D93C2C", textDecoration: "underline" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    </CookieConsent>
  );
};

