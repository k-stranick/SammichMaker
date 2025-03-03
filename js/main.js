/********************************************************************************
 * @file main.js
 * Main initialization script for the Sandwich Maker application.
 *
 * - Listens for the DOMContentLoaded event to ensure the HTML is fully parsed.
 * - Once the DOM is ready, creates a new instance of the SandwichApp class.
 * - Initializes the Bootstrap tooltip for help info.
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

    // Initialize Bootstrap tooltip for the help button
    const helpButton = document.getElementById("help-info");
    if (helpButton) {
        new bootstrap.Tooltip(helpButton);
    }
});

