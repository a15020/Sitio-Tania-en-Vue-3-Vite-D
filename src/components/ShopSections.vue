<script>
import storeProducts from '../assets/site-data/products.json';

export default {
  data() {
    return {
      Products: storeProducts,
    };
  },

  computed: {
    sections() {
      const sectionsArr = [];
      for (product in storeProducts) {
        if (storeProducts.indexOf(product.section) === -1) {
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

  components: {
    ShopSection,
  },
};
</script>

<template>
  <ShopSection v-for="section in section"></ShopSection>
</template>
