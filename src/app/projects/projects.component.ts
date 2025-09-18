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
}
