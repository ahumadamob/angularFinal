import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Country } from '../Interfaces/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient) { }
  
  findByContinent(id:string){
    return lastValueFrom(this.http.get(`https://restcountries.com/v3.1/region/${id}`))
  }

  getById(id:string):Promise<Country[]>{
    return lastValueFrom(this.http.get<Country[]>(`https://restcountries.com/v3.1/alpha/${id}`))
  }

}
