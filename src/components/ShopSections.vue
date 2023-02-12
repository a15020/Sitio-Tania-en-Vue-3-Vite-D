<script>
import storeProducts from '../assets/site-data/products.json';

export default {
  data() {
    return {
      Products: storeProducts,
    };
  },

  computed: {},

  methods: {},

  mounted() {},

  watch: {},

  props: {
    msg: String,
  },

  emits: ['shopSection'],

  created() {
    this.$emit(
      'shopSection',
      Products.json(),
      filter((product) => product.section === 'destacados')
    );
  },

  components: {},
};
</script>

<template>
  <section id="destacados" class="shop-section">
    <h2 class="">Destacados</h2>
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
    </div>
  </section>
</template>
