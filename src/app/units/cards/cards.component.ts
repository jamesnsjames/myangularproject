import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  
departments=[{
  id:1,
  title:"BFS",
  image:"../../../assets/download.png",
  desc:"hello"},



  {
    id:2,
    title:"cFS",
    image:"../../../assets/photo2.jpeg",
    desc:"hi"
  },


    {
      id:3,
      title:"dFS",
      image:"../../../assets/photo3.jpeg",
    desc:"how are you"},














  
  
  
  
  ]

}

