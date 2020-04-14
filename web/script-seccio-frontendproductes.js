
class ObjSeccioFrontendProductes {

    constructor () {
    }

    async iniciaSeccio () {
        let refLoading = document.getElementById('productesLoading'),
            refContinguts = document.getElementById('productesContinguts'),
            objRebut = null,
            valor = null,
            codiHTML = '',
            cntProducte = 0

        // Amaguem els continguts actuals i mostrem la càrrega
        refContinguts.style.display = 'none'
        refLoading.style.display = 'flex'

        // Demanem el llistat de productes al servidor
        objRebut = await promiseCallServer('POST', '/call/llistatProductes', {})

        // Transformem l'objecte rebut en codi HTML
        if (objRebut.resultat === 'ok') {
            for (cntProducte = 0; cntProducte < objRebut.missatge.length; cntProducte = cntProducte + 1) {
                valor = objRebut.missatge[cntProducte]
                codiHTML = codiHTML + '<div class="prods">'
                codiHTML = codiHTML + '<div class="prodnom"> <b>' + valor.nom +'</b> </div>'
                codiHTML = codiHTML + '<img class="prodimg" src="' + valor.imatge + '" width="200" />'
                codiHTML = codiHTML + '<div class="proddesc">' + valor.descripcio + '</div>'
                codiHTML = codiHTML + '<div class="proddesc">' + valor.preu + '€</div>'
                codiHTML = codiHTML + '<hr/>'
                codiHTML = codiHTML + '</div>'
            }
        }

        // Amaguem la càrrega i mostrem el llistat de productes
        refContinguts.innerHTML = codiHTML
        refContinguts.style.display = 'flex'
        refLoading.style.display = 'none'
    }
}
