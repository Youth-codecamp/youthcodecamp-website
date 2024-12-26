import React, { useEffect } from 'react';

const Community = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div data-tf-live="01JG03Y7J6ASNFJXD0S686JSFD"></div>
    </div>
  );
};

export default Community;
