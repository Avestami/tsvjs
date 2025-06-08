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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              JavaScript
            </h2>
            <p className="text-zinc-300 mb-4">
              JavaScript is a dynamic, interpreted programming language that powers the web. Created in 1995, it enables
              interactive web pages and is an essential part of web applications.
            </p>
            <div className="flex items-center space-x-2 text-zinc-300">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Dynamic and flexible</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              TypeScript
            </h2>
            <p className="text-zinc-300 mb-4">
              TypeScript is a superset of JavaScript developed by Microsoft in 2012. It adds static typing to
              JavaScript, enabling better tooling, error-catching, and code organization.
            </p>
            <div className="flex items-center space-x-2 text-zinc-300">
              <Shield className="w-5 h-5 text-blue-500" />
              <span>Type-safe and scalable</span>
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
    },
    {
      title: "Error Detection",
      js: "Errors often found at runtime",
      ts: "Many errors caught during development",
      jsIcon: <XCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <CheckCircle className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "IDE Support",
      js: "Limited autocompletion and refactoring",
      ts: "Rich autocompletion and refactoring tools",
      jsIcon: <XCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <CheckCircle className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Learning Curve",
      js: "Easier to learn initially",
      ts: "Steeper learning curve with type concepts",
      jsIcon: <CheckCircle className="w-5 h-5 text-yellow-400" />,
      tsIcon: <XCircle className="w-5 h-5 text-blue-500" />,
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
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400"
        >
          Key Differences
        </motion.h2>

        <div className="space-y-12">
          {differences.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-zinc-800"
            >
              <h3 className="text-2xl font-bold mb-6 text-zinc-100">{diff.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    {diff.jsIcon}
                    <span className="ml-2 font-semibold text-yellow-400">JavaScript</span>
                  </div>
                  <p className="text-zinc-300">{diff.js}</p>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    {diff.tsIcon}
                    <span className="ml-2 font-semibold text-blue-500">TypeScript</span>
                  </div>
                  <p className="text-zinc-300">{diff.ts}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CodeExamplesSection() {
  const jsCode = `// JavaScript
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// This will run but might cause runtime errors
const result = calculateTotal([
  { price: 10, quantity: 2 },
  { price: "15", quantity: 1 } // String instead of number
]);`

  const tsCode = `// TypeScript
interface Item {
  price: number;
  quantity: number;
}

function calculateTotal(items: Item[]): number {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// This will cause a compile-time error
const result = calculateTotal([
  { price: 10, quantity: 2 },
  { price: "15", quantity: 1 } // Error: Type 'string' is not assignable to type 'number'
]);`

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400"
        >
          Code Comparison
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <Code className="w-5 h-5 text-yellow-400 mr-2" />
              <h3 className="text-xl font-bold text-yellow-400">JavaScript</h3>
            </div>
            <pre className="text-sm text-zinc-300 overflow-x-auto p-4 bg-black/20 rounded-lg">
              <code>{jsCode}</code>
            </pre>
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <Code className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="text-xl font-bold text-blue-500">TypeScript</h3>
            </div>
            <pre className="text-sm text-zinc-300 overflow-x-auto p-4 bg-black/20 rounded-lg">
              <code>{tsCode}</code>
            </pre>
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700"
        >
          <h3 className="text-2xl font-bold mb-4 text-zinc-100">Key Takeaways</h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>TypeScript catches type-related errors during development, not at runtime</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>JavaScript is more flexible but provides fewer guarantees about code correctness</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>TypeScript code is more self-documenting through type annotations</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>All valid JavaScript is valid TypeScript, but not vice versa</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function ConclusionSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400"
        >
          Choose the Right Tool
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl text-zinc-300 max-w-3xl mx-auto mb-12"
        >
          Both JavaScript and TypeScript have their place in modern web development. The choice depends on your project
          size, team expertise, and specific requirements.
        </motion.p>

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

