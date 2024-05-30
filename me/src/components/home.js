import React from 'react';
import { motion } from 'framer-motion';
import './home.css';

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home section of your portfolio.</p>
    </motion.div>
  );
}

export default Home;
