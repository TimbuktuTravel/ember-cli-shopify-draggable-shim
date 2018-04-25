/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-shopify-draggable',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/draggable.bundle.legacy.js');
    this.import('vendor/shims/shopify-draggable.js');
  },

  treeForVendor(vendorTree) {
    var draggablePath = path.dirname(require.resolve('@shopify/draggable/lib/draggable.bundle.legacy.js'));
    var draggableTree = new Funnel(draggablePath, {
      files: ['draggable.bundle.legacy.js']
    });

    return new MergeTrees([vendorTree, draggableTree]);
  },
};
