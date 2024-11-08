'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex justify-center mt-6 px-4 sm:px-6'>
      <header className='bg-darkBlack shadow-md rounded-lg w-full max-w-4xl sm:max-w-lg md:max-w-4xl px-6 py-4 border border-gray-700'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/logo.webp'
              alt='Guillaume Gandolfi Logo'
              width={150}
              height={150}
            />
          </Link>

          {/* Menu hamburger pour les petits écrans */}
          <div className='md:hidden'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-white'
            >
              ☰
            </button>
          </div>

          {/* Navigation principale, visible à partir de 'md' */}
          <nav className='hidden md:flex space-x-8'>
            <Link
              href='/'
              className='text-white hover:text-lightViolet transition-transform transform hover:scale-105'
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='text-white hover:text-lightViolet transition-transform transform hover:scale-105'
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='text-white hover:text-lightViolet transition-transform transform hover:scale-105'
            >
              Services
            </Link>
            <Link
              href='/projects'
              className='text-white hover:text-lightViolet transition-transform transform hover:scale-105'
            >
              Projets
            </Link>
            <Link
              href='/contact'
              className='text-white hover:text-lightViolet transition-transform transform hover:scale-105'
            >
              Contact
            </Link>
          </nav>

          {/* Bouton d'Appel à l'Action, visible à partir de 'md' */}
          <div className='hidden md:block'>
            <Link href='/contact'>
              <button className='border border-white text-white bg-transparent py-2 px-4 rounded-lg transition-colors hover:bg-nightBlue'>
                Contactez-moi
              </button>
            </Link>
          </div>
        </div>

        {/* Menu mobile déroulant, visible seulement si ouvert */}
        {menuOpen && (
          <div className='flex flex-col items-center mt-4 md:hidden space-y-4'>
            <Link
              href='/about'
              className='text-white hover:text-lightViolet transition-transform transform hover:scale-105'
              onClick={() => setMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='text-white hover:text-lightViolet transition-transform transform hover:scale-105'
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/projects'
              className='text-white hover:text-lightViolet transition-transform transform hover:scale-105'
              onClick={() => setMenuOpen(false)}
            >
              Projets
            </Link>
            <Link
              href='/contact'
              className='text-white hover:text-lightViolet transition-transform transform hover:scale-105'
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href='/contact'>
              <button className='border border-white text-white bg-transparent py-2 px-4 rounded-lg transition-colors hover:bg-nightBlue'>
                Contactez-moi
              </button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
