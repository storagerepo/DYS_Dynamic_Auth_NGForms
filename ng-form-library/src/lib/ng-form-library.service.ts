import { Injectable } from '@angular/core';
import countries from './datas/countries.json';
import states from './datas/states.json';

@Injectable({
  providedIn: 'root'
})
export class NgFormLibraryService {

  constructor() { }

  private getCoutryId(name: string) {
    const countrycode = countries.find(id => {
      return id.name == name
    })
    return countrycode.id;
  }

  public getStatesUsingCountryName(name: string) {
    var id = this.getCoutryId(name);
    var statesarray = []
    states.forEach(state => {
      (state.countryid == id) ? statesarray.push({ "text": state.name, "value": state.name }) : ''
    })
    return statesarray.sort((state1, state2) => state1.text.toLowerCase().localeCompare(state2.text.toLowerCase()));
  }
}
