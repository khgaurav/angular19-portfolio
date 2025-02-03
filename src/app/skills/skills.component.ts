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
          description: 'Developed and fine-tuned RL algorithms, integrating methods like DDPG and PPO to solve robotic control and planning problems.'
        },
        {
          name: 'Sensor Fusion & Perception',
          description: 'Implemented sensor fusion techniques using Kalman filters and deep learning for robust perception in dynamic environments, ideal for autonomous navigation.'
        },
        {
          name: 'ROS/ROS2 Expertise',
          description: 'Designed and maintained autonomous systems with ROS, integrating hardware sensors and advanced planning algorithms for precise control.'
        },
        {
          name: 'Computer Vision',
          description: 'Leveraged TensorFlow and OpenCV for tasks such as obstacle detection and scene understanding to support robotic decision-making.'
        }
      ]
    },
    {
      name: 'Software Development & Engineering',
      skills: [
        {
          name: 'Full-Stack Development',
          description: 'Built robust web applications using Angular on the frontend and Spring Boot for microservices, drawing on experience from professional software development roles.'
        },
        {
          name: 'Performance Optimization',
          description: 'Optimized code and system performance through thorough debugging and profiling, minimizing latency in distributed systems.'
        },
        {
          name: 'DevOps & Containerization',
          description: 'Used Docker, Kubernetes, and CI/CD pipelines to streamline development processes and manage scalable deployments.'
        },
        {
          name: 'Embedded Systems',
          description: 'Developed and integrated firmware on microcontrollers (STM32, Atmega328p) to achieve real-time control in robotics applications.'
        }
      ]
    },
    {
      name: 'Technical & Academic Leadership',
      skills: [
        {
          name: 'Robotics Research',
          description: 'Conducted academic research in AI-driven robotics, with a focus on integrating advanced perception with autonomous planning algorithms.'
        },
        {
          name: 'Cross-Functional Mentorship',
          description: 'Mentored peers and led project teams, leveraging hands-on experience from MSc projects and industry roles to guide innovative solutions.'
        },
        {
          name: 'Innovative Problem Solving',
          description: 'Applied creative engineering and research methods to overcome complex challenges in both academic and professional environments.'
        }
      ]
    },
    {
      name: 'Tools, Simulation & Analytics',
      skills: [
        {
          name: 'Simulation Platforms',
          description: 'Utilized Gazebo and MuJoCo for high-fidelity robotic simulations, validating control strategies before real-world testing.'
        },
        {
          name: 'Cloud Robotics',
          description: 'Integrated cloud-based services for data analytics and remote system management, enhancing the scalability of robotic systems.'
        },
        {
          name: 'System Monitoring & Analytics',
          description: 'Implemented real-time monitoring tools and dashboards to ensure reliable performance in complex distributed systems.'
        }
      ]
    }
  ];
}
