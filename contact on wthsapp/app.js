/**
 * Configuration & Functionality for WhatsApp Profile Webpage
 */

const CONFIG = {
  // WhatsApp phone number with country code (no +, spaces, or symbols)
  // Example: '919876543210' for India (+91), '14155552671' for US (+1)
  phone: '+91 87278 03533',

  // Default message pre-filled when opening WhatsApp
  message: 'Hello! I found your profile and would like to connect.'
};

// Update WhatsApp button link
const whatsappButton = document.getElementById('whatsappButton');

if (whatsappButton) {
  const digits = String(CONFIG.phone).replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(CONFIG.message);

  if (digits) {
    whatsappButton.href = `https://chat.whatsapp.com/BzoeNnZnI0hKICf76D1O6j`;
  }
}
