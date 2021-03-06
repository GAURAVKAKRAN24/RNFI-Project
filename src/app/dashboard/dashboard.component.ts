import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user : any = {}
  loader : Boolean = false
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData') || '{}')
    console.log(this.user, typeof(this.user))
  }

  logout(){
    localStorage.clear()
    window.location.reload()
  }

}
