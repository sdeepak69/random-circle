import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any = [];
  color:string = '';
  letters:any = '0123456789ABCDEF';
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getData().subscribe((data)=>{
      console.log(data);
      this.users = data;
    });
  }

  public randomColor(){
    this.color = '#';
    for (var i = 0; i < 6; i++) {
        this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    console.log("color", this.color);
    return this.color;
  }

  public getShortName(fullName) { 
    return fullName.split(' ').map(n => n[0]).join('');
  }

  public randomPos(){
    return Math.floor((Math.random() * 90) + 1) + "%";
  }

}
