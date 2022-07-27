const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware(`/authenticate/token`, {
      target: `https://www.themoviedb.org`,
      changeOrigin: true,
    })
  );
};
