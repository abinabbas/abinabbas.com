import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isDarkmode: boolean;

  constructor() { }

  ngOnInit(): void {}

  wave(): void{
    console.log('mouse event');
    document.querySelector('.emoji.wave-hand').classList.add('wave');
    setTimeout(() => {
      document.querySelector('.emoji.wave-hand').classList.remove('wave');
    }, 1000);
  }

}
