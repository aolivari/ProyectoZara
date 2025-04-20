module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['prueba-tecnica-api-tienda-moviles.onrender.com'],
    loader: 'default',
  },
};
// Suppress specific console errors or warnings
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0] && args[0].includes('specific error message to suppress')) {
    return;
  }
  originalConsoleError(...args);
};
