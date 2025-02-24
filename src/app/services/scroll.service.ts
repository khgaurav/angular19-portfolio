import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private activeSection = new BehaviorSubject<string>('');
  activeSection$ = this.activeSection.asObservable();

  private sections: HTMLElement[] = [];
  private scrollProgress!: HTMLElement;

  init(sections: string[], scrollProgressId: string) {
    this.sections = sections.map(id => document.getElementById(id)!);
    this.scrollProgress = document.getElementById(scrollProgressId)!;
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  private handleScroll() {
    // Update progress bar
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight -
                   document.documentElement.clientHeight;
    this.scrollProgress.style.width = (winScroll / height) * 100 + "%";

    // Update active section
    const scrollPosition = window.scrollY + 100;

    this.sections.filter(section => section !== null).forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight) {
        this.activeSection.next(section.id);
      }
    });
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
