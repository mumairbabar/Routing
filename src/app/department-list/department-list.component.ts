import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  departments: {"id":number,"name":string}[]=[
    {"id":1,"name":"RPA"},
    {"id":2,"name":"Extractor"},
    {"id":3,"name":"SEO"},
    {"id":4,"name":"Content"}
  ]

  constructor(private router:Router){}

   onselect(department: any){
    this.router.navigate(['/departments',department.id])

   }
}
