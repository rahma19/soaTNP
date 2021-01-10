import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
name:any;
game:any;
currentRate = 8;
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.name= this.activatedRoute.snapshot.params['name'];
    this.http.get(environment.api+"/game"+`/${this.name}`) .subscribe((res)=>{
      this.game=res;
  })
  }
}
