import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetailPage = () => {
  const { id } = useParams();
  // In a real app, you'd fetch product details based on the id
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{ padding: '2rem' }}
    >
      <h2>Product {id}</h2>
      <p>This is the detailed description for product {id}.</p>
    </motion.div>
  );
};

export default ProductDetailPage;
