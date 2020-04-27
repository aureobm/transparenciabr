import Route from '@ember/routing/route';

export default class RecordRoute extends Route {
  queryParams = {
    pagina: {
      refreshModel: true
    }
  };
  
  async model(params) {
	let pagina = 1;
	if(params.pagina) {
		pagina = params.pagina;
	}
    let response = await fetch('http://www.transparencia.gov.br/api-de-dados/emendas?pagina='+pagina);
    let parsed = await response.json();

    return parsed;
  }
}