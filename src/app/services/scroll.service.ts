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
  private isThrottled = false;

  init(sections: string[], scrollProgressId: string) {
    this.sections = sections.map(id => document.getElementById(id)!).filter(el => el !== null);
    this.scrollProgress = document.getElementById(scrollProgressId)!;
    window.addEventListener('scroll', this.throttledHandleScroll.bind(this), { passive: true });
  }

  private throttledHandleScroll() {
    if (this.isThrottled) return;
    
    this.isThrottled = true;
    requestAnimationFrame(() => {
      this.handleScroll();
      this.isThrottled = false;
    });
  }

  private handleScroll() {
    // Update progress bar
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (this.scrollProgress && height > 0) {
      this.scrollProgress.style.width = `${(winScroll / height) * 100}%`;
    }

    // Update active section
    const scrollPosition = window.scrollY + 100;

    for (const section of this.sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.activeSection.next(section.id);
        break; // Exit early when active section is found
      }
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
