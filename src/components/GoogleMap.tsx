'use client';
import React, { useEffect } from 'react';

const containerStyle = {
    width: '100%',
    minHeight: '200px',
    border: 'none',
};

export function MyGoogleMap() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6966063441046!2d106.66688697576852!3d10.834513958118183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a9e2f44f91%3A0xda5b1c94703a6cbc!2zMzYgxJDGsOG7nW5nIHPhu5EgMiwgS0RDIENpdHlsYW5kIFBhcmsgSGlsbHMsIEfDsiBW4bqlcCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1733134115368!5m2!1sen!2s"
            style={containerStyle}
            loading="lazy"
            title="google-map"
        ></iframe>
    );
}

export default MyGoogleMap;
