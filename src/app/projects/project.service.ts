import { Injectable } from '@angular/core';
import { Project } from './project.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'mars-rover',
      title: 'Mars Rover Manipal',
      description: 'Autonomous rover system ranked 7th globally at University Rover Challenge 2020',
      tech: [
        'C++',
        'Python',
        'ROS',
        'RTK GPS',
        'IMU',
        '3D LiDAR',
        'Stereocam',
        'Extended Kalman Filter',
        'RANSAC',
        'STM32',
        'Atmega'
      ],
      keyPoints: [
        'Led a diverse cross-disciplinary team of 9 students in the URC 2020, achieving 7th place among 93 global teams',
        'Negotiated sponsorship agreements with industry leaders SICK and Mouser, securing resources worth $6,000 for the team',
        'Utilized RANSAC for ground plane extraction from a 3D LiDAR point cloud for obstacle detection and developed an autonomous navigation system on ROS for a Martian environment, fusing IMU and GPS data via an extended Kalman filter',
        'Redesigned a C++ program for rover wheel & arm control and to communicate with the sensors and peripherals connected to STM32/Atmega, incorporating a hill assist feature and fail-safes for rover protection',
        'Implemented AR tag detection for autonomous gate navigation with variable speed vector field path planning'
      ],
      fullDescription: `Mars Rover Manipal is an interdisciplinary student project that aims to explore robotics and its application in interplanetary expeditions.

      The project MRM annually participates in international and national competitions, The University Rover Challenge, European Rover Challenge, International Rover Challenge, International Rover Design Challenge and the International Mars Hackathon,  organised by The Mars Society- The United States and South Asia since 2016.

      The Electronics & AI subsystem processes and interprets data from various sensors such as cameras, GPS, LiDARS, and IMUs for the autonomous part of the robot and also sets up and interfaces with various segments of the rover, which work together to achieve the rover's desired performance in all tasks for effective control and communication.`,
      sections: [
        {
          title: 'Autonomous Mission',
          content: `The Autonomous Traversal mission has been approached in a modular fashion by breaking down the given problem statement into subtasks and testing each of them meticulously. For navigation, an RTK GPS has been configured to rectify its error by picking up a RTCM stream. The rover is localized accurately by fusing GPS, IMU and visual odometry data using an extended Kalman filter. For robust obstacle avoidance, the system deduces its surrounding by making use of a 275° FOV 3D LiDAR and a stereocam in tandem. Ground plane from the LiDAR is removed using RANSAC. Obstacles are smoothly circumvented from a long distance by computing a sum of vectors from the cardioid scaled laser scan to provide dynamic soft turn commands. The stereocam is used to avoid nearby obstacles that remain undetected by the LiDAR. The whole autonomous system is set up on ROS to ensure modularity, easy communication between modules and efficient integration of all nodes to accomplish all the subtasks.`
        },
        {
          title: 'Rover Control',
          content: `A 32-bit ARM Cortex M4 based STM32 F3 Discovery is used to achieve precise and accurate control of the rover. It serves as the primary controller responsible for controlling the motor drivers of the wheels and robotic manipulator, and rotation of multiple cameras. The control is divided into five modes: Traversal, Hill assist, Robotic manipulator, Soil collection and Autonomous traversal. A single modular program has been developed that can seamlessly switch between the five modes. Precise 32-bit multi-channel timers are used to implement six-wheel skid drive and hill assist. Hill assist holds the rover at a given position at an inclination where normally slipping might occur, thereby assisting the driver to operate the robotic manipulator on steep hills. Six-wheel skid drive is used to overcome extreme terrains that are hilly, rocky and rough by controlling the torque provided by each motor. Fail safes in the code have been incorporated as protection against rover damages by restricting unwarranted motion of the rover. A custom Battery Monitoring System has been fabricated to monitor battery parameters.`
        },
        {
          title: 'Communication',
          content: `The rover operates on 5.8GHz and 2.4GHz frequency bands with a combination of omni-directional, directional and circular polarized antennas that adhere to the FCC standards and regulations. In previous competitions, the rover lost communication link in Non-Line of Sight (NLOS) situation. A comprehensive analysis of various antenna parameters was performed to isolate the problem. The router's proprietary communication protocol uses an acknowledgment feature for fail-safe data transfer, which caused a problem in NLOS communication. Multiple measures including circular polarized antennas, increasing the height of the antennas, and automatic path traceback have been used to overcome the issue.`
        },
        {
          title: 'Graphical User Interface (GUI)',
          content: `The GUI has different views for every task, each consisting of buttons and graphs. It helps us reduce the base station set-up time in all tasks and makes the control of the rover more intuitive. All camera feeds from the rover are hosted on a local server and accessed on various client laptops as required. This prevents saturation of the bandwidth as the same camera feeds aren't requested multiple times. Live GPS plotting of the rover has been achieved to allow the driver to direct the rover towards the locations given in the task. A navigation indicator and a destination indicator has been incorporated in the GUI for the same.`
        }
      ],
      demo: {
        type: 'youtube',
        url: 'https://youtu.be/V22SHOJQx4I?t=80'
      },
      github: 'https://github.com/abhirajtiwari/catkin_ws',
      images: [
        {
          src: 'projects/mars-rover/rover.png',
          caption: 'Rover 2020 - Full Robot View'
        },
        {
          src: 'projects/mars-rover/obstacle.png',
          caption: 'Obstacle Detection and Avoidance System'
        }
      ],
    },
    {
      id: 'path-planning',
      title: 'Path Planning with Reinforcement Learning',
      description: 'Optimized DDPG algorithm with 2x faster convergence using Whale Optimization and Neural Radiance Fields',
      tech: ['PyTorch', 'TorchRL', 'NeRF', 'MuJoCo'],
      keyPoints: [
        'Optimized DDPG algorithm to learn control policies for a 7-DoF Franka Emika Panda Robot in obstacle-rich environments, implementing Prioritized Experience Replay and Whale Optimization for hyperparameter tuning, achieving 35% faster convergence',
        "Benchmarked against PPO, demonstrating DDPG's 25% better sample efficiency in Meta-World drawer-open tasks",
        "Enhanced robot performance by 33% through novel integration of NeRF-generated volumetric state representations, enabling the learned policy to more efficiently navigate complex environments with improved trajectory planning"
      ],
      fullDescription: `Based on recent research, this project integrates reinforcement learning (RL) with neural radiance fields (NeRF) to optimize path planning in complex environments. My approach enhances standard DDPG by incorporating Whale Optimization Algorithm (WOA) strategies to accelerate convergence and improve policy performance.

The research paper details novel techniques, including:
•Prioritized experience replay allowing for faster convergence
•Custom reward shaping tailored to the dynamics of simulated environments
•Integration of NeRF for real-time scene reconstruction, enhancing the agent's situational awareness

Extensive experiments on Meta-World benchmarks demonstrate a 5% improvement in path optimality over conventional methods, while the training duration was cut by 40%.`,
      sections: [
        {
          title: 'Methodology',
          content: `The method builds on DDPG with modifications to sample and weight experiences more effectively. WOA is applied to fine-tune hyperparameters, and NeRF is embedded to capture the 3D structure of the operating environment, thereby enriching state representations.`
        },
        {
          title: 'Experimental Results',
          content: `Benchmark tests on simulated environments reveal significant gains in efficiency and performance. The optimized framework shows a marked reduction in training time and an improvement in convergence stability, validating the merits of the integrated approach.`
        }
      ],
      images: [
        {
          src: 'projects/path-planning/Panda_Final_Policy.gif',
          caption: 'Final Policy from DDPG'
        },
        {
          src: 'projects/path-planning/Panda_Final_Params.png',
          caption: 'Learning progress'
        },
      ],
      github: 'https://github.com/khgaurav/RL_DDPG_Nerf',
      demo: {
        type: 'pdf',
        url: 'projects/path-planning/Gaurav_RL_Project.pdf'
      },
    },
    {
      id: 'monocular-depth',
      title: 'Monocular Depth Estimation',
      description: 'Hybrid architecture combining Swin Transformers and knowledge distillation for high-precision depth estimation',
      tech: ['Python', 'PyTorch', 'Swin Transformer', 'Knowledge Distillation', 'Edge Deployment', 'PyTorch Lightning'],
      keyPoints: [
        'Enhanced Apple Depth Pro using Swin Transformer architecture and Cross-Context Distillation from Distill Any Depth teacher model, achieving 22% RMSE reduction on NYU/KITTI',
        'Optimized boundary accuracy by 41% through multi-scale feature fusion and global-local context alignment',
        'Deployed real-time inference pipeline (35ms/frame) on NVIDIA Jetson via TensorRT optimization while maintaining 2.25MP resolution'
      ],
      fullDescription:
`This advanced monocular depth estimation system enhances Apple's Depth Pro foundation through three key innovations:
      1) Swin Transformer architecture for linear-complexity multi-scale processing
      2) Cross-Context Knowledge Distillation from Distill Any Depth's multi-teacher framework
      3) Edge-optimized deployment via layer fusion and mixed-precision quantization.

The system achieves state-of-the-art performance on NYU Depth v2 (0.385 RMSE) and KITTI (2.873 RMSE) while maintaining real-time capabilities through architectural optimizations and advanced training techniques. Practical applications span robotic navigation, AR/VR scene understanding, and autonomous vehicle perception systems.`,
      sections: [
        {
          title: 'Architectural Innovations',
          content:
`The enhanced architecture combines Swin Transformer's hierarchical attention mechanisms with Depth Pro's original multi-scale ViT design. Key components include:
      - Shifted window self-attention for local-global feature integration
      - Cross-Context Distillation head transferring knowledge from Distill Any Depth
      - Dynamic depth bins adaptation for improved metric depth estimation
Hybrid quantization (FP16/INT8) enables 4.2x faster inference on edge devices while maintaining sub-centimeter accuracy.`
        },
        {
          title: 'Training Methodology',
          content:
`Implemented a phased training approach:
      1. Pretrained Swin Transformer backbone on synthetic data (MIX-6)
      2. Knowledge distillation using Distill Any Depth's multi-teacher framework
      3. Edge deployment optimization via differentiable quantization
The Cross-Context Distillation loss combines:
      - Structural similarity (SSIM) for boundary preservation
      - Scale-aware gradient matching for depth discontinuities
      - Affinity distillation for global context transfer
This approach reduced boundary errors by 32% compared to baseline distillation methods.`
        },
        {
          title: 'Performance Benchmarks',
          content:
`Comprehensive evaluation across multiple benchmarks:
      - NYU Depth v2: 0.385 RMSE (22% improvement over baseline)
      - KITTI: 2.873 RMSE with 41% better edge accuracy`
        },
        {
          title: 'Applications and Extensions',
          content:
`Deployed in three real-world scenarios:
      1. Robotic navigation: Improved obstacle detection in cluttered environments
      2. AR measurement: Sub-centimeter accuracy up to 5m range
      3. Automotive perception: 4D occupancy grid generation
Current work extends the framework to:
      - Temporal depth consistency using neural parametric filters
      - Few-shot adaptation for specialized domains (medical imaging)
      - Multi-task learning with surface normal estimation`
        }
      ],
      demo: {
        type: 'pdf',
        url: ''
      },
      github: ''
    },
    {
      id: 'multi-agent-bayes-opt',
      title: 'Multi-Agent Trajectory Optimization',
      description: 'Bayesian optimization framework for drone swarm coordination',
      tech: ['Python', 'BO', 'GTSAM', 'Dynamic Feasability Models'],
      keyPoints: [
        'Implemented a modular Bayesian optimization framework in Python generating min snap trajectories considering dynamic feasibility, synchronized waypoints and obstacle avoidance for multiple drones',
        'Adapted single-drone multi-fidelity approach to a multi-drone approach, optimizing performance 98% dynamic feasibility'
      ],
      fullDescription: `Multi-Agent Trajectory Optimization leverages a Bayesian Optimization framework to plan and optimize flight trajectories for a coordinated swarm of drones. By integrating Gaussian Process regression, the system predicts feasible trajectory parameters that minimize snap and jerk while ensuring synchronized waypoint alignment across multiple agents. The approach extends single-drone multi-fidelity methods to a multi-agent context, incorporating dynamic constraint handling and collision avoidance in complex environments.`,
      sections: [
        {
          title: 'Framework Overview',
          content: `The framework integrates Bayesian Optimization with Gaussian Process regression to generate smooth, dynamically feasible trajectories. It formulates an optimization problem that minimizes trajectory snap while satisfying inter-drone synchronization and collision avoidance constraints.`
        },
        {
          title: 'Methodology',
          content: `Building on a single-drone multi-fidelity approach, the algorithm extends to handle multi-agent coordination by incorporating adaptive fidelity scheduling and novel acquisition functions tailored for inter-agent interactions. This method allows efficient exploration of the trajectory space while balancing computational load and accuracy.`
        },
        {
          title: 'Experimental Setup and Results',
          content: `Simulations were conducted in complex, dynamic environments with multiple drones operating simultaneously. The results demonstrate that the multi-agent framework achieves over 98% dynamic feasibility, with improved convergence rates and robustness against obstacles compared to baseline methods. Detailed performance metrics—including training times, convergence rates, and obstacle avoidance capabilities—are discussed in the report.`
        },
        {
          title: 'Discussion and Future Work',
          content: `The report addresses challenges in scalability and real-time implementation while outlining potential enhancements such as tighter integration with perception systems and adaptive re-planning strategies. Future work will focus on improving fault tolerance and validating the framework in real-world flight tests.`
        }
      ],
      images: [
        {
          src: 'projects/multi-agent-bayes-opt/Flowchart.png',
          caption: 'Project Architecture'
        },
        {
          src: 'projects/multi-agent-bayes-opt/trajplots.jpg',
          caption: 'Trajectory generation iterations'
        },
      ],
      github: 'https://github.com/khgaurav/multi-agent-bayes-opt',
      demo: {
        type: 'pdf',
        url: 'projects/multi-agent-bayes-opt/Gaurav_Multi_Agent_Bayes_Opt_Report.pdf'
      }
    },
    {
      id: 'debate-training',
      title: 'Debate Training with LLMs and Multi-Agent Interaction Structures',
      description: 'Multi-agent framework leveraging LLMs to simulate and enhance debate processes',
      tech: ['Python', 'LLMs', 'LangChain', 'LangGraph', 'OpenAI API', 'Ollama', 'OpenDebateEvidence'],
      keyPoints: [
        'Constructed a multi-agent debate framework leveraging two distinct LLMs to simulate opposing arguments, utilizing LangGraph to construct a debating workflow that facilitates opposing argument enhancement via iterative feedback',
        'Incorporated human-in-the-loop with human preference through LLM-as-a-judge comparing BERTScore with OpenDebateEvidence knowledge base to build 40k golden samples'
      ],
      fullDescription: `Debate Training with LLMs and Multi-Agent Interaction Structures is a cutting-edge project that combines multi-agent systems with large language models to simulate realistic debates. Inspired by the concepts detailed in the SocrAItic Circle presentation, the framework engages agents that assume opposing stances to rigorously test arguments and generate improved debate strategies. By leveraging iterative feedback and integrating human judgment, the system aims to refine debate quality and ultimately build a high-quality dataset of 40k golden samples for benchmarking and training purposes.`,
      sections: [
        {
          title: 'Methodology',
          content: `The system utilizes a dual-agent setup where each agent simulates a different perspective. The debate workflow is constructed using LangGraph, ensuring that each round of debate progressively refines the presented arguments. A human-in-the-loop mechanism is integrated by employing an LLM configured as a judge. This judge evaluates the debate rounds by comparing BERTScore metrics with a curated OpenDebateEvidence knowledge base, ensuring that debate outcomes reflect high-quality reasoning and evidence.`
        },
        {
          title: 'Experimental Evaluation',
          content: `Pilot tests demonstrated that the iterative feedback significantly improves argument coherence and quality. The integration of human preferences through LLM-as-a-judge has enabled the collection of 40k golden samples, forming a comprehensive benchmark for future debate training systems.`
        },
        {
          title: 'Discussion and Future Work',
          content: `The current framework lays the foundation for automated debate training using LLMs. Future work will focus on scaling the system to incorporate additional agents, further refining the debate evaluation metrics, and integrating real-time human feedback to continuously enhance the debate quality.`
        }
      ],
      demo: {
        type: 'pdf',
        url: ''
      },
      github: ''
    },
    // {
    //   id: 'smart-home',
    //   title: 'Advanced Home Automation Stack',
    //   description: 'Containerized smart home ecosystem with high availability and secure remote access',
    //   tech: [
    //     'Docker',
    //     'TensorFlow Lite',
    //     'Home Assistant',
    //     'Frigate NVR',
    //     'Mosquitto MQTT',
    //     'Cloudflare Tunnel'
    //   ],
    //   keyPoints: [
    //     'Deployed 15+ services on a self-hosted server, achieving seamless remote access with Cloudflare Argos tunnel and 99% uptime.',
    //     'Scripted automated routines in Home Assistant, transforming traditional rocker switches into energy-efficient smart devices, leading to a 30% reduction in energy consumption.',
    //     'Integrated cameras with Frigate for live object recognition, enabling smart displays to notify of activity, enhancing home security.',
    //     'Built a media server on local network using Linux and Jellyfin, enabling global access to over 10,000 photos and 500 videos.'
    //   ],
    //   github: 'https://github.com/khgaurav/SmartHome'
    // },
    // {
    //   id: 'angular19-portfolio',
    //   title: 'Modern Engineering Portfolio',
    //   description: 'Performance-optimized Angular 19 showcase with enterprise-grade deployment',
    //   tech: [
    //     'Angular 19',
    //     'Docker',
    //     'TypeScript',
    //     'Angular Material',
    //     'WCAG 2.1'
    //   ],
    //   keyPoints: [
    //     'Implemented scroll-triggered animations with 60 FPS consistency',
    //     'Containerized deployment with Docker + Cloudflare Tunnel',
    //     'Integrated Angular Material accessibility patterns for WCAG 2.1 compliance',
    //     'Developed responsive layouts supporting 4K to mobile breakpoints'
    //   ],
    //   github: 'https://github.com/khgaurav/angular19-portfolio'
    // }
  ];

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }
}
