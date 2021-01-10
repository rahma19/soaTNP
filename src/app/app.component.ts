import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tnp';
  games:any[]=[];
  constructor(private http: HttpClient,private router:Router){  }

  ngOnInit(): void { 
   this.http.get<any[]>(environment.api).subscribe((res:any) =>this.games=res,
   error=>console.log(error));

  }
}
