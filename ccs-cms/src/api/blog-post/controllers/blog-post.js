"use strict";

/** Blog-post controller */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog-post.blog-post");
