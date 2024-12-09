'use client'

import React, { useState } from 'react';

export default function BookModal({ books, mood, onClose, onHide }) {
    if (!books || books.length === 0) return null;
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentBook = books[currentIndex];

    const nextBook = () => {
        setCurrentIndex((prev) => (prev + 1) % books.length);
    };

    const prevBook = () => {
        setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold">
                        {currentBook.title}
                        <span className="text-sm text-gray-500 ml-2">
                            {currentIndex + 1} of {books.length}
                        </span>
                    </h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
                
                <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/3">
                            <img 
                                src={currentBook.coverImage || '/placeholder-book.jpg'}
                                alt={currentBook.title}
                                className="w-full rounded-lg shadow-lg"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/placeholder-book.jpg';
                                }}
                            />
                            <div className="mt-4 flex items-center justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-2xl">
                                        {i < currentBook.rating ? "⭐" : "☆"}
                                    </span>
                                ))}
                            </div>
                            <a 
                                href={currentBook.amazonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg"
                            >
                                View on Amazon 🛒
                            </a>
                        </div>
                        
                        <div className="w-full md:w-2/3">
                            <h3 className="font-bold text-xl mb-2">Summary</h3>
                            <p className="text-gray-600 mb-4">{currentBook.summary}</p>
                            
                            <div className="space-y-2">
                                <p><strong>Author:</strong> {currentBook.author}</p>
                                <p><strong>Genre:</strong> {currentBook.genre}</p>
                                <p><strong>Pages:</strong> {currentBook.pages}</p>
                                <p><strong>Price:</strong> {currentBook.price}</p>
                            </div>

                            <button
                                onClick={() => {
                                    onHide(currentBook.title);
                                    if (books.length <= 1) {
                                        onClose();
                                    } else {
                                        setCurrentIndex(0);
                                    }
                                }}
                                className="mt-6 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100"
                            >
                                Hide this recommendation
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between mt-8">
                        <button
                            onClick={prevBook}
                            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                        >
                            ← Previous Book
                        </button>
                        <button
                            onClick={nextBook}
                            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                        >
                            Next Book →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 