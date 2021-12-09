module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
};
