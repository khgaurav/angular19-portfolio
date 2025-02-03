import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  keyPoints?: string[];
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
      title: 'Mars Rover Manipal',
      description: 'Autonomous rover system ranked 7th globally at University Rover Challenge 2020',
      tech: [
        'ROS',
        'OpenCV',
        'EKF Localization',
        'Gazebo',
        'LiDAR',
        'Intel RealSense',
        'STM32',
        'Ubiquiti 900MHz Radios',
        'pyqt5 GUI'
      ],
      keyPoints: [
        'Led 9-member team to 1st Asian position (8th globally) in URC 2019 and 7th in URC 2020 with $6k secured in sponsorships',
        'Developed autonomous navigation using sensor fusion (3D LiDAR + RealSense) with 95% accuracy in GPS-denied environments',
        'Designed robotic arm control system with 6-DOF inverse kinematics and custom Atmega-based motor drivers',
        'Achieved <200ms command latency using Ubiquiti radios with socket-programmed video/data transmission',
        'Implemented AR tag detection for autonomous gate navigation with variable speed vector field path planning'
      ],
      github: 'https://github.com/abhirajtiwari/catkin_ws'
    },
    {
      title: 'Path Planning with RL & NeRF',
      description: 'Optimized DDPG algorithm with 2x faster convergence using Whale Optimization and Neural Radiance Fields',
      tech: ['PyTorch', 'TorchRL', 'NeRF', 'MuJoCo'],
      keyPoints: [
        'Reduced training time by 40% using prioritized experience replay',
        'Achieved 5% improvement in path optimality using WOA hyperparameter tuning',
        'Integrated NeRF for 3D environment representation in Meta-World tasks',
        'Developed custom reward structures for dense reward shaping'
      ],
      github: 'https://github.com/khgaurav/RL_DDPG_Nerf'
    },
    {
      title: 'Multi-Agent Trajectory Optimization',
      description: 'Bayesian optimization framework for drone swarm coordination',
      tech: ['Python', 'BO', 'GTSAM', 'Docker'],
      keyPoints: [
        'Implemented min-snap trajectories with 98% dynamic feasibility',
        'Reduced collision probability by 75% using Gaussian process classification',
        'Developed custom acquisition functions for formation flight constraints',
        'Achieved 60% reduction in computation time using modular BO'
      ],
      github: 'https://github.com/rachel-lim/multi-agent-bayes-opt'
    },
    {
      title: 'Advanced Home Automation Stack',
      description: 'Containerized smart home ecosystem with high availability and secure remote access',
      tech: [
        'Docker',
        'TensorFlow Lite',
        'Home Assistant',
        'Frigate NVR',
        'Mosquitto MQTT',
        'Cloudflare Tunnel'
      ],
      keyPoints: [
        'Deployed 15+ services on a self-hosted server, achieving seamless remote access with Cloudflare Argos tunnel and 99% uptime.',
        'Scripted automated routines in Home Assistant, transforming traditional rocker switches into energy-efficient smart devices, leading to a 30% reduction in energy consumption.',
        'Integrated cameras with Frigate for live object recognition, enabling smart displays to notify of activity, enhancing home security.',
        'Built a media server on local network using Linux and Jellyfin, enabling global access to over 10,000 photos and 500 videos.'
      ],
      github: 'https://github.com/khgaurav/SmartHome'
    },
    {
      title: 'Modern Engineering Portfolio',
      description: 'Performance-optimized Angular 19 showcase with enterprise-grade deployment',
      tech: [
        'Angular 19',
        'Docker',
        'TypeScript',
        'Angular Material',
        'WCAG 2.1'
      ],
      keyPoints: [
        'Implemented scroll-triggered animations with 60 FPS consistency',
        'Containerized deployment with Docker + Cloudflare Tunnel',
        'Integrated Angular Material accessibility patterns for WCAG 2.1 compliance',
        'Developed responsive layouts supporting 4K to mobile breakpoints'
      ],
      github: 'https://github.com/khgaurav/angular19-portfolio'
    }

  ];
}
