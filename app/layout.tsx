import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Manitra Luc - Développeur Full Stack & Spécialiste Deep Learning',
  description: 'Portfolio de Randriamanantena Manitra Luc, étudiant en Master MISA spécialisé en Deep Learning et développeur Full Stack expérimenté en React, Next.js, Python et PyTorch.',
  keywords: ['Deep Learning', 'Full Stack Developer', 'React', 'Next.js', 'Python', 'PyTorch', 'Machine Learning', 'Data Science'],
  authors: [{ name: 'Randriamanantena Manitra Luc' }],
  openGraph: {
    title: 'Manitra Luc - Développeur Full Stack & Spécialiste Deep Learning',
    description: 'Portfolio professionnel - Développeur Full Stack spécialisé en Deep Learning avec expertise en React, Next.js, Python et PyTorch',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}