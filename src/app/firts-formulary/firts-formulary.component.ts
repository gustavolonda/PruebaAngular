import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-firts-formulary',
  templateUrl: './firts-formulary.component.html',
  styleUrls: ['./firts-formulary.component.css']
})
export class FirtsFormularyComponent implements OnInit {
status= "El formulario no ha sido envido"
defaultName = ""
user = ""
displayPassword = false
lightStatus = "GREEN"
names = ['Alberto','Marta', 'Maria', 'Marcos']
courses = []
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    //this.courses = this.courseService.getCourses()
    //console.log(this.courses)
    this.courseService.getCourses().subscribe(data=>this.courses=data)
  }
  OnSendForm(email) {
    console.log(this.courses)
    this.status= "El formulario ha sido envido " +email.value
  }
  OnDefaultForm() {
  this.defaultName = "Alberto"
  this.displayPassword = true
  
}
//@Input() parentDataToChild
@Input('parentDataToChild') messageFromParent 
@Output() childEvent = new EventEmitter();
OnSendEvent() {
  this.childEvent.emit("Enviando evento desde hijo hasta padre")
  
}
}
