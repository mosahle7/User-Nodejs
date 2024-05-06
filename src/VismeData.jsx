import React, { useEffect, useRef } from 'react';

const MyComponent = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Access form data after iframe content is loaded
    const extractFormData = () => {
      if (iframeRef.current) {
        // Access const Bootstrap from iframe content
        const { formData } = iframeRef.current.contentWindow.bootstrap;

        // Parse the JSON data stored in the formData property
        const formDataObject = JSON.parse(formData);

        // Access the values of the form fields
        const firstName = formDataObject.fields.find(field => field.name === 'firsta').value;
        const email = formDataObject.fields.find(field => field.name === 'seconda').value;
        const city = formDataObject.fields.find(field => field.name === 'thirda').value;
        const country = formDataObject.fields.find(field => field.name === 'fourtha').value;

        // Now you have the values of the form fields in variables firstName, email, city, and country
        console.log('Name:', firstName);
        console.log('Email:', email);
        console.log('City:', city);
        console.log('Country:', country);
      }
    };

    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', extractFormData);
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', extractFormData);
      }
    };
  }, []);

  return (
    <div>
      {/* Render the HTML file within an iframe */}
      <iframe title="MyForm" src="/visme.html" ref={iframeRef} />
    </div>
  );
};

export default MyComponent;
