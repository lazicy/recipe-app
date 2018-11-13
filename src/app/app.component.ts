import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDtX3EjaosjxMmUjKElPCTdH2d84OTW4aM",
      authDomain: "ng-recipe-book-6bbe5.firebaseapp.com"
    });
  }
}
