/**
 * LD Inventory Move - Entry Point
 *
 * Bootstraps the module by registering the TransferManager on the
 * Foundry 'init' lifecycle hook.  Keeps this file intentionally thin.
 *
 * @module main
 */

import { TransferManager } from './TransferManager.js';

Hooks.once('init', () => {
    console.log('ld-inventory-move | Initializing LD Inventory Move');
    TransferManager.init();
});
