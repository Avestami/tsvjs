"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion"
import { ArrowDown, Code, Shield, Zap, CheckCircle, XCircle } from "lucide-react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 100,
  })

  return (
    <div ref={containerRef} className="bg-zinc-900 text-zinc-100 min-h-screen">
      <HeroSection scrollProgress={smoothProgress} />
      <IntroSection />
      <DifferencesSection />
      <CodeExamplesSection />
      <ConclusionSection />
    </div>
  )
}

function HeroSection({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const y = useTransform(scrollProgress, [0, 0.2], [0, -100])
  const opacity = useTransform(scrollProgress, [0, 0.2], [1, 0])

  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ y, opacity }}
    >
      <div className="absolute inset-0 z-0">
        <GridBackground />
      </div>

      <motion.div
        className="z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TypeScript vs JavaScript
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-zinc-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The evolution of web development
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowDown className="w-8 h-8 mx-auto text-zinc-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900 opacity-90 z-10"></div>
      <div className="h-full w-full grid grid-cols-12 grid-rows-12">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            className="border border-zinc-800/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.001 }}
          />
        ))}
      </div>
    </div>
  )
}

function IntroSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400"
        >
          Understanding the Fundamentals
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-zinc-800/50 p-8 rounded-xl border border-zinc-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              JavaScript
            </h2>
            
            <div className="space-y-6 text-zinc-300">
              <p>
                JavaScript was created by Brendan Eich in 1995 as a scripting language for Netscape Navigator. It has since evolved into the primary language of the web, powering interactive experiences across billions of websites.
              </p>
              
              <div className="border-l-4 border-yellow-400 pl-4 italic">
                "JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it." - Douglas Crockford
              </div>
              
              <h3 className="text-xl font-semibold text-yellow-400 mt-8">Core Characteristics</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Dynamically Typed:</span> Variables can hold values of any type, and types are checked at runtime. This provides flexibility but can lead to unexpected type-related bugs.
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Interpreted Language:</span> Code is executed directly without a separate compilation step, making development faster but potentially slower at runtime.
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Prototype-based OOP:</span> Uses prototypal inheritance instead of classical inheritance, allowing for flexible object models but sometimes leading to confusion.
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">First-class Functions:</span> Functions can be assigned to variables, passed as arguments, and returned from other functions, enabling functional programming patterns.
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-yellow-400 mt-8">Evolution</h3>
              <p>
                JavaScript has evolved significantly through ECMAScript standards (ES5, ES6/ES2015, etc.), introducing features like arrow functions, classes, async/await, and more, making it more powerful and expressive.
              </p>
              
              <h3 className="text-xl font-semibold text-yellow-400 mt-8">Ecosystem</h3>
              <p>
                The JavaScript ecosystem is vast, with tools like Node.js (server-side JavaScript), npm (package manager), and frameworks like React, Angular, and Vue.js that have revolutionized web development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-zinc-800/50 p-8 rounded-xl border border-zinc-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              TypeScript
            </h2>
            
            <div className="space-y-6 text-zinc-300">
              <p>
                TypeScript was developed by Microsoft and released in 2012, led by Anders Hejlsberg (creator of C#). It was designed to address JavaScript's shortcomings in large-scale application development.
              </p>
              
              <div className="border-l-4 border-blue-500 pl-4 italic">
                "TypeScript is JavaScript with syntax for types." - TypeScript Documentation
              </div>
              
              <h3 className="text-xl font-semibold text-blue-500 mt-8">Core Characteristics</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Static Type System:</span> Adds optional type annotations to JavaScript, enabling compile-time type checking, improved IDE support, and better documentation.
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Superset of JavaScript:</span> Any valid JavaScript code is also valid TypeScript code, allowing for incremental adoption and migration of existing projects.
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Advanced Type Features:</span> Includes interfaces, generics, union types, intersection types, and more, enabling precise modeling of complex data structures.
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Compile-time Checks:</span> Catches type errors and other issues during development rather than at runtime, reducing bugs in production.
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-blue-500 mt-8">Type System</h3>
              <p>
                TypeScript's type system is structural (duck typing), not nominal. This means types are compatible if their structures match, regardless of their declared names. It also features type inference, which reduces the need for explicit type annotations.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-500 mt-8">Adoption</h3>
              <p>
                TypeScript has seen rapid adoption in the industry, with major frameworks like Angular, Vue.js, and Deno built with TypeScript. Many large codebases, including those at Microsoft, Google, and Airbnb, have migrated to TypeScript.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function DifferencesSection() {
  const differences = [
    {
      title: "Type System",
      js: "Dynamic typing, types determined at runtime",
      ts: "Static typing, types checked at compile time",
      jsIcon: <XCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      details: "TypeScript's static typing helps catch errors before runtime, improving code quality and maintainability. JavaScript's dynamic typing offers flexibility but can lead to unexpected type-related bugs that are difficult to trace."
    },
    {
      title: "Error Detection",
      js: "Errors often found at runtime",
      ts: "Many errors caught during development",
      jsIcon: <XCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      details: "TypeScript can catch up to 15% of bugs at compile time that would otherwise manifest in JavaScript at runtime. This reduces debugging time and improves overall application stability."
    },
    {
      title: "IDE Support",
      js: "Limited autocompletion and refactoring",
      ts: "Rich autocompletion and refactoring tools",
      jsIcon: <XCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      details: "TypeScript provides significantly better developer experience with intelligent code completion, inline documentation, and safe refactoring tools. This can improve development speed by up to 25% according to some studies."
    },
    {
      title: "Learning Curve",
      js: "Easier to learn initially",
      ts: "Steeper learning curve with type concepts",
      jsIcon: <CheckCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <XCircle className="w-5 h-5 text-blue-500" />,
      details: "JavaScript is more approachable for beginners with fewer concepts to master initially. TypeScript requires understanding type systems, interfaces, generics, and other advanced concepts, which can be challenging for newcomers."
    },
    {
      title: "Build Process",
      js: "No compilation needed",
      ts: "Requires compilation to JavaScript",
      jsIcon: <CheckCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <XCircle className="w-5 h-5 text-blue-500" />,
      details: "JavaScript runs directly in browsers without a build step, making it simpler for small projects. TypeScript requires a compilation step, adding complexity to the development workflow but providing benefits in code quality."
    },
    {
      title: "Team Scalability",
      js: "Works well for small teams/projects",
      ts: "Better for large teams/codebases",
      jsIcon: <XCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      details: "TypeScript shines in large codebases with multiple developers, as types serve as documentation and contracts between different parts of the application. This becomes increasingly valuable as team size and codebase complexity grow."
    },
    {
      title: "Refactoring Safety",
      js: "Risky refactoring without tests",
      ts: "Safer refactoring with type checking",
      jsIcon: <XCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      details: "When refactoring JavaScript, you often need comprehensive tests to catch breaking changes. TypeScript's compiler immediately identifies affected areas when changing interfaces or function signatures, reducing the risk of introducing bugs."
    },
    {
      title: "Ecosystem Compatibility",
      js: "Direct access to all libraries",
      ts: "May need type definitions for libraries",
      jsIcon: <CheckCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <XCircle className="w-5 h-5 text-blue-500" />,
      details: "JavaScript can use any library without additional steps. TypeScript often requires type definitions (@types packages) for external libraries, though the DefinitelyTyped repository now covers over 85% of popular npm packages."
    },
  ]

  return (
    <section className="py-24 px-4 bg-zinc-800/30 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400"
        >
          Detailed Comparison
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl text-zinc-300 text-center max-w-3xl mx-auto mb-16"
        >
          Understanding the key differences between TypeScript and JavaScript is essential for making the right choice for your project.
        </motion.p>

        <div className="space-y-12">
          {differences.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-zinc-100">{diff.title}</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/50 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-3">
                        {diff.jsIcon}
                      </div>
                      <h4 className="text-lg font-medium text-yellow-400">JavaScript</h4>
                    </div>
                    <p className="text-zinc-300">{diff.js}</p>
                  </div>
                  
                  <div className="bg-zinc-900/50 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                        {diff.tsIcon}
                      </div>
                      <h4 className="text-lg font-medium text-blue-500">TypeScript</h4>
                    </div>
                    <p className="text-zinc-300">{diff.ts}</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-zinc-900/30 p-5 rounded-lg border-l-4 border-zinc-600">
                  <p className="text-zinc-300">{diff.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <a
            href="/typescript-demo"
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-all inline-flex items-center"
          >
            <Shield className="w-5 h-5 mr-2" />
            See TypeScript in Action
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function CodeExamplesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400"
        >
          Code Comparison
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl text-zinc-300 text-center max-w-3xl mx-auto mb-16"
        >
          See how TypeScript's type system provides clarity, safety, and better developer experience compared to JavaScript.
        </motion.p>

        <div className="space-y-16">
          {/* Example 1: Function Parameters */}
          <CodeComparisonBlock
            title="Function Parameters & Return Types"
            description="TypeScript allows you to specify the types of function parameters and return values, preventing common errors and providing better documentation."
            jsCode={`// JavaScript
function calculateTotal(price, quantity, taxRate) {
  // No type checking - any type of argument will be accepted
  // This can lead to unexpected behavior
  return price * quantity * (1 + taxRate);
}

// These will run but might produce unexpected results
calculateTotal("10", 5, 0.1);  // "10" gets coerced to a number
calculateTotal(10, "5", 0.1);  // "5" gets coerced to a number
calculateTotal(10, 5);         // Missing parameter becomes undefined
`}
            tsCode={`// TypeScript
function calculateTotal(
  price: number, 
  quantity: number, 
  taxRate: number = 0
): number {
  // Type checking ensures all arguments are numbers
  // Default parameter value for taxRate
  return price * quantity * (1 + taxRate);
}

// These will cause compile-time errors
calculateTotal("10", 5, 0.1);  // Error: string not assignable to number
calculateTotal(10, "5", 0.1);  // Error: string not assignable to number
calculateTotal(10);            // Error: Expected 2-3 arguments, but got 1
`}
          />

          {/* Example 2: Interfaces & Objects */}
          <CodeComparisonBlock
            title="Interfaces & Object Shapes"
            description="TypeScript interfaces provide a way to define the shape of objects, ensuring that objects have the expected properties and methods."
            jsCode={`// JavaScript
function processUser(user) {
  // No guarantee that user has these properties
  console.log(user.name);
  console.log(user.email);
  
  // This might fail at runtime if user.preferences doesn't exist
  if (user.preferences.darkMode) {
    enableDarkMode();
  }
}

// This will run but might fail at runtime
processUser({
  name: "John",
  // Missing email property
  // Missing preferences object
});
`}
            tsCode={`// TypeScript
interface UserPreferences {
  darkMode: boolean;
  notifications: boolean;
  language?: string;  // Optional property
}

interface User {
  id: number;
  name: string;
  email: string;
  preferences: UserPreferences;
}

function processUser(user: User): void {
  // TypeScript ensures user has all required properties
  console.log(user.name);
  console.log(user.email);
  
  // Safe to access nested properties
  if (user.preferences.darkMode) {
    enableDarkMode();
  }
}

// This will cause compile-time errors
processUser({
  name: "John",
  // Error: missing required properties
});
`}
          />

          {/* Example 3: Advanced Types */}
          <CodeComparisonBlock
            title="Advanced Type Features"
            description="TypeScript offers advanced type features like union types, generics, and type narrowing that make code more expressive and safer."
            jsCode={`// JavaScript
function handleResponse(response) {
  // No way to know what shape response might have
  if (response.status === "success") {
    return response.data;
  } else {
    return response.error;
  }
}

// Need to check types at runtime
function getFirstItem(items) {
  if (Array.isArray(items) && items.length > 0) {
    return items[0];
  }
  return null;
}

// No way to ensure consistent structure
const userOrError = handleResponse(fetchUserData());
`}
            tsCode={`// TypeScript
// Union types
type Success<T> = {
  status: "success";
  data: T;
};

type Error = {
  status: "error";
  error: string;
};

type Response<T> = Success<T> | Error;

// Type narrowing with discriminated unions
function handleResponse<T>(response: Response<T>): T | string {
  // TypeScript knows which properties exist based on status
  if (response.status === "success") {
    return response.data;  // TypeScript knows this is type T
  } else {
    return response.error; // TypeScript knows this is string
  }
}

// Generic function
function getFirstItem<T>(items: T[]): T | null {
  return items.length > 0 ? items[0] : null;
}

// Type safety throughout the chain
const userOrError: User | string = 
  handleResponse<User>(fetchUserData());
`}
          />
          
          {/* Example 4: Error Prevention */}
          <CodeComparisonBlock
            title="Error Prevention"
            description="TypeScript catches many common errors during development that would only be discovered at runtime in JavaScript."
            jsCode={`// JavaScript
const user = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Typo in property name - only fails at runtime
console.log(user.firstname);  // undefined

// Typo in method name - only fails at runtime
console.log(user.getFullName());  // TypeError: not a function

// Incorrect property access - only fails at runtime
const count = user.posts.length;  // TypeError: Cannot read property 'length' of undefined
`}
            tsCode={`// TypeScript
interface User {
  firstName: string;
  lastName: string;
  fullName(): string;
}

const user: User = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Typo in property name - caught at compile time
console.log(user.firstname);  // Error: Property 'firstname' does not exist

// Typo in method name - caught at compile time
console.log(user.getFullName());  // Error: Property 'getFullName' does not exist

// Incorrect property access - caught at compile time
const count = user.posts.length;  // Error: Property 'posts' does not exist
`}
          />
          
          {/* Example 5: Refactoring Safety */}
          <CodeComparisonBlock
            title="Refactoring Safety"
            description="TypeScript makes refactoring safer by ensuring that all references to changed code are updated correctly."
            jsCode={`// JavaScript
// Original function
function processPayment(payment) {
  const { amount, currency, customer } = payment;
  // Process payment logic...
}

// Later, we decide to change the parameter structure
// But we might miss some usages in a large codebase
function processPayment(paymentDetails) {
  const { amount, currency, customer } = paymentDetails;
  // Process payment logic...
}

// This call still works, but might not behave as expected
// if the structure of the object has changed
processPayment({
  amount: 100,
  // Missing currency and customer
});
`}
            tsCode={`// TypeScript
// Original interface and function
interface Payment {
  amount: number;
  currency: string;
  customer: string;
}

function processPayment(payment: Payment): void {
  const { amount, currency, customer } = payment;
  // Process payment logic...
}

// Later, we decide to change the parameter structure
interface PaymentDetails {
  amount: number;
  currency: string;
  customer: string;
  method: string;  // New required field
}

function processPayment(paymentDetails: PaymentDetails): void {
  const { amount, currency, customer, method } = paymentDetails;
  // Process payment logic...
}

// TypeScript will flag ALL existing calls to processPayment
// that don't include the new 'method' field
processPayment({
  amount: 100,
  currency: "USD",
  customer: "123"
  // Error: Property 'method' is missing
});
`}
          />
        </div>
      </div>
    </section>
  )
}

function CodeComparisonBlock({
  title,
  description,
  jsCode,
  tsCode,
}: {
  title: string;
  description: string;
  jsCode: string;
  tsCode: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden"
    >
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-3 text-zinc-100">{title}</h3>
        <p className="text-zinc-300 mb-8">{description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <h4 className="text-lg font-medium text-yellow-400">JavaScript</h4>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-auto max-h-[400px]">
              <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">{jsCode}</pre>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                <Shield className="w-5 h-5 text-blue-500" />
              </div>
              <h4 className="text-lg font-medium text-blue-500">TypeScript</h4>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-auto max-h-[400px]">
              <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">{tsCode}</pre>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ConclusionSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400"
        >
          Making the Right Choice
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl text-zinc-300 text-center max-w-3xl mx-auto mb-16"
        >
          Both JavaScript and TypeScript have their place in modern web development. The choice depends on your project requirements, team expertise, and specific goals.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-zinc-800/50 p-8 rounded-xl border border-zinc-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Choose JavaScript When:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Small Projects</h4>
                  <p className="text-zinc-300">For small applications, scripts, or prototypes where the codebase is manageable and unlikely to grow significantly, JavaScript's simplicity and lack of build step can be advantageous.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Rapid Development</h4>
                  <p className="text-zinc-300">When you need to quickly build and iterate on a concept without the overhead of type definitions, JavaScript allows for faster initial development cycles.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Team Familiarity</h4>
                  <p className="text-zinc-300">If your team is more familiar with JavaScript and has limited experience with typed languages, starting with JavaScript may be more productive in the short term.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Dynamic Content</h4>
                  <p className="text-zinc-300">For applications dealing with highly dynamic or unpredictable data structures where static typing might be overly restrictive, JavaScript's flexibility can be beneficial.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Simple Scripts</h4>
                  <p className="text-zinc-300">For automation scripts, small utilities, or one-off tasks where the complexity is low and long-term maintenance is not a concern.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-zinc-800/50 p-8 rounded-xl border border-zinc-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-500">Choose TypeScript When:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Large Codebases</h4>
                  <p className="text-zinc-300">For applications expected to grow in size and complexity, TypeScript's static typing helps manage complexity and prevents bugs as the codebase expands.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Team Collaboration</h4>
                  <p className="text-zinc-300">When multiple developers work on the same codebase, TypeScript's type definitions serve as documentation and contracts, making collaboration more efficient and reducing integration issues.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Long-term Maintenance</h4>
                  <p className="text-zinc-300">For applications that will be maintained over years, TypeScript's self-documenting nature and compile-time checks make code more maintainable and easier to refactor safely.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Complex Domain Logic</h4>
                  <p className="text-zinc-300">When your application deals with complex business rules or domain models, TypeScript's interfaces and type system help model these complexities more accurately and safely.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-100 mb-1">Critical Applications</h4>
                  <p className="text-zinc-300">For applications where reliability is crucial, such as financial systems or healthcare applications, TypeScript's additional layer of safety helps prevent costly runtime errors.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-zinc-800/50 p-8 rounded-xl border border-zinc-700 mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-zinc-100">Practical Migration Strategy</h3>
          
          <p className="text-zinc-300 mb-6">
            Remember that TypeScript is a superset of JavaScript, which means you can adopt it gradually. Here's a practical approach to migrating from JavaScript to TypeScript:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0 text-zinc-100 font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 mb-1">Start with Configuration</h4>
                <p className="text-zinc-300">Begin by setting up a TypeScript configuration with permissive settings. Use <code className="bg-zinc-900 px-1 py-0.5 rounded text-xs">allowJs: true</code> and <code className="bg-zinc-900 px-1 py-0.5 rounded text-xs">noImplicitAny: false</code> to allow JavaScript files in your TypeScript project.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0 text-zinc-100 font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 mb-1">Rename Files Incrementally</h4>
                <p className="text-zinc-300">Convert files from <code className="bg-zinc-900 px-1 py-0.5 rounded text-xs">.js</code> to <code className="bg-zinc-900 px-1 py-0.5 rounded text-xs">.ts</code> one at a time, starting with simpler files or critical modules. Fix any errors that arise during conversion.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0 text-zinc-100 font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 mb-1">Add Types Gradually</h4>
                <p className="text-zinc-300">Start by adding types to function parameters and return values. Use <code className="bg-zinc-900 px-1 py-0.5 rounded text-xs">any</code> type initially where needed, then refine to more specific types over time.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0 text-zinc-100 font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 mb-1">Create Interfaces for Data Structures</h4>
                <p className="text-zinc-300">Define interfaces for your key data structures, API responses, and state objects. This provides immediate benefits in terms of documentation and autocomplete.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0 text-zinc-100 font-bold">
                5
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 mb-1">Tighten Configuration Over Time</h4>
                <p className="text-zinc-300">Gradually enable stricter TypeScript options like <code className="bg-zinc-900 px-1 py-0.5 rounded text-xs">noImplicitAny</code>, <code className="bg-zinc-900 px-1 py-0.5 rounded text-xs">strictNullChecks</code>, and others as your codebase becomes more typed.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-center gap-6 mt-12"
        >
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          >
            <Code className="w-5 h-5 mr-2" />
            Learn TypeScript
          </a>
          
          <a
            href="/typescript-demo"
            className="bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          >
            <Shield className="w-5 h-5 mr-2" />
            View TypeScript Demo
          </a>
        </motion.div>
      </div>
    </section>
  )
}

