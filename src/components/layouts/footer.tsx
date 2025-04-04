'use client';
import React from 'react';
import withRouteExclusion from '../routeExclosion/routeExclusion';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10 py-6">
      <p className="justify-center text-center">
        © {new Date().getFullYear()} GOtip ·{' '}
        <a
          href="#"
          className="color: var(--primary);">
          Privacidad
        </a>{' '}
        ·{' '}
        <a
          href="#"
          className="color: var(--primary);">
          Términos
        </a>{' '}
        ·{' '}
        <a
          href="#"
          className="color: var(--primary);">
          Opciones de anuncios
        </a>
      </p>
    </footer>
  );
};

// export default Footer
export default withRouteExclusion(Footer, ['/login', '/register']);
