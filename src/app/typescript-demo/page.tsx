import React from 'react';
import ProductList from '../components/typescript-demo/ProductList';

export default function TypeScriptDemoPage() {
  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen pt-8">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-2">TypeScript vs JavaScript Demo</h1>
        <p className="text-zinc-400 mb-8">
          This page demonstrates practical TypeScript features in a React application.
        </p>
        
        <ProductList showOutOfStock={true} />
      </div>
    </div>
  );
} 