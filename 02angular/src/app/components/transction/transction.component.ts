import { Component } from '@angular/core';

@Component({
  selector: 'app-transction',
  templateUrl: './transction.component.html',
  styleUrls: ['./transction.component.scss']
})
export class TransctionComponent {

  showAside() {
    var asideDom: any = document.getElementById('aside');
    asideDom.style.transform = "translate(0,0)";
  }
  hideAside() {
    var asideDom: any = document.getElementById('aside');
    asideDom.style.transform = "translate(100%,0)";
  }

}
