import React, { useEffect } from 'react';

const DesktopOnlyComponent = () => {
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Adjust the threshold as needed

      if (isMobile) {
        // If it's a mobile device, redirect to "google.com"
        window.location.href = '../mobile.html'; // Replace with the desired URL
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null; // No content to render for this component
};

export default DesktopOnlyComponent;
