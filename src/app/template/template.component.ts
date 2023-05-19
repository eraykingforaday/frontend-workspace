import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent {
  constructor() {
    // Called first time before the ngOnInit()
 }

 ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges() 
 }
}
