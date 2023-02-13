<script>
import storeProducts from '../assets/site-data/products.json';
import ShopSection from './ShopSection.vue';
Object.freeze(storeProducts);

console.log(storeProducts);

export default {
  data() {
    return {};
  },

  computed: {
    sections,

    productsOrganizedBySection,

    destacados() {
      return storeProducts.filter((product) => product.destacado);
    },
  },

  methods: {},

  mounted() {},

  watch: {},

  // props: {
  //   msg: String,
  // },

  // emits: ['shopSection'],

  // created() {
  //   this.$emit(
  //     'shopSection',
  //     Products.json(),
  //     filter((product) => product.section === 'destacados')
  //   );
  // },

  components: {
    ShopSection,
  },
};

function sections() {
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
}

function productsOrganizedBySection() {
  const Products = {};
  const Sections = sections();
  for (let product of storeProducts) {
    for (let section of Sections) {
      if (product.section === section) {
        Products[section] = [];
        Products[section].push(
          storeProducts.filter((product) => product.section === section)
        );
      }
    }
  }
  console.log(Products);
  return Products;
}
const pRoducts = productsOrganizedBySection();

const sEctions = sections();

console.log(sEctions[0]);
console.log(sEctions[1]);
console.log(pRoducts[sEctions[0]]);
console.log(pRoducts[sEctions[1]]);
console.log(pRoducts[sEctions[0]][0]);
// console.log(pRoducts[sEctions[1]][0]);
</script>

<template>
  <!-- Destacados -->
  <ShopSection :Products="destacados" :sectionName="'destacados'"></ShopSection>

  <ShopSection
    v-for="section in sections"
    :Products="productsOrganizedBySection[section][0]"
    :sectionName="section"
  ></ShopSection>
</template>
