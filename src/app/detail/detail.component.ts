import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.name= this.activatedRoute.snapshot.params['name'];
    this.http.get(environment.api+"/game"+`/${this.name}`) .subscribe((res)=>{
      this.game=res;
  })
  }
  Onclick(){
    this.game.rating=this.currentRate;
    return  this.http.put(environment.api+"/game" +`/${this.name}`,this.game).subscribe(
      (Response) => {
            //this.msgs = [{severity:'info', summary:'Succés de modification', detail:''}];
        console.log(this.game);
        console.log("success");
        this.router.navigate(['/liste']);
      },
        (error) =>{
               // this.msgs = [{severity:'error', summary:'Erreur lors de la modification', detail:''}];
         console.log("error");
    });
    //console.log(this.currentRate);
  }
}
