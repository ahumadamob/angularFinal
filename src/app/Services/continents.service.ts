import { Injectable } from '@angular/core';
import { Continent } from '../Interfaces/Continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  constructor() { }
  getAll():Continent[]{
    return [
      {id: "afri", name: "Africa"},
      {id: "ame", name: "América"},
      {id: "asia", name: "Asia"},
      {id: "eur", name: "Europa"},
      {id: "oce", name: "Oceanía"}
    ]
  }
}
