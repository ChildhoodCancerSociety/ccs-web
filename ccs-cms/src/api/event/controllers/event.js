"use strict";

/** Event controller */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event");
