<script>
import ProductCard from './ProductCard.vue';
import storeProducts from '../assets/site-data/products.json';

export default {
  data() {
    return {
      Products: [...storeProducts],
    };
  },

  computed: {},

  methods: {
    scrollRight() {
      const destacadosCards = this.$refs.destacadosCards;
      destacadosCards.scroll(destacadosCards.scrollLeft + window.innerWidth, 0);
      console.log('scrolled right');
    },
    scrollLeft() {
      const destacadosCards = this.$refs.destacadosCards;
      destacadosCards.scroll(destacadosCards.scrollLeft - window.innerWidth, 0);
      console.log('scrolled left');
    },
    handleScroll() {
      const destacadosCards = this.$refs.destacadosCards;
      const productCardContainer = this.$refs.productCardContainer;
      const leftScroll = this.$refs.leftScroll;
      const rightScroll = this.$refs.rightScroll;
      if (destacadosCards.scrollLeft > 20) {
        leftScroll.style.display = 'block';
      } else if (destacadosCards.scrollLeft === 0) {
        leftScroll.style.display = 'none';
      }
      if (
        destacadosCards.scrollLeft + destacadosCards.offsetWidth >=
        destacadosCards.scrollWidth - 40
      ) {
        rightScroll.style.display = 'none';
      } else if (
        destacadosCards.scrollLeft <
        productCardContainer.offsetWidth - 40
      ) {
        rightScroll.style.display = 'block';
      }
    },
  },

  mounted() {
    this.$refs.destacadosCards.addEventListener('scroll', this.handleScroll);
  },

  watch: {},

  props: {
    msg: String,
  },

  emits: ['response'],
  created() {
    this.$emit('response', 'hello from child');
  },

  components: {
    ProductCard,
  },

  unmounted() {
    // this.$refs.destacadosCards.removeEventListener('scroll', this.handleScroll);
  },
};
console.log(...storeProducts);
// return storeProducts;

// scroll thing
/*
const destacadosCards = document.querySelector('#destacados-cards');
const rightScroll = document.querySelector('#scroll-right');
const leftScroll = document.querySelector('#scroll-left');

rightScroll.addEventListener('click', (e) => {
  destacadosCards.scroll(destacadosCards.scrollLeft + window.innerWidth, 0);
});

leftScroll.addEventListener('click', (e) => {
  destacadosCards.scroll(destacadosCards.scrollLeft - window.innerWidth, 0);
});

destacadosCards.addEventListener('scroll', (e) => {
  if (destacadosCards.scrollLeft > 20) {
    leftScroll.style.display = 'block';
  } else if (destacadosCards.scrollLeft === 0) {
    leftScroll.style.display = 'none';
  }
  if (
    destacadosCards.scrollLeft + destacadosCards.offsetWidth >=
    destacadosCards.scrollWidth - 40
  ) {
    rightScroll.style.display = 'none';
  } else if (destacadosCards.scrollLeft < destacadosCards.offsetWidth - 40) {
    rightScroll.style.display = 'block';
  }
});
//*/
</script>

<template>
  <section id="destacados" class="shop-section">
    <h2 class="">Destacados</h2>
    <div class="cards" id="destacados-cards" ref="destacadosCards">
      <button
        class="scroll-button"
        id="scroll-left"
        @click="scrollLeft"
        ref="leftScroll"
      >
        <svg viewBox="0 0 256 512" width="100" title="angle-left">
          <path
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
          />
        </svg>
      </button>

      <button
        class="scroll-button"
        id="scroll-right"
        @click="scrollRight"
        ref="rightScroll"
      >
        <svg viewBox="0 0 256 512" width="100" title="angle-right">
          <path
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          />
        </svg>
      </button>

      <div class="product-card-container" ref="productCardContainer">
        <ProductCard
          v-for="product in Products"
          :product="product"
        ></ProductCard>
      </div>

      <!-- <ProductCard :product="storeProducts[0]"></ProductCard> -->
    </div>
  </section>
</template>

<style lang="scss">
// @import '.././styles/style.scss';
.product-card-container {
  display: flex;
  align-items: stretch;
}
</style>
