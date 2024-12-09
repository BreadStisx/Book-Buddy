'use client'

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function MoodPage() {
  const { mood } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch books for this mood from your API
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/api/books/${mood}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [mood]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Books for {mood} Mood
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={book.coverImage || '/placeholder-book.jpg'}
              alt={book.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="mt-2">{book.description}</p>
            <div className="mt-4">
              <h3 className="font-semibold">AI Review:</h3>
              <p className="italic">{book.aiReview}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 