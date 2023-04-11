import { Component } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {
  public departmentId:any ;

  constructor(private route:ActivatedRoute,private router:Router){}

 ngOnInit(){
  let id = parseInt(this.route.snapshot.paramMap.get('id')??'');

  this.departmentId = id;
 }

 gotoOverview(){
  this.router.navigate(['overview'],{relativeTo:this.route})

 }

 gotoContact(){
  this.router.navigate(['contact'],{relativeTo:this.route})
 }

}
