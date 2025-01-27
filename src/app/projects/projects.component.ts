import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Path Planning with RL & NeRF',
      description: 'Implemented DDPG algorithm with 2x faster convergence using Prioritized Experience Replay and custom reward structures',
      tech: ['PyTorch', 'ROS', 'NeRF', 'DDPG'],
      github: 'https://github.com/khgaurav/path-planning'
    },
    {
      title: 'Multi-Agent Trajectory Optimization',
      description: 'Developed Bayesian optimization framework for drone swarm trajectory planning with 98% dynamic feasibility',
      tech: ['Python', 'BO', 'ROS', 'GTSAM'],
      demo: '#'
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'Created Azure AI Search integrated chatbot using GPT-3.5 Turbo, improving conversion rates by 10%',
      tech: ['Azure AI', 'GPT-3.5', 'LangChain', 'Docker'],
      github: 'https://github.com/khgaurav/ai-chatbot'
    }
  ];
}
