import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

interface SkillCategory {
  name: string;
  skills: string[];
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
      name: 'Languages & Frameworks',
      skills: ['Python', 'C++', 'Java', 'ROS 2', 'PyTorch', 'TensorFlow']
    },
    {
      name: 'Robotics Tools',
      skills: ['Gazebo', 'MoveIt 2', 'OpenCV', 'MuJoCo', 'GTSAM', 'ROS']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Git']
    },
    {
      name: 'Embedded Systems',
      skills: ['STM32', 'Arduino', 'Raspberry Pi', 'PCB Design', 'RTOS', 'I2C/SPI']
    }
  ];
}
