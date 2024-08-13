import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
courses = [
  {
      id: 1,
      name: "JavaScript for beginners",
      author: "John Doe",
      type: "Free",
      price: 0,
      duration: "4 weeks",
      description: "In this course you will learn the fundamentals of JavaScript. This course is pur...",
      image: "1.png"
  },
  {
      id: 2,
      name: "Angular for beginners",
      author: "Jane Smith",
      type: "Premium",
      price: 129,
      duration: "6 weeks",
      description: "In this course you will learn the fundamentals of Angular framework. This course...",
      image: "2.png"
  },
  {
      id: 3,
      name: "React for beginners",
      author: "Emily Johnson",
      type: "Free",
      price: 0,
      duration: "5 weeks",
      description: "In this course you will learn the fundamentals of React. This course is purely d...",
      image: "3.png"
  },
  {
      id: 4,
      name: "Vue.js for beginners",
      author: "Michael Brown",
      type: "Free",
      price: 0,
      duration: "3 weeks",
      description: "In this course you will learn the basics of Vue.js, a progressive JavaScript...",
      image: "4.png"
  },
  {
      id: 5,
      name: "Node.js for beginners",
      author: "Sarah Davis",
      type: "Premium",
      price: 99,
      duration: "4 weeks",
      description: "In this course you will explore Node.js, a JavaScript runtime built on Chrome's...",
      image: "5.jpg"
  }
]

getTotalCourses(){
  return this.courses.length;
}

getFreeCourses(){
  return this.courses.filter(course => course.type === 'Free').length;
}
getPremiumCourses(){
  return this.courses.filter(course => course.type === 'Premium').length;
}


courseCountRadioButton: string =  'All';

onfilterradiobuttonchange(data: string){
  this.courseCountRadioButton = data;
  
}

text : string = '' ; 

onSearchedOutput(searchValue: string){
this.text = searchValue;

}

}
