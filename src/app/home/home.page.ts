import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public eggsList = [
    {
      title: 'coque',
      image: 'img/oeuf-coque.jpg',
      timer: 180,
    },
    {
      title: 'mollet',
      image: 'img/oeuf-mollet.jpg',
      timer: 300,
    }
  ]
  public chosenEgg = null;
  private audio: HTMLAudioElement = null;
  public file = '/assets/son/bird.mp3';
  public secondsLeft = null;
  public timer = null;

  public changebutton = true;
  public guessEgg(clickedEgg) {
    this.chosenEgg = clickedEgg
  }
  

  constructor(private toastCtrl: ToastController) { }


  public action() {
    if (this.changebutton) {
      this.changebutton = !this.changebutton;
      this.play()
    } else {
      this.stop()
      this.changebutton = !this.changebutton;
    }

  }

  
  public play() {
   // console.log(this.chosenEgg)
    this.startTimer();
    
  
  }

  public stop() {
    clearInterval(this.timer)
    this.secondsLeft = 0;
    this.chosenEgg=null;
    
  }


  private  startTimer() {
    this.secondsLeft = this.chosenEgg.timer
    this.timer = setInterval(
     async() => {
        this.secondsLeft--;
        let message = this.chosenEgg.title + ' ' + this.secondsLeft;
        const toast = await this.toastCtrl.create({
          message:message,
          position:'middle',
          color:"warning", 
        });
        toast.present()
        
        
       

       // console.log(this.secondsLeft)
        if (this.secondsLeft == 0) {
          this.audio = new Audio(this.file)
          this.audio.load();
          this.audio.play();  
          clearInterval(this.timer);
         
        
        }
      }, 1000
    )

  }


}
