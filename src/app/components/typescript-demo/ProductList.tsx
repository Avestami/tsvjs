'use client';

import React, { useState } from 'react';
import { 
  Product, 
  ProductCategory, 
  ShoppingCart, 
  calculateDiscount, 
  formatPrice 
} from '../../utils/typescript-demo';

// Sample product data
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Laptop',
    price: 1299.99,
    category: 'electronics',
    inStock: true,
    tags: ['computer', 'work', 'high-performance']
  },
  {
    id: '2',
    name: 'T-Shirt',
    price: 19.99,
    category: 'clothing',
    inStock: true
  },
  {
    id: '3',
    name: 'JavaScript: The Good Parts',
    price: 29.99,
    category: 'books',
    inStock: false
  }
];

// TypeScript interface for component props
interface ProductListProps {
  initialCategory?: ProductCategory;
  showOutOfStock?: boolean;
}

export default function ProductList({ 
  initialCategory, 
  showOutOfStock = false 
}: ProductListProps) {
  // State with TypeScript types
  const [products] = useState<Product[]>(sampleProducts);
  const [cart] = useState<ShoppingCart>(new ShoppingCart(0.1)); // 10% tax
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    initialCategory || 'all'
  );
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Filter products based on category and stock
  const filteredProducts = products.filter((product: Product) => {
    if (!showOutOfStock && !product.inStock) return false;
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    return true;
  });

  // Handle adding product to cart
  const addToCart = (product: Product) => {
    try {
      cart.addItem(product);
      setCartItems([...cart.getItems()]);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // Handle removing product from cart
  const removeFromCart = (productId: string) => {
    cart.removeItem(productId);
    setCartItems([...cart.getItems()]);
  };

  // Categories for filter
  const categories: (ProductCategory | 'all')[] = [
    'all', 'electronics', 'clothing', 'books', 'food', 'other'
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">TypeScript Product Demo</h1>
      
      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Filter by Category:</label>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-3 py-1 rounded ${
                selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredProducts.map((product: Product) => (
          <div 
            key={product.id} 
            className="border rounded-lg p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg">
                {formatPrice(product.price)}
              </span>
              <span className={`px-2 py-1 rounded text-xs ${
                product.inStock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            {/* Display discount */}
            <div className="text-sm text-gray-600 mt-1">
              {product.category === 'electronics' && (
                <div>
                  10% off: {formatPrice(calculateDiscount(product, 10))}
                </div>
              )}
            </div>
            
            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {product.tags.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Add to cart button */}
            <button
              className={`mt-4 w-full py-2 px-4 rounded ${
                product.inStock 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              onClick={() => product.inStock && addToCart(product)}
              disabled={!product.inStock}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      {/* Shopping Cart */}
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul className="divide-y">
              {cartItems.map((item: Product) => (
                <li key={item.id} className="py-2 flex justify-between items-center">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="ml-2 text-gray-600">{formatPrice(item.price)}</span>
                  </div>
                  <button 
                    className="text-red-600 hover:text-red-800"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <p className="text-lg font-bold">
                Total (including 10% tax): {formatPrice(cart.getTotal())}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 