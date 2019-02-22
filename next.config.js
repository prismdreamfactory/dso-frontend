module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/collection/boxes': {
        page: '/collection',
        query: { name: 'boxes', id: 1 }
      },
      '/collection/flower': {
        page: '/collection',
        query: { name: 'flower', id: 2 }
      },
      '/collection/concentrates': {
        page: '/collection',
        query: { name: 'concentrates', id: 3 }
      },
      '/collection/edibles': {
        page: '/collection',
        query: { name: 'edibles', id: 4 }
      },
      '/collection/vapes': {
        page: '/collection',
        query: { name: 'vapes', id: 5 }
      },
      '/collection/cbd': {
        page: '/collection',
        query: { name: 'cbd', id: 6 }
      },
      '/collection/accessories': {
        page: '/collection',
        query: { name: 'accessories', id: 7 }
      }
    };
  }
};
