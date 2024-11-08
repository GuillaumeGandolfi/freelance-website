// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-md'>
      {/* Logo / Nom du site */}
      <div className='text-xl font-bold text-gray-800'>
        <Link href='/'>Guillaume Gandolfi - Web Dev</Link>
      </div>

      {/* Navigation */}
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/'>Accueil</Link>
          </li>
          <li>
            <Link href='/about'>À propos</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/projects'>Projets</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
