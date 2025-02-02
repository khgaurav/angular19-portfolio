import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'AI/ML & Robotics',
      skills: [
        {
          name: 'Reinforcement Learning',
          description: 'Research in DDPG, PPO, and NeRF integration for robotic path planning. Developed optimized RL agents for 7-DoF manipulators'
        },
        {
          name: 'Neural Radiance Fields',
          description: 'Implemented NeRF for 3D scene reconstruction and integration with RL frameworks'
        },
        {
          name: 'Robot Operating System',
          description: 'Expertise in ROS/ROS2 for autonomous systems (Mars Rover, manipulators) with sensor integration'
        },
        {
          name: 'Autonomous Navigation',
          description: 'Path planning algorithms using LIDAR, GPS, and IMU fusion for Mars Rover challenge'
        },
        {
          name: 'Computer Vision',
          description: 'OpenCV, TensorFlow for AR tag detection, obstacle avoidance, and semantic segmentation'
        },
        {
          name: 'Sensor Fusion',
          description: 'Kalman filters, RTABmap for 3D mapping with RGB-D cameras and IMU'
        }
      ]
    },
    {
      name: 'Tools & Frameworks',
      skills: [
        {
          name: 'PyTorch/TensorFlow',
          description: 'Deep learning implementations for robotics perception and control'
        },
        {
          name: 'Gazebo/MuJoCo',
          description: 'High-fidelity simulations for manipulators and autonomous systems'
        },
        {
          name: 'SICK LiDAR',
          description: '3D environment mapping and obstacle detection for rover navigation'
        },
        {
          name: 'Dynatrace',
          description: 'Realtime system monitoring and performance analytics'
        },
        {
          name: 'Splunk',
          description: 'ML-powered dashboards and anomaly detection in distributed systems'
        },
        {
          name: 'MATLAB/Simulink',
          description: 'Control system design and simulation for robotic mechanisms'
        }
      ]
    },
    {
      name: 'Software Engineering',
      skills: [
        {
          name: 'Cloud Robotics',
          description: 'Azure cloud migration for airline systems, Kubernetes orchestration, OpenShift deployment'
        },
        {
          name: 'MLOps',
          description: 'Splunk ML for predictive analytics, Docker/Podman containerization, CI/CD pipelines'
        },
        {
          name: 'Full-Stack Development',
          description: 'Angular, Material Design, Spring Boot, and microservices architecture'
        },
        {
          name: 'Embedded Systems',
          description: 'STM32, Atmega328p, Raspberry Pi for real-time control systems'
        },
        {
          name: 'Network Security',
          description: 'TLS/AUTH implementation, Azure KeyVault, encrypted communication architectures'
        },
        {
          name: 'Performance Optimization',
          description: 'Resolved CPU spikes, log4j mitigation, network latency optimization'
        }
      ]
    },
    {
      name: 'Specialized Domains',
      skills: [
        {
          name: 'Mars Exploration',
          description: 'URC competition experience with autonomous rover systems'
        },
        {
          name: 'Edge Computing',
          description: 'NVIDIA Jetson TX2, ROS-on-Edge deployments'
        },
        {
          name: 'Academic Research',
          description: 'Work in RL, path planning, and neural rendering'
        },
        {
          name: 'Technical Leadership',
          description: 'Mentored 9+ students, led cross-functional teams in competition settings'
        },
        {
          name: 'Airline Systems',
          description: 'E-commerce platforms, fare calculation, payment gateway integrations'
        },
        {
          name: 'Industrial IoT',
          description: 'MQTT for industrial automation'
        }
      ]
    }
  ];
}
