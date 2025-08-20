// Footer Web Component
class SiteFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="bg-[#4EACB4]">
        <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
            <a href="index.html" class="text-white hover:text-white/90">Home</a>
            <a href="/pages/about.html" class="text-white hover:text-white/90">About</a>
            <!-- <a href="contact.html" class="text-white hover:text-white/90">Services</a> -->
            <!-- <a href="contact.html" class="text-white hover:text-white/90">Conditions</a> -->
            <a href="/pages/wellness.html" class="text-white hover:text-white/90">Wellness</a>
            <a href="/pages/contact.html" class="text-white hover:text-white/90">Contact</a>
          </nav>
          <div class="mt-16 flex justify-center">
            <a href="https://www.youtube.com/" class="text-white hover:text-white"></span>
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          <p class="mt-10 text-center text-sm/6 text-white">&copy; ${new Date().getFullYear()} Irvine Center of Integrative Medicine.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
