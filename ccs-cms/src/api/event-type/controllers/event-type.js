"use strict";

/** Event-type controller */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event-type.event-type");
