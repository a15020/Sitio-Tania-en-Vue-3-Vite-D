import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
// import './javascript/js-main.js';

const Home = { template: '<div>Home</div>' };
const Cart = { template: '<div>Cart</div>' };

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
];

// 3. Create the router instance and pass the `routes` option
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

createApp(App).mount('#app');

// Make sure to _use_ the router instance to make the
// whole app router-aware.
App.use(router);

App.mount('#app');

// Now the app has started!

console.log('js-main.js loaded');

const colorPicker = document.querySelector('#color-picker');
const secondaryColorPicker = document.querySelector('#secondary-color-picker');

/*
--brand-color: hsl(176deg 43% 32%);
  --brand-color-dark: hsl(176deg 43% 17%);
  --brand-color-slightly-dark: hsl(176deg 43% 30%);
  --brand-color-light: hsl(176deg 43% 46%);
  --brand-color-light-accessible: hsl(176deg 43% 35%);
  --brand-color-lighter: hsl(176deg 43% 86%);
  --secondary-color: hsl(158deg 89% 37%);
  */
let brandColor = 'hsl(176deg 43% 32%)';
let brandColorDark = 'hsl(176deg 43% 17%)';
let brandColorSlightlyDark = 'hsl(176deg 43% 30%)';
let brandColorLight = 'hsl(176deg 43% 46%)';
let brandColorLightAccessible = 'hsl(176deg 43% 35%)';
let brandColorLighter = 'hsl(176deg 43% 86%)';
let secondaryColor = 'hsl(158deg 89% 37%)';

colorPicker.value = '#2f7570';
secondaryColorPicker.value = '#0ab275';

colorPicker.addEventListener('change', () => {
  document.documentElement.style.setProperty(
    '--brand-color',
    colorPicker.value
  );

  let brandColorLightNew = hexToCssHsl(colorPicker.value, true);
  brandColorLightNew[2] += 11;

  let brandColorLightAccessibleNew = hexToCssHsl(colorPicker.value, true);
  brandColorLightAccessibleNew[2] += 5;

  let brandColorLighterNew = hexToCssHsl(colorPicker.value, true);
  brandColorLighterNew[2] += 44;

  let brandColorDarkNew = hexToCssHsl(colorPicker.value, true);
  brandColorDarkNew[2] -= 15;

  let brandColorSlightlyDarkNew = hexToCssHsl(colorPicker.value, true);
  brandColorSlightlyDarkNew[2] -= 5;

  document.documentElement.style.setProperty(
    '--brand-color-light',
    hslToHex(...brandColorLightNew)
  );

  document.documentElement.style.setProperty(
    '--brand-color-light-accessible',
    hslToHex(...brandColorLightAccessibleNew)
  );

  document.documentElement.style.setProperty(
    '--brand-color-lighter',
    hslToHex(...brandColorLighterNew)
  );

  document.documentElement.style.setProperty(
    '--brand-color-dark',
    hslToHex(...brandColorDarkNew)
  );
  document.documentElement.style.setProperty(
    '--brand-color-slightly-dark',
    hslToHex(...brandColorSlightlyDarkNew)
  );
});

secondaryColorPicker.addEventListener('change', () => {
  document.documentElement.style.setProperty(
    '--secondary-color',
    secondaryColorPicker.value
  );
});

function hexToCssHsl(hex, valuesOnly = false) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);
  var cssString = '';
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  if (valuesOnly) {
    return [h, s, l];
  }
  cssString = h + ',' + s + '%,' + l + '%';
  cssString = !valuesOnly ? 'hsl(' + cssString + ')' : cssString;

  return cssString;
}

function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// scroll thing
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
