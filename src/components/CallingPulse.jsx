import React from 'react'
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
const CallingPulse = () => {
  return (
    <div className="flex items-center justify-center fixed bottom-10  z-[10px]  left-10">
      <div className="relative ">
        <span className="absolute inset-0 rounded-full animate-ping  bg-red-500 opacity-75"></span>
        <div className="relative w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg">
        <PhoneCallbackIcon style={{fontSize:30}}></PhoneCallbackIcon>
        </div>
      </div>
    </div>
  );
}

export default CallingPulse