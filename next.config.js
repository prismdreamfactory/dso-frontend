module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      // '/product/1': { page: '/product', query: { id: '1' } },
      // '/product/2': { page: '/product', query: { id: '2' } },
      // '/product/3': { page: '/product', query: { id: '3' } },
      '/collection/flower': {
        page: '/collection',
        query: { name: 'flower', id: 1 }
      },
      '/collection/concentrates': {
        page: '/collection',
        query: { name: 'concentrates', id: 2 }
      },
      '/collection/edibles': {
        page: '/collection',
        query: { name: 'edibles', id: 3 }
      },
      '/collection/vapes': {
        page: '/collection',
        query: { name: 'vapes', id: 4 }
      },
      '/collection/cbd': {
        page: '/collection',
        query: { name: 'cbd', id: 5 }
      },
      '/collection/accessories': {
        page: '/collection',
        query: { name: 'accessories', id: 6 }
      }
    };
  }
};
