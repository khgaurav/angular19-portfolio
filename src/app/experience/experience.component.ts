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
      role: 'Graduate Teaching Assistant',
      company: 'Khoury College of Computer Sciences',
      duration: 'January 2025 - Present',
      points: [
        'Mentoring 109 graduate students in advanced Reinforcement Learning concepts',
        'Developing and evaluating Python-based programming assignments on RL frameworks, providing detailed feedback'
      ]
    },
    {
      role: 'Software Development Engineer II',
      company: 'Amadeus Labs',
      duration: 'May 2024 - August 2024',
      points: [
        'Created an AI Intuitbot to suggest fixes for errors encountered by users, estimated to boost the user look-to-book ratio by 10%',
        'Implemented E2E network setup on Azure for secured internet and intranet access, reducing setup effort by 60% for other teams',
        'Conducted scalability, destructive, and flat tests, achieving a 5% improvement in CPU usage and response times'
      ]
    },
    {
      role: 'Software Development Engineer I',
      company: 'Amadeus Labs',
      duration: 'August 2021 - April 2024',
      points: [
        'Developed 50+ features for Air Canada website using Angular UI and Java Backend, including major cutovers like Self-Reaccommodation and Manage booking page redesign',
        'Containerized Spring Boot app and set up OpenShift namespace for deployment on Azure cloud, auto-scaling cut costs by 35%',
        'Resolved untraceable performance & platform issues causing 4x CPU usage spikes, preventing downtime for 5M+ users',
        'Implemented ACWallet architecture, redesigning payment and refund infrastructure and addressing security issues',
        'Fixed a critical security vulnerability that could have led to millions in revenue loss for the airline'
      ]
    },
    {
      role: 'SDE Intern',
      company: 'Amadeus Labs',
      duration: 'January 2021 - June 2021',
      points: [
        'Developed a microservice to calculate MongoDB statistics for the Altea Inventory tool, reducing stuck job complaints by 43%',
        'Engineered an analytics solution leveraging Splunk and machine learning to alert on user behavior trends in Airline websites'
      ]
    },
    {
      role: 'Control Systems Intern',
      company: 'Perma-Liner Industries',
      duration: 'June 2019 - August 2019',
      points: [
        'Developed EKF-based localization system for GPS-denied environments',
        'Achieved 95% positioning accuracy in tunnel environments',
        'Implemented obstacle avoidance and autonomous traversal for open martian environment using ROS, 3D SICK LiDAR, GPS and IMU sensors'
      ]
    }
  ];
}
