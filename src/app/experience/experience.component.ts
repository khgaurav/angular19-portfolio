import { Component } from '@angular/core';
import { fadeInUpAnimation } from '../app.animations';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [fadeInUpAnimation]
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
        'Implemented an LLM powered chatbot using RAG and GPT-3.5 Turbo, trained on unstructured documentation to deliver personalized error resolution suggestions based on user context, resulting in a 12% increase in website conversion rates',
        'Architected a secure ingress/egress network setup with firewalls, load balancers, and SNAT for internet access from Openshift containers, enabling external API security and automated entire process to reduce effort by 63',
        'Migrated local setups for developers from Docker to Podman and automated hot code deployment via PowerShell'
      ]
    },
    {
      role: 'Software Development Engineer I',
      company: 'Amadeus Labs',
      duration: 'August 2021 - April 2024',
      points: [
        'Led development of 50+ features for the Air Canada website (Angular/Java/MSSQL), including major cutovers such as Manage Booking Page Redesign and introduction of new AC Wallet payment method, with a focus on modular code and 100% test coverage resulting in zero production rollbacks',
        'Transitioned monolithic Spring Boot application to OpenShift on Azure, reducing cloud costs by 35% through autoscaling and scheduled deployment through Jenkins and secured changes using secrets and ConfigMap',
        'Undertook initiatives to enhance Air Canada website’s security and performance by fixing a zero-day gift card exploit, preventing million-dollar revenue loss, and resolving 4x CPU usage spikes, ensuring no downtime for 5M+ users',
        'Engineered a patent-pending REST API technique reducing payload size by 62%, improving mobile load times by 1.8s',
        'Conceived a novel family seat selection feature for the airline’s website, resulting in a $2,000 innovation award'
      ]
    },
    {
      role: 'SDE Intern',
      company: 'Amadeus Labs',
      duration: 'January 2021 - June 2021',
      points: [
        'Developed a microservice to calculate MongoDB statistics for the Altea Inventory tool, reducing stuck job complaints by 43%',
        'Engineered an analytics solution leveraging Splunk and machine learning to alert user behavior trends in Airline websites'
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
