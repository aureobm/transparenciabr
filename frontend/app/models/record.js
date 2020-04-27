import DS from 'ember-data';

export default DS.Model.extend({
  codigoEmenda: DS.attr(),
  ano: DS.attr(),
  autor: DS.attr()
});