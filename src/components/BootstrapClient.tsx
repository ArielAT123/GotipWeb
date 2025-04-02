'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Verificación de entorno cliente
    if (typeof window === 'undefined') return;

    const initializeLibraries = async () => {
      try {
        // Importación optimizada para React 19
        const [{ default: bootstrap }, { default: GLightbox }, 
               { default: Choices }] = await Promise.all([
          import('bootstrap'),
          import('glightbox'),
          import('choices.js'),
        ]);

        // Inicialización de Bootstrap - Fixed type assertion
        const tooltipList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
          .map(el => new bootstrap.Tooltip(el as HTMLElement));

        // Inicialización de GLightbox
        GLightbox({
          selector: '[data-gallery="image-popup"]',
          touchNavigation: true,
          loop: true,
        });

        // Inicialización de Choices
        document.querySelectorAll('.js-choice').forEach((select) => {
          new Choices(select as HTMLSelectElement, {
            removeItemButton: true,
            shouldSort: false,
          });
        });

      } catch (error) {
        console.error('Error initializing libraries:', error);
      }
    };

    initializeLibraries();
  }, []);

  return null;
}