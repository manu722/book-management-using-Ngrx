import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isReceipe:boolean=true;
  loadedFeature='Receipes';
  navigate(feature:string){
    this.loadedFeature=feature;
    if(this.loadedFeature==='Receipes')this.isReceipe=true;
    else this.isReceipe=false;
  }
}
