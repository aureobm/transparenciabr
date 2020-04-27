import Route from '@ember/routing/route';

export default class RecordRoute extends Route {
  async model() {
    let response = await fetch('http://www.transparencia.gov.br/api-de-dados/emendas?pagina=1');
    let parsed = await response.json();

    return parsed;
  }
}