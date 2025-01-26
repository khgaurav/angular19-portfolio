// contact.component.ts
import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  currentYear = new Date().getFullYear();
  isContactSectionVisible = false;

  @ViewChild('contactSection') contactSection!: ElementRef;

  ngAfterViewInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const rect = this.contactSection.nativeElement.getBoundingClientRect();
    this.isContactSectionVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
  }
}
