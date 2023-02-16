"use strict";

/** Event-type service */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::event-type.event-type");
