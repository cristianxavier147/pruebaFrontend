const Carrito = {
  namespaced: true,
  state: {
    carritoState: false,
    arrayProductos: [],
  },
  getters: {
    carritoStadoGet(state) {
      return state.carritoState;
    },
    totalProductosGet(state) {
      return state.arrayProductos;
    },
    totalValorYCantidadProductos(state) {
      let dataCantidad = {
        totalCantidad: 0,
        totalValor: 0,
      };

      for (let i = 0; i < state.arrayProductos.length; i++) {
        dataCantidad.totalCantidad += state.arrayProductos[i].dataModal.cantidadProductos;
        dataCantidad.totalValor += state.arrayProductos[i].subTotal;
      }
      return dataCantidad;
    },
  },
  mutations: {
    mostrarCarritoMutation(state) {
      state.carritoState = !state.carritoState;
    },
    addDataCarritoMutation(state, payload) {
      // si no hay nada en el carrito se suma al carrito
      if (state.arrayProductos.length == 0) {
        state.arrayProductos.push(payload);
      } else {
        // identificador para saber si existió en alguna ocasión una coincidencia, evita que se repita un producto
        let identificadorCoincidencia = false;
        // se recorre el carrito para saber si tiene productos en comun, si es así se suman los datos a los existentes
        for (let i = 0; i < state.arrayProductos.length; i++) {
          if (state.arrayProductos[i].dataModal.dataProducto.id == payload.dataModal.dataProducto.id) {
            identificadorCoincidencia = true;
            state.arrayProductos[i].dataModal.cantidadProductos += payload.dataModal.cantidadProductos;

            state.arrayProductos[i].subTotal += payload.subTotal;
          }
        }
        // Si no se identificó una coincidencia se añade otro producto al carrito
        if (!identificadorCoincidencia) {
          state.arrayProductos.push(payload);
        }
      }
    },
    cambiarCantidadYSubTotalMutation(state, payload) {
      for (let i = 0; i < state.arrayProductos.length; i++) {
        if (state.arrayProductos[i].dataModal.dataProducto.id == payload.id) {
          state.arrayProductos[i].dataModal.cantidadProductos = payload.cantidad;
          state.arrayProductos[i].subTotal = payload.subTotal;
        }
      }
    },
  },
  actions: {
    mostrarCarritoAction({ commit }) {
      commit("mostrarCarritoMutation");
    },
    addDataCarritoAction({ commit }, payload) {
      commit("addDataCarritoMutation", payload);
    },
    cambiarCantidadYSubTotalAction({ commit }, payload) {
      commit("cambiarCantidadYSubTotalMutation", payload);
    },
  },
};

export default Carrito;
