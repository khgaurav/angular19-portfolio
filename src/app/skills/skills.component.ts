import { Component } from '@angular/core';
import { fadeInAnimation } from '../app.animations';
import { Skill, SkillCategory } from '../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [fadeInAnimation]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'AI/ML & Robotics',
      skills: [
        {
          name: 'LLMs & Generative AI',
          description: 'Built multi-agent frameworks, RAG systems, and AI assistants leveraging LangChain, LangGraph, OpenAI APIs, and LLM-as-a-judge methodologies.'
        },
        {
          name: 'Computer Vision',
          description: 'Leveraged PyTorch, OpenCV, and Ultralytics YOLO for tasks such as obstacle detection, scene understanding, and optimized ONNX inference.'
        },
        {
          name: 'Reinforcement Learning',
          description: 'Developed and fine-tuned RL algorithms, integrating methods like DDPG and PPO to solve robotic control and planning problems.'
        },
        {
          name: 'Sensor Fusion & Perception',
          description: 'Implemented sensor fusion techniques using Kalman filters and deep learning for robust perception in dynamic environments.'
        }
      ]
    },
    {
      name: 'Software Development & Engineering',
      skills: [
        {
          name: 'Full-Stack & Backend Development',
          description: 'Built robust web applications and microservices using Go, Python, TypeScript, HTML/CSS, and FastAPI for real-time data processing.'
        },
        {
          name: 'DevOps & Cloud Infrastructure',
          description: 'Used Docker, Kubernetes, OpenShift, Helm, AWS, and CI/CD pipelines (Jenkins, GitHub Actions) to streamline deployments and manage scalable environments.'
        },
        {
          name: 'System Architecture',
          description: 'Architected secure event-driven and distributed systems using asynchronous message brokers like Kafka and caching layers like Redis.'
        },
        {
          name: 'Performance Optimization',
          description: 'Optimized codebase and infrastructure performance through thorough debugging, profiling, and latency reduction in production systems.'
        }
      ]
    },
    {
      name: 'Data & Analytics',
      skills: [
        {
          name: 'MLOps & Experiment Tracking',
          description: 'Managed end-to-end ML lifecycles using Dataiku and MLflow to version datasets, track experiments, and automate model deployments.'
        },
        {
          name: 'System Monitoring & Observability',
          description: 'Implemented real-time monitoring and anomaly detection using Splunk, Dynatrace, and custom dashboards to guarantee reliable uptime.'
        },
        {
          name: 'Data Processing & Storage',
          description: 'Engineered scalable data ingestion pipelines and optimized queries using SQL, Pandas, and NoSQL databases like MongoDB and AWS DocumentDB.'
        }
      ]
    }
  ];
}
