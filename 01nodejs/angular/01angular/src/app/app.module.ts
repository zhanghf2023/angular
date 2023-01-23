//这个模块告诉angular 如何组装应用

//angular的核心模块
import { NgModule } from '@angular/core';

//browerModule,浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//根组件
import { AppComponent } from './app.component';
import { NewsComponentComponent } from './component/news-component/news-component.component';

//@NgModule装饰器，接受一个元数据对象，告诉anglur如何编译和启动应用
@NgModule({
  declarations: [  //配置当前项目运行的组件
    AppComponent, NewsComponentComponent
  ],
  imports: [  //配置当前模块运行依赖的其他模块
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //配置项目所需的服务器。
  bootstrap: [AppComponent]//指定应用的主视图，通过引导appMoudle来启动应用，这里一般写的是根组件
})
export class AppModule { }
