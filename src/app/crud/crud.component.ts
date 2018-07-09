import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from './crud.service';
import { crud } from './crud';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  firstName : string;
  lastName : string;
  age : number;
  dept : string;
  salary: number;
  
  @Input() crudValue; 

  lists  = new Array();

  crud : crud = new crud();
  flag = false;
  constructor(private crudService : CrudService) { }
  
  ngOnInit() {
    // this.crudService.getData().snapshotChanges().subscribe(item=>{
      //   item.forEach(element=>{
        //     let y = element.payload.toJSON();
        //     y['id'] = element.key;
        //      this.lists.push(y as crud);
        //     //this.lists.push(element.payload.toJSON())
        //   });
        // })
        // console.log(this.crudValue.Dept);
      }
      
      onSubmit(){
        if(this.flag){
          this.crud.id = this.crudValue.id;
          this.crud.firstName = this.crudValue.FirstName;
          this.crud.lastName = this.crudValue.LastName;
          this.crud.age = this.crudValue.Age;
          this.crud.dept = this.crudValue.Dept;
          this.crud.salary = this.crudValue.Salary;
          this.crudService.updateData(this.crud);
          // console.log(this.crud);
          this.crudValue = undefined;
        }else{
          this.crud.firstName = this.firstName;
          this.crud.lastName = this.lastName;
          this.crud.age = this.age;
          this.crud.dept = this.dept;
          this.crud.salary = this.salary;
          this.crudService.insertData(this.crud);
        }
        this.firstName = '';
        this.lastName = '';
        this.age = undefined;
        this.dept = '';
        this.salary = undefined;
      }
      
      onReset(){
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.dept = '';
        this.salary = 0;
      }
      
      ngOnChanges(){
        // console.log(this.crudValue);
        if(this.crudValue != undefined){
          this.flag = true;
          this.firstName = this.crudValue.FirstName;
          this.lastName = this.crudValue.LastName;
          this.age = this.crudValue.Age;
          this.dept = this.crudValue.Dept;
          this.salary = this.crudValue.Salary;
        }
      }
      
}
