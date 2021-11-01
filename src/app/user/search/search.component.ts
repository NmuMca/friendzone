import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Options } from 'selenium-webdriver';
import { Router, ActivatedRoute } from '@angular/router';   
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name:any;
  people:any = [];
  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
  }

  UserData(event:any){
    this.name = event;
    
    let headers = new Headers();
    headers.append('Contetn-Type','application/json');
    
    this.http.get<any>('http://127.0.0.1:8000/people/'+this.name)
    .subscribe((result)=>{
     this.people = result;
    });

  }

}
