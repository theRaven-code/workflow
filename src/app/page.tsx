"use client";

// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "light"
          ? "bg-[#FDFDFD] text-gray-900"
          : "bg-[#121212] text-gray-100"
      }`}
    >
      <Head>
        <title>TaskFlow - Your Ultimate Project Manager</title>
        <meta
          name="description"
          content="Organize, collaborate, and achieve more with TaskFlow."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md ">
        <h1 className="text-2xl font-bold">TaskFlow</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md bg-[#67C2A5] text-white hover:bg-[#5AA890] transition"
        >
          Toggle Theme
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6">
        <div className="text-center md:text-left md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-white dark:text-gray-100 mb-4"
          >
            Organize. Collaborate. Succeed.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 dark:text-gray-400 mb-8"
          >
            Streamline your workflows, boost team productivity, and achieve your
            goals faster with TaskFlow.
          </motion.p>
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-[#67C2A5] text-white rounded-md hover:bg-[#5AA890] transition"
            >
              Get Started
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="px-6 py-3 border border-[#67C2A5] text-[#67C2A5] rounded-md hover:bg-[#E8F5F2] hover:text-[#5AA890] transition"
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/img-11.svg"
              alt="TaskFlow Hero Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose TaskFlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="📝"
              title="Intuitive Design"
              description="A clean and minimal interface that makes project management a breeze."
              image="/img-11.svg"
            />
            <FeatureCard
              icon="👥"
              title="Real-Time Collaboration"
              description="Work together with your team in real-time, no matter where you are."
              image="/img-12.svg"
            />
            <FeatureCard
              icon="📊"
              title="Powerful Analytics"
              description="Track progress, deadlines, and productivity with built-in reports."
              image="/img-13.svg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-[#67C2A5] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join thousands of teams who are already using TaskFlow to streamline
            their workflows.
          </p>
          <button className="px-8 py-4 bg-white text-[#67C2A5] rounded-md hover:bg-gray-100 transition">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-200 dark:bg-gray-700 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © 2023 TaskFlow. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
  image,
}: {
  icon: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${title} Icon`}
        width={80}
        height={80}
        className="mb-4 rounded-full"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

// Testimonial Slider Component
const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Project Manager",
      quote:
        "TaskFlow has transformed how our team collaborates. It's simple yet powerful!",
    },
    {
      name: "Bob Smith",
      role: "Developer",
      quote:
        "The real-time updates and analytics are game-changers for our workflow.",
    },
    {
      name: "Charlie Brown",
      role: "Designer",
      quote: "I love the clean design and ease of use. Highly recommend it!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="text-center">
        <blockquote className="text-xl md:text-2xl font-semibold mb-4">
          "{testimonials[currentIndex].quote}"
        </blockquote>
        <p className="text-lg font-bold">{testimonials[currentIndex].name}</p>
        <p className="text-gray-600 dark:text-gray-300">
          {testimonials[currentIndex].role}
        </p>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          →
        </button>
      </div>
    </div>
  );
};
