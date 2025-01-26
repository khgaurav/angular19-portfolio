import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
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
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'SDE II',
      company: 'Amadeus Software Labs',
      duration: 'Jan 2021 - Aug 2024',
      points: [
        'Developed AI-powered chatbot using Azure AI Search and GPT-3.5 Turbo',
        'Engineered analytics solution using Splunk and machine learning',
        'Containerized Spring Boot apps with 35% cost reduction'
      ]
    },
    {
      role: 'Control Systems Intern',
      company: 'Perma-Liner Industries',
      duration: 'Jun 2019 - Aug 2019',
      points: [
        'Developed EKF-based localization system for GPS-denied environments',
        'Achieved 95% positioning accuracy in tunnel environments'
      ]
    }
  ];
}
