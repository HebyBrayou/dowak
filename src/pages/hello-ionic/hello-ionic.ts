import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage {

  posts = [];

  constructor() {}

  ionViewDidLoad() {
    this.posts = [
      {
        title: 'Sirop',
        description: 'Trying out digital painting',
        image: 'assets/imgs/sirop.svg'
      },
      {
        title: 'Comprimé',
        description: 'Trying out digital painting',
        image: 'assets/imgs/comprime.svg'
      },
      {
        title: 'Pommade',
        description: 'Trying out digital painting',
        image: 'assets/imgs/pommade.svg'
      },
      {
        title: 'Injectable',
        description: 'Trying out digital painting',
        image: 'assets/imgs/injectable.svg'
      },
      {
        title: 'Poudre',
        description: 'Trying out digital painting',
        image: 'assets/imgs/poudre.svg'
      },
      {
        title: 'Goutes',
        description: 'Trying out digital painting',
        image: 'assets/imgs/goutes.svg'
      },
      {
        title: 'Gel',
        description: 'Trying out digital painting',
        image: 'assets/imgs/gel.png'
      },
      {
        title: 'Inhalator',
        description: 'Trying out digital painting',
        image: 'assets/imgs/inhalator.svg'
      },
      {
        title: 'Gellule',
        description: 'Trying out digital painting',
        image: 'assets/imgs/poudre.svg'
      },
      {
        title: 'Capsule molle',
        description: 'Trying out digital painting',
        image: 'assets/imgs/capsule.svg'
      }
    ];
  }

}
