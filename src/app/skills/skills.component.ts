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
      name: 'Robotics & AI/ML Technologies',
      skills: [
        {
          name: 'Robotics & Control Systems',
          description: 'Hands-on experience developing autonomous navigation protocols with <strong>ROS1</strong> and <strong>ROS2</strong>. Proficient in <strong>CAN Protocol</strong> interfacing, message decoding, state estimation via <strong>GTSAM</strong>, and robot simulation in <strong>Gazebo</strong>.'
        },
        {
          name: 'Computer Vision & Deep Learning',
          description: 'Experience training and optimizing models (e.g. <strong>Ultralytics YOLO</strong>) using <strong>PyTorch</strong> and <strong>TensorFlow</strong>. Expertise in <strong>OpenCV</strong> for image processing, <strong>Sensor Fusion</strong> (Kalman filters), and hardware-accelerated inference via <strong>ONNX</strong> and <strong>TensorRT</strong>.'
        },
        {
          name: 'Data Processing & Analytics',
          description: 'Efficient data pipeline engineering and scientific computing using <strong>Pandas</strong>, <strong>NumPy</strong>, and <strong>SQL</strong> for analyzing sensor logs and training datasets.'
        }
      ]
    },
    {
      name: 'Software Development & Tools',
      skills: [
        {
          name: 'Programming Languages',
          description: 'Strong proficiency in <strong>Python</strong> (for automation/scripting) and <strong>C++</strong> (for performance-critical systems). Experience with <strong>Embedded C</strong>, <strong>SQL</strong>, <strong>Shell Scripting</strong>, and <strong>MATLAB</strong>.'
        },
        {
          name: 'Developer Tools & Platforms',
          description: 'Familiar with version control via <strong>Git</strong>, containerization using <strong>Docker</strong>, and experiment tracking/model deployment pipelines with <strong>MLflow</strong> and <strong>Dataiku</strong>.'
        },
        {
          name: 'Robotic Software & Visualization',
          description: 'Proficient in tools like <strong>Rviz</strong> (for sensor visualization), <strong>MuJoCo</strong> (for physics simulation), <strong>MoveIt2</strong> (for motion planning), <strong>Cartographer</strong> (for SLAM mapping), and <strong>WebRTC</strong> (for real-time streaming).'
        }
      ]
    },
    {
      name: 'Hardware & Embedded Systems',
      skills: [
        {
          name: 'Microcontrollers & Hardware Interfacing',
          description: 'Experience programming <strong>STM32</strong> microcontrollers, interfacing with sensors/actuators, and debugging vehicle electronics with <strong>CANalyzer</strong>.'
        },
        {
          name: 'Sensors & Calibration',
          description: 'Practical exposure to <strong>Camera-LiDAR Calibration</strong> and sensor integration including <strong>GigE Industrial Cameras</strong>, <strong>Radar</strong>, <strong>IMU</strong>, and <strong>GNSS</strong> on platforms like <strong>Turtlebot</strong> and <strong>Nvidia Jetson TX2</strong>.'
        }
      ]
    }
  ];
}
