<script>
export default {
  data() {
    return {};
  },

  computed: {},

  methods: {},

  mounted() {
    const img = document.querySelector('.product-image-' + this.product.id);
    let fullscreen = false;
    img.addEventListener('click', (e) => {
      if (img.ariaExpanded === 'false') {
        img.ariaExpanded = 'true';
        img.requestFullscreen();
      } else {
        img.ariaExpanded = 'false';
        document.exitFullscreen();
      }
    });
  },

  watch: {},

  props: {
    product: Object,
  },

  emits: ['response'],
  created() {
    this.$emit('response', 'hello from child');
  },

  components: {},
};

console.log('ProductCard JavaScript loadad :D');
</script>

<template>
  <div class="card" :id="'product-' + product.id">
    <img :src="product.imageUrl" :class="'product-image-' + product.id" />
    <div id="zoom-icon"></div>
    <div class="card-elements">
      <div class="card-info">
        <h4>{{ product.name }}</h4>
        <p :class="product.section + ' description'">
          {{ product.description }}
        </p>
        <p class="price">
          {{
            product.price.toLocaleString(undefined, {
              style: 'currency',
              currency: 'MXN',
            })
          }}
        </p>
      </div>
      <button class="buy" :id="'buy-button-' + product.id">Comprar</button>
    </div>
  </div>
</template>

<style lang="scss">
@use '../styles/variables.scss';

.card {
  // border: solid 0.1rem #aaa;
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 1rem;
  box-shadow: rgb(0 0 0 / 40%) 0rem 0rem 0.7rem 0rem;
  background-color: #fff;

  img {
    object-fit: cover;
    // width: 100%;
    // height: 30%;
    width: 20rem;
    height: 20rem;
    border-radius: 0.5rem;
    cursor: zoom-in;

    &:fullscreen {
      cursor: zoom-out;
      object-fit: contain;
    }
  }
}

.card-elements {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 19rem;
  max-width: 20rem;
}

.scroll-button {
  box-sizing: content-box;
  // width: 5rem;
  height: 3rem;
  background-color: white;
  border: none;
  border-radius: 999px;
  padding: 0.5rem;
  box-shadow: #00000094 0.3rem 0.3rem 0.8rem 0rem;
  cursor: pointer;
  position: absolute;
  z-index: 10;

  svg {
    width: 3rem;
    height: 3rem;
  }
}

#scroll-right {
  right: 1rem;
}

#scroll-left {
  left: 1rem;
  display: none;
}

.description {
  margin-block: 1.2rem;
}

.price {
  color: #000b;
  font-size: 1.5rem;
  margin-block: 1rem;
}

.buy {
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  background-color: var(--brand-color-slightly-dark);
  color: #fff;
  // border: solid 0.1rem var(--brand-color-dark);
  border: none;
  box-shadow: 0.1rem 0.1rem 0.6rem 0px #00000057;
  padding: 1rem 1.8rem;
  border-radius: 0.5rem;
  margin-inline: auto;
  margin-block: 0.4rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--brand-color-light-accessible);
  }
}
</style>
