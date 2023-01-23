import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public msg: any = "我是子组件的MSG";

  @Output() public outter :any = new EventEmitter() ;

  run() {
    alert("我是子组件的RUN方法");
  }

  sendParent() {
    this.outter.emit('我是子组件的数据1');
  }

}
