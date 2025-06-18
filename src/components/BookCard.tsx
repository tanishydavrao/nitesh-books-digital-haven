
import React from 'react';
import { Button } from '@/components/ui/button';

interface BookCardProps {
  title: string;
  author: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
}

const BookCard = ({ title, author, price, originalPrice, image, category }: BookCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={`https://images.unsplash.com/${image}?q=80&w=400&auto=format&fit=crop`}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4">by {author}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emerald-600">{price}</span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
            )}
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
