import Route from '@ember/routing/route';

export default class BolsaFamiliaRoute extends Route {
  queryParams = {
    ano: {
      refreshModel: true
    },
    codigoIbge: {

    }
  };

  async model() {
    let response = await fetch('http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=' + 
    202002 + '&codigoIbge=' + 2611606 + '%20&pagina=1');
    let parsed = await response.json();
    return parsed[0];
  }
}