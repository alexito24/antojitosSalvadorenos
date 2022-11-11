import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navigation from "./Navigation";

export function Map() {
  return (
    <>
      <div className="parent">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767.3644083689095!2d-105.03890187077872!3d39.70689699871589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80994d653fbf%3A0x9beeaedd57ee4431!2s3896%20Morrison%20Rd%2C%20Denver%2C%20CO%2080219!5e0!3m2!1sen!2sus!4v1668115547596!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
