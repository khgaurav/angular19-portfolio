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
      role: 'Machine Learning Engineer Co-op',
      company: 'Pfizer Inc.',
      duration: 'Jun 2025 - Dec 2025',
      points: [
        'Built a data-generation pipeline that pairs SSIM change detection with K-means clustering and data augmentation to turn 118-hour raw reactor video into 3283 curated labeled frames spanning diverse reaction states',
        'Trained YOLOv9 and YOLOv11 detectors in Dataiku with MLflow, logging mAP, precision, and recall to a model evaluation store and validating each release against a held-out set across GPU-cluster retraining runs',
        'Converted PyTorch models to ONNX with TensorRT to cut inference latency from 12ms to 5ms and shipped the full-stack RxInSight platform exposing volume and homogeneity over an OPC-UA server for closed-loop control',
        'Stored every frame’s structured predictions in MongoDB DocumentDB indexed for fast per-experiment queries'
      ]
    },
    {
      role: 'Software Development Engineer II',
      company: 'Amadeus Software Labs Pvt Ltd, Bangalore, India',
      duration: 'Jan 2021 - Aug 2024',
      points: [
        'Built a Kafka event-driven microservice with Protobuf serialization for the airline inventory system, aggregating real-time updates from multiple data sources and cutting inventory job complaints by 43%',
        'Built an LLM-powered support chatbot using RAG over GPT-3.5 trained on unstructured documentation to give context-aware error resolution, lifting website conversion by 12% across the airline booking flow',
        'Built Splunk Machine Learning anomaly alerts on user-behavior analytics across airline website logs',
        'Migrated a monolithic Java service to Kubernetes on OpenShift, cutting cloud cost 35% via autoscaling'
      ]
    },
    {
      role: 'Graduate Teaching Assistant',
      company: 'Khoury College of Computer Sciences',
      duration: 'January 2025 - Present',
      points: [
        'Mentoring 278 graduate students in advanced Reinforcement Learning concepts',
        'Developing and evaluating Python-based programming assignments on RL frameworks, providing detailed feedback'
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
