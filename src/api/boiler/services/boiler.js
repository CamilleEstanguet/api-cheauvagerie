'use strict';

/**
 * boiler service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boiler.boiler');
