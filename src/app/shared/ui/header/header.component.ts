import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('headerContainer') headerContainer: ElementRef = {} as ElementRef;
  @HostListener('window:scroll', ['$event']) onWindowScroll($event: Event) {
    this.changeHeaderBackground(this.headerContainer, window.pageYOffset);
  }

  private changeHeaderBackground(elem: ElementRef, windowYScrollPos: number) {
    const headerBgColor =
      windowYScrollPos == 0
        ? 'rgba(159, 168, 218, 1)'
        : 'rgba(159, 168, 218, 0.2)';
    elem.nativeElement.style.backgroundColor = headerBgColor;
  }
}
