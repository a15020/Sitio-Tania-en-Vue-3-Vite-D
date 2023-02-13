<script>
import '../main.js';
import ShopSection from './ShopSection.vue';
import ShopSections from './ShopSections.vue';
import CustomHeader from './CustomHeader.vue';

export default {
  data() {
    return {};
  },

  components: {
    CustomHeader,
    ShopSection,
    ShopSections,
  },
};
</script>

<template>
  <CustomHeader></CustomHeader>

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

    <ShopSections></ShopSections>
  </main>

  
</template>
