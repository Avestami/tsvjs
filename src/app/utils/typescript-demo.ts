/**
 * TypeScript vs JavaScript Practical Examples
 * This file demonstrates practical TypeScript features and their benefits
 */

// Type definitions
export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  inStock: boolean;
  tags?: string[];
}

export type ProductCategory = 'electronics' | 'clothing' | 'books' | 'food' | 'other';

// Generic type example
export interface Paginated<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Function with type safety
export function calculateDiscount(product: Product, discountPercent: number): number {
  // Type checking ensures discountPercent is a number
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  
  return product.price * (1 - discountPercent / 100);
}

// Class with access modifiers and property types
export class ShoppingCart {
  private items: Product[] = [];
  private readonly taxRate: number;
  
  constructor(taxRate: number = 0) {
    this.taxRate = taxRate;
  }
  
  addItem(product: Product): void {
    if (!product.inStock) {
      throw new Error(`Product ${product.name} is not in stock`);
    }
    this.items.push(product);
  }
  
  removeItem(productId: string): void {
    const index = this.items.findIndex(item => item.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  
  getTotal(): number {
    const subtotal = this.items.reduce((sum, item) => sum + item.price, 0);
    return subtotal * (1 + this.taxRate);
  }
  
  getItems(): ReadonlyArray<Product> {
    // Return read-only version to prevent external modifications
    return Object.freeze([...this.items]);
  }
}

// Utility type examples - used in documentation examples
export type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;

// Function overloading example
export function formatPrice(price: number): string;
export function formatPrice(price: number, currency: string): string;
export function formatPrice(price: number, currency?: string): string {
  const curr = currency || 'USD';
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: curr 
  }).format(price);
}

// Example of discriminated unions
interface BaseEvent {
  timestamp: number;
}

interface ProductViewEvent extends BaseEvent {
  type: 'product-view';
  productId: string;
}

interface CheckoutEvent extends BaseEvent {
  type: 'checkout';
  cartValue: number;
  products: ProductSummary[];
}

type AnalyticsEvent = ProductViewEvent | CheckoutEvent;

export function trackEvent(event: AnalyticsEvent): void {
  // Type narrowing with discriminated union
  switch(event.type) {
    case 'product-view':
      console.log(`Product viewed: ${event.productId}`);
      break;
    case 'checkout':
      console.log(`Checkout completed: ${event.cartValue}`);
      break;
  }
} 