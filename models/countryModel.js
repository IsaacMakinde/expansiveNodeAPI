class Country {
  constructor(data) {
    this.name = data.name;
    this.capital = data.capital;
    this.region = data.region;
    this.subregion = data.subregion;
    this.languages = data.languages;
    this.population = data.population;
    this.flags = data.flags;
    this.coatOfArms = data.coatOfArms;
    this.independent = data.independent;
    this.currencies = data.currencies;
    this.cca2 = data.cca2;
    this.ccn3 = data.ccn3;
    this.cca3 = data.cca3;
    this.cioc = data.cioc;
    this.unMember = data.unMember;
    this.translations = data.translations;
    this.maps = data.maps;
    this.border = data.borders;
  }
}

module.exports = Country;
