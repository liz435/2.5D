import React, { useState, useEffect } from 'react';

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='read-the-docs'>
      <br></br>
      <p>{time.toLocaleTimeString()}</p>
      <p className="read-the-docs-fine">
        ©️ Zelong Li 2024
      </p>

    </div>
  );
}

export default Footer;
