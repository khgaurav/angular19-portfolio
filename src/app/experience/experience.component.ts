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
      role: 'Computer Vision Co-op',
      company: 'Pfizer Inc.',
      duration: 'Jun 2025 - Dec 2025',
      points: [
        'Trained <strong>YOLOv9/v11</strong> models to monitor lab reactions by detecting homogeneous/heterogeneous liquid layers, headspace, and solids/residue in <strong>Dataiku</strong>, integrating <strong>MLflow</strong> for end-to-end training and experiment tracking',
        'Implemented <strong>Extended Kalman Filter</strong> with dual-measurement fusion for multi-layer liquid tracking, reducing volume estimation jitter and enabling smooth real-time height predictions across biphasic reactions',
        'Built <strong>Support Vector Regression</strong> model for pixel-to-mL volume calibration achieving 96.7% accuracy, trained on 100-500 RPM stirring rate data to compensate for meniscus distortion effects',
        'Optimized inference by using <strong>ONNX</strong> models with <strong>TensorRT</strong>, reducing latency by 58%, with ONNX post-processing layers'
      ]
    },
    {
      role: 'Software Development Engineer II',
      company: 'Amadeus Software Labs Pvt Ltd',
      duration: 'Jan 2021 - Aug 2024',
      points: [
        'Led development of 50+ features for the Air Canada website (<strong>Java</strong>/<strong>MSSQL</strong>), with modular code and 100% test coverage resulting in zero production rollbacks',
        'Developed a patent-pending REST API technique reducing payload size by 62%, improving mobile load times by 1.8s',
        'Implemented an AI-powered chatbot using <strong>Azure AI Search</strong> trained on unstructured documentation for error resolution, resulting in a 10% improvement in website conversion rates',
        'Enhanced website security by fixing a zero-day gift card exploit preventing million-dollar revenue loss, and resolving 4x CPU usage spikes ensuring no downtime for 5M+ users'
      ]
    },
    {
      role: 'Control Systems Research Intern',
      company: 'Perma-Liner Industries Pte. Ltd',
      duration: 'Jun 2019 - Aug 2019',
      points: [
        'Designed autonomous navigation protocols with <strong>RtabMap SLAM</strong> on <strong>ROS1</strong> and <strong>ROS2</strong> on Ubuntu Linux, creating detailed maps of tunnel/pipe environments for crack and anomaly detection, achieving 95% localization accuracy',
        'Programmed <strong>STM32F103</strong> microcontroller and Grove I2C motor drivers for precise motor control with high-speed encoders',
        'Developed and executed <strong>Python</strong>-based test scripts and automation tools on Ubuntu Linux to validate navigation nodes in <strong>ROS2</strong>, recording and replaying <strong>rosbags</strong> for performance analysis'
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
    }
  ];
}

