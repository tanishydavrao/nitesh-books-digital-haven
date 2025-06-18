
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';

const Index = () => {
  const featuredBooks = [
    {
      title: "The Art of Programming",
      author: "John Doe",
      price: "₹299",
      originalPrice: "₹499",
      image: "photo-1461749280684-dccba630e2f6",
      category: "Technology"
    },
    {
      title: "Digital Marketing Mastery",
      author: "Jane Smith",
      price: "₹399",
      originalPrice: "₹599",
      image: "photo-1581091226825-a6a2a5aee158",
      category: "Business"
    },
    {
      title: "Web Development Guide",
      author: "Mike Johnson",
      price: "₹249",
      originalPrice: "₹449",
      image: "photo-1498050108023-c5249f4df085",
      category: "Technology"
    },
    {
      title: "Creative Writing Workshop",
      author: "Sarah Wilson",
      price: "₹199",
      originalPrice: "₹349",
      image: "photo-1649972904349-6e44c42644a7",
      category: "Arts"
    },
    {
      title: "Data Science Fundamentals",
      author: "Alex Brown",
      price: "₹449",
      originalPrice: "₹699",
      image: "photo-1488590528505-98d2b5aba04b",
      category: "Technology"
    },
    {
      title: "Financial Freedom Blueprint",
      author: "Robert Davis",
      price: "₹349",
      originalPrice: "₹549",
      image: "photo-1461749280684-dccba630e2f6",
      category: "Finance"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to <span className="text-yellow-300">Nitesh Books</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 animate-fade-in">
              Discover thousands of digital books at your fingertips. Learn, grow, and explore with our premium collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/signup">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                  Start Reading Today
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg"
                onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Books
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Nitesh Books?</h2>
            <p className="text-xl text-gray-600">Experience the future of reading with our digital library</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vast Collection</h3>
              <p className="text-gray-600">Access thousands of books across multiple genres and categories</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Access</h3>
              <p className="text-gray-600">Download and start reading immediately after purchase</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Prices</h3>
              <p className="text-gray-600">Premium content at prices that won't break the bank</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section id="featured" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Books</h2>
            <p className="text-xl text-gray-600">Discover our handpicked selection of bestsellers and trending titles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4">
              View All Books
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Reading Journey?</h2>
          <p className="text-xl mb-8 text-emerald-100">Join thousands of readers who trust Nitesh Books for their digital reading needs</p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
