import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class AppComponent implements OnInit {
  title = 'Gaurav Kothamachu Harish - Robotics Engineer';
  sections = [
    { id: 'hero', name: 'Home' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' }
  ];

  activeSection = '';

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.init(
      this.sections.map(s => s.id),
      'scrollProgress'
    );

    this.scrollService.activeSection$.subscribe(section => {
      this.activeSection = section;
    });
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
