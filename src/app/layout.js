import './globals.css';

export const metadata = {
  title: 'Book Buddy - Find Your Next Read',
  description: 'Discover personalized book recommendations based on your current mood',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <a href="/" className="text-2xl font-bold flex items-center gap-2">
              📚 Book Buddy
            </a>
          </div>
        </nav>
        {children}
        <footer className="bg-white shadow-inner mt-16">
          <div className="container mx-auto px-4 py-8 text-center text-gray-600">
            <p>© 2024 Book Buddy. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 