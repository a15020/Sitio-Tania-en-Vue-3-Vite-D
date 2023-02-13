<script>
import storeProducts from '../assets/site-data/products.json';
Object.freeze(storeProducts);

export default {
  data() {
    return {};
  },

  computed: {
    sections() {
      const sectionsArr = [];
      for (let product of storeProducts) {
        console.log(product);
        console.log(product.section);
        if (sectionsArr.indexOf(product.section) === -1) {
          sectionsArr.push(product.section);
        }
      }
      console.log(sectionsArr);
      return sectionsArr;
    },
  },

  methods: {},

  mounted() {},

  watch: {},

  props: {
    product: Object,
  },

  components: {},
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
        <li>
          <a href="#destacados"> Destacados </a>
        </li>
        <li v-for="section in sections">
          <a :href="'#' + section"> {{ section }} </a>
        </li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>
  </header>
</template>
