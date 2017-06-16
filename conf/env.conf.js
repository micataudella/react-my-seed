'use strict';

/**
 * Addresses of the server from which download any resources (if unique).
 */
exports.baseDomains = {
  dev: 'https://dev.resource.server/with/resource',
  staging: 'https://staging.resource.server/with/resource',
  prod: 'https://prod.resource.server/with/resource'
}

/**
 * Base paths of the server (for the deploying on an host subfolder).
 */
exports.basePaths = {
  dev: '',
  staging: '/staging',
  prod: '/prod'
}