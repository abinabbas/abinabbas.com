import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  public isDarkmode: boolean;

  constructor() {}

  ngOnInit(): void {}

  changeTheme(): void {
    let isDarktheme = document.getElementsByTagName('body')[0].classList.contains('night');
    isDarktheme ? document.getElementsByTagName('body')[0].classList.remove('night') : document.getElementsByTagName('body')[0].classList.add('night')
  }

}
