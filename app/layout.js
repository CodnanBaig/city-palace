import './globals.css';

export const metadata = {
  title: 'City Palace Museum Jaipur — Concept Redesign',
  description: 'A luxury editorial redesign concept for the City Palace Museum, Jaipur.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
