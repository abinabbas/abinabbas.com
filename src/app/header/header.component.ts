import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private handEmoji: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.handEmoji = document.querySelector('.wave-hand');
  }

  ngAfterViewInit(): void {
    this.wave();
    this.handEmoji.addEventListener('touchend', () => this.wave());
  }

  wave(): void {
    this.handEmoji.classList.add('wave');
    setTimeout(() => {
      this.handEmoji.classList.remove('wave');
    }, 1000);
  }
}
