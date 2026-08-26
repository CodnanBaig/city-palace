import './globals.css';

export const metadata = {
  title: 'The City Palace Museum, Jaipur',
  description: 'Discover the City Palace Museum in Jaipur — its architecture, collections, royal heritage, craft traditions and visitor information.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
