"use strict";

/** Blog-post service */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::blog-post.blog-post");
