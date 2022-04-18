'use strict';

/**
 * call-out service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::call-out.call-out');
