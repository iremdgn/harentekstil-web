// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/custom-blog/getBlogPost",
      handler: "custom-blog.getBlogPost",
      config: {
        policies: [],
      },
    },
  ],
};
