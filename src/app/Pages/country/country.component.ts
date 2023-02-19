import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/Interfaces/Country';
import { CountriesService } from 'src/app/Services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  id:string
  country!:Country
  constructor(private activatedRoute:ActivatedRoute, private countriesService:CountriesService){
    this.id = this.activatedRoute.snapshot.paramMap.get("id") || ""
    this.init()
  }

  async init(){
    try{
      //this.country = await this.countriesService.getById(this.id)
      const response:Country[] = await this.countriesService.getById(this.id)
      //console.log(response)
      this.country = response[0]
      console.log(this.country)
    }catch(e){
      console.log(e)
    }    
  }  

}
