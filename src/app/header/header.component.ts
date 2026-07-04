import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollService } from '../services/scroll.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class HeaderComponent implements OnInit {
  activeSection = '';
  isDarkMode: boolean = true;
  isMobileMenuOpen: boolean = false;
  isHome: boolean = true;

  constructor(
    private scrollService: ScrollService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.isHome = this.router.url === '/' || this.router.url.startsWith('/#');
      this.closeMobileMenu();
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.renderer.addClass(this.document.body, 'menu-open');
    } else {
      this.renderer.removeClass(this.document.body, 'menu-open');
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.renderer.removeClass(this.document.body, 'menu-open');
  }

  ngOnInit() {
    this.scrollService.activeSection$.subscribe(section => {
      this.activeSection = section;
    });

    this.initializeTheme();
  }

  initializeTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.isDarkMode = storedTheme === 'dark';
    } else {
      this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  clickCoords = { x: 0, y: 0 };

  setClickCoords(event: MouseEvent) {
    if (event.clientX && event.clientY) {
      this.clickCoords.x = event.clientX;
      this.clickCoords.y = event.clientY;
    }
  }

  toggleTheme() {
    const x = this.clickCoords.x || window.innerWidth / 2;
    const y = this.clickCoords.y || window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);
    document.documentElement.style.setProperty('--r', `${endRadius}px`);

    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        this.applyTheme();
      });
    } else {
      this.applyTheme();
    }
  }

  applyTheme() {
    if (this.isDarkMode) {
      this.renderer.removeClass(this.document.body, 'light-mode');
    } else {
      this.renderer.addClass(this.document.body, 'light-mode');
    }
  }

  printPage() {
    window.print();
  }
}
