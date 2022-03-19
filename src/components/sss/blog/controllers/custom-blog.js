const { createCoreController } = require("@strapi/strapi").factories;
("use strict");
const { sanitizeEntity } = require("strapi-utils");

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async getBlogPost(ctx) {
    const { route } = ctx.request.body;

    const entity = await strapi.query("api::blog.blog").findMany(
      {
        where: { route: route },
        populate: [
          "featuredImage",
          "featuredImage.media",
          "jumbotronImage",
          "jumbotronImage.media",
        ],
      },
      null
    );
    const isActive = entity ? true : false;
    return { isActive: isActive, blogPost: entity };
  },
}));
