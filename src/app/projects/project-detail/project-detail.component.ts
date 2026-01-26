import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Project } from '../project.model';
import { ProjectsService } from '../project.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  project?: Project;
  selectedImage?: {src: string, caption: string};
  private isBrowser: boolean;

  @ViewChild('projectHeader') projectHeader!: ElementRef;
  @ViewChild('projectContent') projectContent!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Clean up previous ScrollTrigger instances before loading new project
      if (this.isBrowser) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      
      const projectId = params['id'];
      this.project = this.projectsService.getProjectById(projectId);
      
      // Scroll to top immediately
      if (this.isBrowser) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      
      // Re-initialize animations after DOM updates
      if (this.isBrowser && this.project) {
        setTimeout(() => {
          this.initScrollAnimations();
        }, 100);
      }
    });
  }

  ngAfterViewInit() {
    // Initial animations are now handled in ngOnInit subscription
  }

  ngOnDestroy() {
    // Clean up ScrollTrigger instances
    if (this.isBrowser) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }

  private initScrollAnimations() {
    // Header animation - fade in and slide up on load
    const header = document.querySelector('.project-header');
    if (header) {
      gsap.fromTo(header,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        }
      );
    }

    // Gallery images - parallax effect and reveal
    const images = document.querySelectorAll('.gsap-image');
    images.forEach((image, index) => {
      gsap.fromTo(image,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Add parallax effect on scroll
      gsap.to(image.querySelector('.project-image'), {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      });
    });

    // Sections - staggered reveal from bottom
    const sections = document.querySelectorAll('.gsap-section');
    sections.forEach((section, index) => {
      const heading = section.querySelector('h2');
      const content = section.querySelector('.section-content, .project-tech-list');

      // Animate the section container
      gsap.fromTo(section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate heading with slight delay
      if (heading) {
        gsap.fromTo(heading,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Animate content with slide up
      if (content) {
        gsap.fromTo(content,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Tech list items - staggered pop-in animation
    const techItems = document.querySelectorAll('.project-tech-list li');
    if (techItems.length > 0) {
      gsap.fromTo(techItems,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.project-tech-list',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Refresh ScrollTrigger after all animations are set up
    ScrollTrigger.refresh();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  openFullscreen(image: {src: string, caption: string}) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeFullscreen() {
    this.selectedImage = undefined;
    document.body.style.overflow = 'auto';
  }
}
