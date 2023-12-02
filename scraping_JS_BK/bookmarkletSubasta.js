javascript:(function() {
    function obtenerLotesPorCategoriaOrdenados() {
        const LOTES = document.querySelectorAll('li.ast-article-post');
        const LOTES_POR_CATEGORIA = {};
        LOTES.forEach((elemento, indice) => {
            const AGOTADO = elemento.classList.contains("outofstock");
            const AGOTADO_TEXTO = elemento.querySelector('.ast-shop-product-out-of-stock');
            if (!AGOTADO_TEXTO && !AGOTADO) {
                const nombreLoteElemento = elemento.querySelector('.woocommerce-loop-product__title');
                if (nombreLoteElemento) {
                    const nombreLote = nombreLoteElemento.textContent.trim();
                    const primeraPalabra = nombreLote.split(' ')[0];
                    const categoria = primeraPalabra.toLowerCase();
                    const enlace = elemento.querySelector('a');
                    const precioElemento = elemento.querySelector('.woocommerce-Price-amount bdi');
                    if (enlace && precioElemento) {
                        const enlaceWeb = enlace.href;
                        const precio = parseFloat(precioElemento.childNodes[1].textContent.trim().replace(',', '.'));
                        if (!LOTES_POR_CATEGORIA[categoria]) {
                            LOTES_POR_CATEGORIA[categoria] = [];
                        }
                        LOTES_POR_CATEGORIA[categoria].push({
                            nombre: nombreLote,
                            enlace: enlaceWeb,
                            precio: precio
                        });
                    }
                }
            }
        });

        for (const categoria in LOTES_POR_CATEGORIA) {
            LOTES_POR_CATEGORIA[categoria].sort((a, b) => a.precio - b.precio);
        }
        return LOTES_POR_CATEGORIA;
    }
    
    function descargarDatosComoArchivo(datos, nombreArchivo) {
        const contenido = JSON.stringify(datos, null, 2);
        const blob = new Blob([contenido], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
    
        const link = document.createElement('a');
        link.href = url;
        link.download = nombreArchivo + '.json';
        link.click();
    
        URL.revokeObjectURL(url);
    }
    
    const lotesPorCategoriaOrdenados = obtenerLotesPorCategoriaOrdenados();
    descargarDatosComoArchivo(lotesPorCategoriaOrdenados, 'datos_lotes');
})();
