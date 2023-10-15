import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: {
        items: [],
        qty: 0,
        total: 0,
      },
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload.productData;
      const productIndexInCart = state.cart.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productIndexInCart >= 0) {
        state.cart.items[productIndexInCart].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += productData.price;
    },
    removeProductFromCart(state, payload) {
      console.log(state.cart.items);
      const productIndexInCart = state.cart.items.findIndex(
        (ci) => ci.productId === payload.id
      );
      const product = state.cart.items[productIndexInCart];
      console.log(product);
      // state.cart.qty -= product.qty;
      // state.cart.total -= product.price * product.qty;
      // delete state.cart.items[productIndexInCart];
    },
  },
  getters: {
    quantityGetter(state) {
      return state.cart.qty;
    },
    totalGetter(state) {
      return state.cart.total;
    },
    itemsGetter(state) {
      return state.cart.items;
    },
  },
});

export default store;
