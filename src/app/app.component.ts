import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {email: "angel@gmail.com", importance: true, subject: "Programing", content: "coding is fun!"},
    {email: "CAR@gmail.com", importance: true, subject: "Algos", content: "Come to algos!"
    },
    {email: "Ariel@gmail.com", importance: false, subject:  "New Window", content: "Window 10 coming in summer"},
    {email: "alex@gmail.com", importance: false, subject: "party", content: "just kidding"}
  ]
}
