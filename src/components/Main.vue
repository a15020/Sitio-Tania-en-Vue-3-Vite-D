<script>
import '../main.js';
import ShopSection from './ShopSection.vue';

export default {
  data() {
    return {};
  },

  components: {
    ShopSection,
  },
};
</script>

<template>
  <header id="header">
    <!--   <div class="logo">
        <img src="https://picsum.photos/200/80">
      </div> -->
    <h1 class="logo">Logo</h1>
    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <nav id="nav">
      <ul>
        <li><a href="#">element1</a></li>
        <li><a href="#">element2</a></li>
        <li><a href="#">element3</a></li>
        <li><a href="#">element4</a></li>
        <li><a href="#">element5</a></li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>
  </header>

  <main>
    <section>
      <h2>Content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <input type="color" id="color-picker" />
        <label for="color-picker">Brand color</label>
      </div>
      <div>
        <input type="color" id="secondary-color-picker" />
        <label for="secondary-color-picker">Secondary color</label>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <!-- <section id="destacados" class="shop-section">
      <h2 class="">Destacados</h2>
      <!     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 

      <div class="cards" id="destacados-cards">
        <button class="scroll-button" id="scroll-left">
          <svg viewBox="0 0 256 512" width="100" title="angle-left">
            <path
              d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
            />
          </svg>
        </button>
        <button class="scroll-button" id="scroll-right">
          <svg viewBox="0 0 256 512" width="100" title="angle-right">
            <path
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
            />
          </svg>
        </button>
        <div class="card" id="destacados1">
          <img src="https://picsum.photos/200" />
          <h4>aofjdfusk</h4>
          <p class="description">uju</p>
        </div>
        <div class="card" id="destacados1">
          <img src="https://picsum.photos/200" />
          <h4>aofjdfusk</h4>
          <p class="description">uju</p>
        </div>
        <div class="card" id="destacados1">
          <img src="https://picsum.photos/200" />
          <h4>aofjdfusk</h4>
          <p class="description">uju</p>
        </div>
        <div class="card" id="destacados1">
          <img src="https://picsum.photos/200" />
          <h4>aofjdfusk</h4>
          <p class="description">uju</p>
        </div>
      </div>
    </section> -->

    <ShopSection></ShopSection>
  </main>

  <footer id="footer">
    <h2>Contacto</h2>
    <div class="contacto">
      <a href="https://wa.me/5213314970956">
        <span class="contacto-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            />
          </svg>
        </span>
        <span class="contacto-text">+52 33 1497 0956</span>
      </a>
    </div>
    <div class="contacto">
      <a href="mailto:tania.torres.salinas@gmail.com">
        <span class="contacto-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
            />
          </svg>
        </span>
        <span class="contacto-text">tania.torres.salinas@gmail.com</span>
      </a>
    </div>
    <p class="credits">
      Diseñado por <a href="https://github.com/Tree05">tree</a>
    </p>
  </footer>
</template>
