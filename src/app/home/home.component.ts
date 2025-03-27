import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ProjectsComponent,
    ExperienceComponent,
    // SkillsComponent
  ],
  template: `
    <main [@routeAnimations]>
      <section id="hero">
        <app-hero></app-hero>
      </section>

      <section id="projects" aria-label="Featured Projects">
        <app-projects></app-projects>
      </section>

      <section id="experience" aria-label="Professional Experience">
        <app-experience></app-experience>
      </section>

      <!-- <section id="skills" aria-label="Technical Skills">
        <app-skills></app-skills>
      </section> -->
    </main>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
