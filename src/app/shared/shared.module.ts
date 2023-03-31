import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './utils/primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './ui/header/header.component';
import { AnimateModule } from 'primeng/animate';
import { MainContainerComponent } from './ui/main-container/main-container.component';

@NgModule({
    declarations: [
    HeaderComponent,
    MainContainerComponent
  ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      PrimeNGModule,
      HttpClientModule,
      AnimateModule
    ],
    exports: [
      CommonModule,
      ReactiveFormsModule,
      PrimeNGModule,
      HttpClientModule,
      HeaderComponent,
      MainContainerComponent,
      AnimateModule
    ]
  })
  export class SharedModule { }
