// Load environment variables
// For vanilla JS, we'll load from a config object
// In production, these should be injected at build time or via server

const ENV = {
  EMAILJS_SERVICE_ID: process.env?.EMAILJS_SERVICE_ID || localStorage.getItem('EMAILJS_SERVICE_ID') || '',
  EMAILJS_TEMPLATE_ID: process.env?.EMAILJS_TEMPLATE_ID || localStorage.getItem('EMAILJS_TEMPLATE_ID') || '',
  EMAILJS_USER_ID: process.env?.EMAILJS_USER_ID || localStorage.getItem('EMAILJS_USER_ID') || ''
};

export default ENV;
