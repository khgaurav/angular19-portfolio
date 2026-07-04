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
  isHome: boolean = true;

  constructor(
    private scrollService: ScrollService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.isHome = this.router.url === '/' || this.router.url.startsWith('/#');
    });
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

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
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
