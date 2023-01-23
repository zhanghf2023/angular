import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public flag: boolean = true;
  ngOnInit(): void {
    //组件和指令初始化完成,并不是真正的dom加载完成

    //原生DOM取得方式,注意:如果有angluer组件的话,就无法获取DOM.
    //因为angular还没初期完毕.
    let oBox: any = document.getElementById('box');

    console.log(oBox?.innerHTML);
    if (oBox) {
      oBox.style.color = "red"
    }

    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //原生DOM取得方式,注意:这个函数是在angular初期之后调用的.
    let oBox1: any = document.getElementById('box1');

    console.log(oBox1?.innerHTML);
    if (oBox1) {
      oBox1.style.color = "blue"
    }
  }

}
