import React from 'react';

function Footer() {
  return (
    <footer
      style={ {
        position: 'fixed',
        bottom: '30px',
        color: 'white',
        left: '50%',
        fontSize: '2rem',
        fontWeight: 700,
        transform: 'translateX(-50%)',
      } }
    >
      Em desenvolvimento
    </footer>
  );
}

export default Footer;
