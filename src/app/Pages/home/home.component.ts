import { Component } from '@angular/core';
import { Continent } from 'src/app/Interfaces/Continent';
import { ContinentsService } from 'src/app/Services/continents.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  continents:Continent[]
  constructor(private continentsService:ContinentsService){
    this.continents = continentsService.getAll()
  }
}
