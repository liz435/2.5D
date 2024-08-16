import React, { useState, useEffect } from 'react';

function LocalTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='time'>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default LocalTime;
