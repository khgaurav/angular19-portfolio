import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project } from '../project.model';
import { ProjectsService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  selectedImage?: {src: string, caption: string};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      this.project = this.projectsService.getProjectById(projectId);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    });
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
