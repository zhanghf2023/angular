import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  @ViewChild('footer') footer: any;

  getSubMsg() {
    //获取子组件的MSG
    alert(this.footer.msg);
  }

  exeSubMethod() {
    //执行子组件的RUN方法
    this.footer.run();
  }

  //通过@Output实现子组件的通信
  runSub(e: any) {
    alert(e);

  }

}
