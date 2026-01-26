import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
    <main>
      <section id="hero" class="gsap-hero">
        <app-hero></app-hero>
      </section>

      <section id="projects" aria-label="Featured Projects" class="gsap-projects">
        <app-projects></app-projects>
      </section>

      <section id="experience" aria-label="Professional Experience" class="gsap-experience">
        <app-experience></app-experience>
      </section>

      <!-- <section id="skills" aria-label="Technical Skills">
        <app-skills></app-skills>
      </section> -->
    </main>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      // Small delay to ensure DOM is ready
      setTimeout(() => this.initScrollAnimations(), 100);
    }
  }

  ngOnDestroy() {
    // Clean up ScrollTrigger instances
    if (this.isBrowser) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }

  private initScrollAnimations() {
    // Hero section - fade in on load with staggered elements
    const heroPhoto = document.querySelector('.hero__photo-wrapper');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitleLarge = document.querySelector('.hero__subtitle-large');
    const heroDescription = document.querySelector('.hero__description');
    const heroCta = document.querySelector('.hero__cta');

    // Animate photo first with special entrance
    if (heroPhoto) {
      gsap.fromTo(heroPhoto,
        { opacity: 0, scale: 0.8, rotate: -10 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }
      );
    }

    const heroElements = [heroSubtitle, heroTitle, heroSubtitleLarge, heroDescription, heroCta].filter(Boolean);
    
    heroElements.forEach((element, index) => {
      gsap.fromTo(element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3 + (index * 0.15),
          ease: 'power2.out'
        }
      );
    });

    // Projects section - animate heading first, then cards
    const projectsHeading = document.querySelector('#projects .numbered-heading');
    if (projectsHeading) {
      gsap.fromTo(projectsHeading,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectsHeading,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Project cards - staggered reveal
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Experience section - animate heading
    const experienceHeading = document.querySelector('#experience .numbered-heading');
    if (experienceHeading) {
      gsap.fromTo(experienceHeading,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: experienceHeading,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Experience items - staggered reveal with slide from left
    const experienceItems = document.querySelectorAll('.experience__item');
    experienceItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Refresh ScrollTrigger after all animations are set up
    ScrollTrigger.refresh();
  }
}
