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
      image:'img/oeuf-coque.jpg'
    },
    {
      title:'mollet',
      image:'img/oeuf-mollet.jpg'

    }

  ]



  constructor() {}

}
