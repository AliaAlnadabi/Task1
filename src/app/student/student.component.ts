import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  Mark: number=0;

  studentList: any[] = [
    { Name:'Alia ', Email:'Alia@gmail.com ', Mark: 90},
    { Name:'Salma ', Email:'Salma@gmail.com', Mark: 40},
    { Name:'Ahmed ', Email:'Ahmed@gmail.com ', Mark: 55},
    { Name:'Sameer ', Email:'Sameer@gmail.com', Mark: 15},
    
  ];

  getMarkColor(Mark: number): string {
    return Mark < 50 ? 'red-text' : 'green-text';
  }

  getPassFailStatus(Mark: number): string {
    return Mark >= 50 ? 'PASS' : 'FAIL';
}
getStyle(): any {
  // Your custom logic to determine the style object
  // For example, let's apply a blue background color and white text color:
  return {
    'background-color': '#D3D3D3',
    // 'color': 'white',
    'padding': '10px',
    'text-align': 'center',
  };
}
}