/********************************************************************************
 * @file main.js
 * Main initialization script for the Sandwich Maker application.
 *
 * - Listens for the DOMContentLoaded event to ensure the HTML is fully parsed.
 * - Once the DOM is ready, creates a new instance of the SandwichApp class.
 * - (Commented out) Optionally, the instance can be assigned to the global `window`
 *   object for debugging or console-based interaction.
 *
 * Usage:
 *  1. This script is included via a <script type="module" src="main.js"></script>
 *     tag in the HTML file.
 *  2. When the DOM is fully loaded, `new SandwichApp()` is called.
 *  3. All event listeners and sandwich-building logic are handled inside the
 *     SandwichApp constructor and its methods.
 *
 * Note: If SonarQube warns about “useless object instantiation,” you can store the
 * instance in a variable (e.g., `const app = new SandwichApp()`) or call additional
 * methods on it to illustrate its usage. You can also expose it globally by
 * assigning it to `window.app` if you need direct access via the browser console.
 ********************************************************************************/

import { SandwichApp } from "./sammich-app.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = new SandwichApp();
    // window.app = new SandwichApp(); // Optionally, create and expose for global debugging
});

