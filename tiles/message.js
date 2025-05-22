window.addEventListener('DOMContentLoaded', () => {

    const link = document.getElementById('message-link');
  
    // Make sure CONFIG exists and phone number is defined
    if (typeof CONFIG !== 'undefined' && CONFIG.PHONE_NUMBER) {
      // Set the href to use the iMessage protocol
      link.href = `imessage:${CONFIG.PHONE_NUMBER}`;
  
      // Optional: add a default message (may not always work)
      // link.href = `imessage:${CONFIG.phoneNumber}&body=Hey%20cutie!%20💖`;
    } else {
      console.warn('CONFIG.phoneNumber not found. Hiding message tile.');
  
    }
  });