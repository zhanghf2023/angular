import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //接收父组件传来的值
  @Input() public title: string | undefined;
  //接收父组件传来的值
  @Input() public msg: string | undefined;
  //接收父组件传来的方法
  @Input() public run: any | undefined;
  //接收父组件传来的组件
  @Input() public home: any | undefined;

  constructor() {

  }

  getParentMsg() {
    alert(this.msg);
  }

  getParentRun() {
    //执行父组件的run方法
    this.run();
    this.home.run();
  }

}
