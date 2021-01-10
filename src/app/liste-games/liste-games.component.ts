import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-liste-games',
  templateUrl: './liste-games.component.html',
  styleUrls: ['./liste-games.component.css']
})
export class ListeGamesComponent implements OnInit {
  title = 'tnp';
  games:any[]=[];
  name:String="";
  game:any;
  constructor(private http: HttpClient,private router:Router){  }

  ngOnInit(): void { 
   this.http.get<any[]>(environment.api).subscribe((res:any) =>this.games=res,
   error=>console.log(error));

  }

  /*getGame(name){
    this.http.get(environment.api+"/game"+`/${name}`).subscribe((res:any) =>this.game=res,
    error=>console.log(error));
  }*/
}
