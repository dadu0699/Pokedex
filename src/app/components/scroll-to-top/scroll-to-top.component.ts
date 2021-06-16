import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {
  public windowScrolled!: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  public onWindowScroll(): void {
    if (window.pageYOffset || document.documentElement.scrollTop
      || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  public scrollToTop(): void {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop
        || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 2.5));
      }
    })();
  }
}

