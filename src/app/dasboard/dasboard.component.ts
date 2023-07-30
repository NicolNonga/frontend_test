import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  constructor(private http:HttpClient) { }

  totalDashboard: any
  ngOnInit(): void {
    this.dashboard()
  }

 public dashboard(){
  this.http.get(`${environment.url}/dashboard`).subscribe((response)=>{
     this.totalDashboard= response
    console.log(response)
  })
 }

}
