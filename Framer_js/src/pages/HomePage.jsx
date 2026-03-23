import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ padding: '2rem' }}
    >
      <h1>Welcome to our E-shop!</h1>
      <p>Check out our amazing products.</p>
    </motion.div>
  );
};

export default HomePage;
