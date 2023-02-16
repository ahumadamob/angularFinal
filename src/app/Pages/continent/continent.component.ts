import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/Interfaces/Country';
import { CountriesService } from 'src/app/Services/countries.service';


@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent {
  id:string
  countries!:Country[]
  constructor(private activatedRoute: ActivatedRoute, private countriesService:CountriesService){
    this.id = this.activatedRoute.snapshot.paramMap.get("id") || ""
    this.init()
  }
  
  async init(){
    try{
      const response:any = await this.countriesService.findByContinent(this.id)
      this.countries = response   
    }catch(e){
      console.log(e)
    }    
  }
}
