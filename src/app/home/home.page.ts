import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public eggsList = [
    {
      title:'coque',
      image:'img/oeuf-coque.jpg',
    },
    {
      title:'mollet',
      image:'img/oeuf-mollet.jpg', 
    }
  ]
  public chosenEgg =null;
  private audio:HTMLAudioElement = null;
  public file = '/assets/son/bird.mp3'


  public guessEgg(clickedEgg){
   this.chosenEgg= clickedEgg
  }
  

  constructor() {}

  public play(){
   console.log(this.chosenEgg)
    
   this.audio =new Audio(this.file)
   this.audio.load();
   this.audio.play();

  }


}
