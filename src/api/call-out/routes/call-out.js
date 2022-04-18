'use strict';

/**
 * call-out router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::call-out.call-out');
