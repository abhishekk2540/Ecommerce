// WhatsAppPulse.jsx
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppPulse() {
  return (
    <div className="flex items-center justify-center fixed bottom-10  z-50  right-10">
      <div className="relative ">
        <span className="absolute inset-0 rounded-full animate-ping  bg-red-500 opacity-75"></span>
        <div className="relative w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg">
        <WhatsAppIcon style={{fontSize:28}}></WhatsAppIcon>
        </div>
      </div>
    </div>
  );
}
