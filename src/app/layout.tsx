import '../styles/globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Mon Site Freelance',
  description: 'Présentation de mes services et projets.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <head />
      <body className='min-h-screen flex flex-col bg-darkBlack text-white'>
        <Header />
        <main className='container mx-auto px-4 py-6 flex-grow'>
          {children}
        </main>
      </body>
    </html>
  );
}
