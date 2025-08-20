class SiteNavbar extends HTMLElement {
  constructor() {
    super();
    // DOM manipulations and initial render should be in connectedCallback
  }

  connectedCallback() {
    this.loadTemplate();
  }

  async loadTemplate() {
    const templatePath = this.getAttribute("data-template") || "/components/navbar.html";
    try {
      const response = await fetch(templatePath);
      if (!response.ok) throw new Error(`Failed to load ${templatePath}`);
      const html = await response.text();
      this.innerHTML = html;

      // Re-attach your event listeners
      this.setupActiveLink();
      this.setupMobileMenu();
    } catch (err) {
      console.error(err);
      this.innerHTML = `<p style="color:red;">Error loading navbar</p>`;
    }
  }

  /**
   * Identifies the current page and applies an "active" style to the corresponding nav link.
   */
  setupActiveLink() {
    // Determine the current page file name (e.g., "about.html").
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Find the link in the desktop nav that points to the current page.
    const activeLink = this.querySelector(`#desktop-nav-links a[href$="${currentPage}"]`);

    if (activeLink) {
      // Apply active styles and aria attribute for accessibility.
      activeLink.classList.add("text-[#4EACB4]", "font-bold");
      activeLink.setAttribute("aria-current", "page");
    }
  }

  /**
   * Adds event listeners for desktop flyout menus (e.g., Services, Conditions).
   * Menus open on hover and keyboard focus.
   */
  setupFlyoutMenus() {
    const flyoutContainers = this.querySelectorAll(".relative");

    flyoutContainers.forEach(container => {
      const button = container.querySelector(".flyout-button");
      const menu = container.querySelector(".flyout-menu");

      if (button && menu) {
        // Show menu on mouse enter
        container.addEventListener("mouseenter", () => {
          menu.classList.remove("hidden");
          button.setAttribute("aria-expanded", "true");
        });

        // Hide menu on mouse leave
        container.addEventListener("mouseleave", () => {
          menu.classList.add("hidden");
          button.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  /**
   * Adds all event listeners required for the mobile menu to function,
   * including the main toggle and the accordion submenus.
   */
  setupMobileMenu() {
    const mobileMenuButton = this.querySelector("#mobile-menu-button");
    const closeMenuButton = this.querySelector("#close-menu-button");
    const mobileMenu = this.querySelector("#mobile-menu");

    console.log(mobileMenuButton);
    console.log(closeMenuButton);
    console.log(mobileMenu);

    // Toggle the main mobile menu visibility
    if (mobileMenuButton && mobileMenu && closeMenuButton) {
      mobileMenuButton.addEventListener("click", () => {
        console.log("mobileMenuButton clicked");
        mobileMenu.classList.remove("hidden");
      });

      closeMenuButton.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    }

    // Handle the accordion functionality within the mobile menu
    this.querySelectorAll(".mobile-accordion-button").forEach(button => {
      button.addEventListener("click", () => {
        const panel = button.nextElementSibling;
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        // Toggle visibility and ARIA state
        button.setAttribute("aria-expanded", !isExpanded);
        panel.classList.toggle("hidden");

        // Toggle the rotation of the chevron icon
        const icon = button.querySelector("svg");
        icon.classList.toggle("rotate-180");
      });
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
