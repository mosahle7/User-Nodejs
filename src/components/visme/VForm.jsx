import React, { useEffect } from 'react';

const VForm = () => {
  // useEffect(() => {
  //   const receiveMessage = (event) => {
  //     console.log('Received message:', event);
      
  //     if (event.origin !== 'https://forms.visme.co') {
  //       console.log('Message origin is not from Visme forms:', event.origin);  
  //     return;
  //     }

  //     const { type, data } = event.data;
  //     console.log('Received message data:', data);

  //     if (type === 'formData') {
  //       console.log('Received formData message:', data);
  //       // Extract data from the message and pass it to the parent component
  //       const { name, email, city, country } = data;
  //       console.log('Extracted form data:', { name, email, city, country });
  //       onFormSubmit({ name, email, city, country });
  //     }
  //   };

  //   window.addEventListener('message', receiveMessage);

  //   return () => {
  //     window.removeEventListener('message', receiveMessage);
  //   };
  // }, [onFormSubmit]);

  return (
    <div style={{ width: '100%', height: '100vh', background: '' }}>
      <iframe
        src="https://forms.visme.co/formsPlayer/ojerwqm1-client-contact-form"
        title="Embedded Content"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      />
    </div>
  );
};

export default VForm;
