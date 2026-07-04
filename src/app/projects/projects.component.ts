import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../app.animations';
import { ProjectsService } from './project.service';
import { Project } from './project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeInUpAnimation]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.projects = this.projectsService.getAllProjects();
  }

  navigateToProject(projectId: string) {
    this.router.navigate(['/projects', projectId]);
  }

  onMouseMove(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles (max ~6 degrees)
    const rotateX = ((centerY - y) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;

    // Apply transformation directly with 3D perspective and translation
    card.style.transition = 'transform 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, border-color 0.3s ease';
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) translateZ(10px)`;
  }

  onMouseLeave(card: HTMLElement) {
    // Reset transformations with transition
    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, border-color 0.3s ease';
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px)`;
  }
}
