// header.component.ts
import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})
export class HeaderComponent implements OnInit {
  activeSection = '';

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.activeSection$.subscribe(section => {
      this.activeSection = section;
    });
  }
}
