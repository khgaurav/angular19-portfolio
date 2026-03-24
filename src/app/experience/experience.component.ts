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
      role: 'AI/ML Engineer Co-op',
      company: 'Pfizer Inc.',
      duration: 'Jun 2025 - Dec 2025',
      points: [
        'Trained YOLOv9/v11 models for lab reaction monitoring in Dataiku, integrating MLflow for end-to-end experiment tracking, automated model versioning, and best-model deployment to production',
        'Optimized inference pipeline by converting models to ONNX with TensorRT acceleration, reducing latency from 12ms to 5ms, with pre/post-processing layers embedded directly in the ONNX graph',
        'Architected full-stack RxInSight platform with FastAPI backend, WebRTC streaming, and OPC-UA server exposing CV parameters for autonomous reactor control with frame-level data stored in AWS DocumentDB',
        'Engineered adaptive frame filtering combining SSIM change detection with K-means clustering on weighted state features, reducing 118-hour video datasets to 3283 training samples',
        'Established closed-loop annotation feedback system where model predictions generate suggested labels in Dataiku, enabling iterative model improvement through continuous retraining on GPU clusters',
        'Developed Chart.js visualization dashboard for querying DocumentDB by experiment ID, displaying interactive time-series plots of CV parameters for post-experiment analysis and monitoring'
      ]
    },
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
      company: 'Amadeus Software Labs',
      duration: 'Jan 2021 - Aug 2024',
      points: [
        'Implemented an LLM powered chatbot using RAG and GPT-3.5 Turbo on unstructured documentation, delivering personalized error resolution suggestions that increased website conversion rates by 12%',
        'Transitioned monolithic application to Kubernetes on AWS using Go microservices, reducing cloud costs by 35% through autoscaling and scheduled deployments via Jenkins with secrets and ConfigMap management',
        'Built a Kafka-based event-driven microservice with Protobuf serialization in Go for real-time data aggregation from multiple sources, and pioneered anomaly detection alerts using Splunk ML on user behavior analytics',
        'Configured Redis as shared cache and session store across Kubernetes (OpenShift) pods, enabling stateless horizontal scaling and consistent user sessions across all backend deployments',
        'Architected secure ingress/egress network with firewalls, load balancers, and SNAT on Kubernetes, automating the provisioning process to reduce setup effort by 63%'
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
