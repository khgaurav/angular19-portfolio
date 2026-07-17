import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'debate-training',
      title: 'Debate Training with LLMs and Multi-Agent Interaction Structures',
      description: 'Multi-agent framework leveraging LLMs to simulate and enhance debate processes',
      tech: ['Python', 'LLMs', 'LangChain', 'LangGraph', 'OpenAI API', 'Ollama', 'OpenDebateEvidence'],
      keyPoints: [
        'Constructed a multi-agent debate framework leveraging two distinct LLMs using LangGraph for agentic workflow orchestration with state management, retry logic, and iterative feedback loops between opposing agents',
        'Incorporated human-in-the-loop evaluation with LLM-as-a-judge comparing BERTScore against OpenDebateEvidence knowledge base to build 40k golden samples for model benchmarking'
      ],
      fullDescription: `<p>Debate Training with LLMs and Multi-Agent Interaction Structures is a cutting-edge project that combines multi-agent systems with large language models to simulate realistic debates. Inspired by the concepts detailed in the SocrAItic Circle presentation, the framework engages agents that assume opposing stances to rigorously test arguments and generate improved debate strategies. By leveraging iterative feedback and integrating human judgment, the system aims to refine debate quality and ultimately build a high-quality dataset of 40k golden samples for benchmarking and training purposes.</p>`,
      sections: [
        {
          title: 'Methodology',
          content: `<p>The system utilizes a dual-agent setup where each agent simulates a different perspective. The debate workflow is constructed using LangGraph, ensuring that each round of debate progressively refines the presented arguments. A human-in-the-loop mechanism is integrated by employing an LLM configured as a judge. This judge evaluates the debate rounds by comparing BERTScore metrics with a curated OpenDebateEvidence knowledge base, ensuring that debate outcomes reflect high-quality reasoning and evidence.</p>`
        },
        {
          title: 'Experimental Evaluation',
          content: `<p>Pilot tests demonstrated that the iterative feedback significantly improves argument coherence and quality. The integration of human preferences through LLM-as-a-judge has enabled the collection of 40k golden samples, forming a comprehensive benchmark for future debate training systems.</p>`
        },
        {
          title: 'Discussion and Future Work',
          content: `<p>The current framework lays the foundation for automated debate training using LLMs. Future work will focus on scaling the system to incorporate additional agents, further refining the debate evaluation metrics, and integrating real-time human feedback to continuously enhance the debate quality.</p>`
        }
      ],
      demo: {
        type: 'pdf',
        url: ''
      },
      github: ''
    },
    {
      id: 'path-planning',
      title: 'Reinforcement Learning for Robotic Path Planning',
      description: 'Optimized DDPG algorithm in Python with 35% faster convergence using Whale Optimization and Prioritized Experience Replay',
      tech: ['Python', 'PyTorch', 'TorchRL', 'MuJoCo', 'Stable-Baselines3', 'PPO', 'Reinforcement Learning'],
      keyPoints: [
        'Optimized DDPG in Python for path planning on a 7-DoF Franka Panda arm in MuJoCo, adding prioritized experience replay through TorchRL and Whale Optimization hyperparameter tuning to reach 35% faster convergence',
        'Benchmarked against PPO from Stable-Baselines3 on Meta-World drawer-open, showing DDPG’s better sample efficiency',
        'Documented the work in a research manuscript with released code at github.com/khgaurav/RL_DDPG_Nerf'
      ],
      fullDescription: `<p>Based on recent research, this project integrates reinforcement learning (RL) with neural radiance fields (NeRF) to optimize path planning in complex environments. My approach enhances standard DDPG by incorporating Whale Optimization Algorithm (WOA) strategies to accelerate convergence and improve policy performance.</p>
      <p>The research paper details novel techniques, including:</p>
      <ul>
        <li>Prioritized experience replay allowing for faster convergence</li>
        <li>Custom reward shaping tailored to the dynamics of simulated environments</li>
        <li>Integration of NeRF for real-time scene reconstruction, enhancing the agent's situational awareness</li>
      </ul>
      <p>Extensive experiments on Meta-World benchmarks demonstrate a 5% improvement in path optimality over conventional methods, while the training duration was cut by 40%.</p>`,
      sections: [
        {
          title: 'Methodology',
          content: `<p>The method builds on DDPG with modifications to sample and weight experiences more effectively. WOA is applied to fine-tune hyperparameters, and NeRF is embedded to capture the 3D structure of the operating environment, thereby enriching state representations.</p>`
        },
        {
          title: 'Experimental Results',
          content: `<p>Benchmark tests on simulated environments reveal significant gains in efficiency and performance. The optimized framework shows a marked reduction in training time and an improvement in convergence stability, validating the merits of the integrated approach.</p>`
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
      id: 'fpga-terrain',
      title: 'Hardware-Aware Terrain Classification on FPGA',
      description: 'Optimized and deployed a deep learning terrain classifier on AMD Kria KR260 FPGA using Vitis AI and quantization',
      tech: ['Python', 'FPGA', 'Vitis AI', 'ROS2', 'AMD Kria KR260', 'Quantization', 'Knowledge Distillation', 'PyTorch'],
      keyPoints: [
        'Deployed a terrain-classification network onto AMD Kria KR260 FPGA fabric through the Xilinx Vitis AI flow, quantizing to INT8 for the DPU to meet real-time latency and on-chip memory limits under ROS2',
        'Cut classifier 40% with knowledge distillation and parameter auto-tuning while holding accuracy for onboard use'
      ],
      fullDescription: `<p>This project introduces a hardware-aware implementation of a deep learning terrain classifier deployed on an embedded FPGA platform (AMD Kria KR260). By using knowledge distillation to compress a teacher model and quantizing weights/activations to 8-bit integers (INT8) using Vitis AI, we optimized the network for the Deep Learning Processor Unit (DPU) to achieve low-latency execution suited for mobile robots under ROS2.</p>`,
      sections: [
        {
          title: 'Model Compression & Quantization',
          content: `<p>To run the network on resource-constrained hardware, we used a knowledge distillation framework where a lightweight student network was trained under the guidance of a high-capacity CNN. The student network was then quantized using Vitis AI's Post-Training Quantization (PTQ) to INT8 precision. This process reduced the parameter footprint by 40% while preserving baseline classification accuracy within 1.2%.</p>`
        },
        {
          title: 'FPGA Deployment and ROS2 Integration',
          content: `<p>The quantized model was compiled into DPU instructions and deployed on the Kria KR260. A ROS2 node was developed in C++ to capture camera/IMU streams, preprocess inputs, invoke the DPU runner, and publish terrain classifications. This achieved real-time execution meeting the strict latency and on-chip memory constraints required for navigation feedback.</p>`
        }
      ],
      github: 'https://github.com/khgaurav/FPGA_Terrain_Classification'
    },
    {
      id: 'i2c-protocol',
      title: 'I2C Protocol RTL Design in Verilog',
      description: 'Designed and simulated a single-master single-slave I2C bus RTL in Verilog with clock stretching',
      tech: ['Verilog', 'Xilinx Vivado', 'ModelSim', 'RTL Design', 'FPGA', 'Digital Systems'],
      keyPoints: [
        'Designed and simulated a single-master single-slave I2C bus RTL in Verilog on the Xilinx toolchain, implementing START and STOP conditions, 7-bit addressing, ACK handshaking, and clock stretching over the SDA and SCL lines',
        'Verified master-slave read and write transactions in simulation with SCL configurable independent of system clock'
      ],
      fullDescription: `<p>This project features a complete, synthesizable Register-Transfer Level (RTL) design of the standard I2C communication protocol in Verilog. It models a single-master single-slave topology, supporting essential features like start/stop generation, 7-bit device addressing, read/write bit transfer, acknowledgment handshaking, and master-side clock stretching for slower slave devices.</p>`,
      sections: [
        {
          title: 'RTL Architecture & Finite State Machine',
          content: `<p>The core design uses a Finite State Machine (FSM) to control the I2C protocol states. The master state machine transitions through IDLE, START, ADDR, ACK1, WR_DATA, RD_DATA, ACK2, and STOP states. Clock stretching is handled by monitoring the SCL line; if a slave pulls SCL low to slow down transfer, the master detects this and stalls its internal counter until SCL is released high.</p>`
        },
        {
          title: 'Simulation and Verification',
          content: `<p>Functional verification was performed using a testbench in ModelSim/Vivado Simulator. We simulated read and write transactions with varying data payloads and speed modes (up to 400 kHz). The simulation verified clock stretching by injecting artificial slave delays, confirming that the master correctly paused and resumed data transmission without corruption.</p>`
        }
      ],
      github: 'https://github.com/khgaurav/I2C_RTL_Design'
    },
    {
      id: 'sentiment-analysis',
      title: 'Sentiment Analysis with Rigorous Evaluation',
      description: 'Trained a Bi-LSTM with Bahdanau attention and Word2Vec on 1M reviews with extensive ablation and error analysis',
      tech: ['Python', 'PyTorch', 'Word2Vec', 'Bi-LSTM', 'Attention Mechanisms', 'NLP', 'k-fold CV', 'Ablation Studies'],
      keyPoints: [
        'Trained a Bi-LSTM with Bahdanau attention and custom skip-gram Word2Vec embeddings on 1M cleaned Amazon reviews for sentiment classification, reaching 93.9% accuracy and 0.96 F1 after tokenizing the raw corpus',
        'Designed the evaluation with k-fold stratified cross-validation and a nine-variant ablation over depth, dropout, and attention, then ran extreme-error analysis to surface systematic false positives from label noise'
      ],
      fullDescription: `<p>This project focuses on a high-accuracy Bidirectional LSTM classifier with Bahdanau attention for sentiment analysis on a corpus of 1 million Amazon reviews. Beyond standard training, the project emphasizes a highly rigorous validation framework including stratified k-fold cross-validation, a 9-variant ablation study, and systematic error analysis to identify label noise and model boundaries.</p>`,
      sections: [
        {
          title: 'Architecture & Attention Model',
          content: `<p>We trained custom Word2Vec skip-gram embeddings on the corpus to initialize the embedding layer. The classifier features a Bidirectional LSTM layer followed by a Bahdanau (additive) attention mechanism, which computes alignment scores over hidden states to focus on key sentimental terms. This model achieved an F1-score of 0.96 and an accuracy of 93.9%.</p>`
        },
        {
          title: 'Rigorous Ablation & Error Analysis',
          content: `<p>To validate architectural choices, we performed a 9-variant ablation study over network depth, dropout rates, and attention configurations. Evaluation was performed using stratified 5-fold cross-validation. Furthermore, we conducted an extreme-error analysis on the top misclassifications, revealing that a large portion of errors originated from label noise in the dataset itself rather than model failure.</p>`
        }
      ],
      github: 'https://github.com/khgaurav/Sentiment_Evaluation'
    },
    {
      id: 'vlm-localization',
      title: 'Hybrid Semantic Localization Using LiDAR SLAM and Vision-Language Embeddings',
      description: 'Hybrid localization framework combining geometric SLAM with vision-language model (VLM) embeddings to create a lightweight semantic map',
      tech: ['Python', 'C++', 'SLAM', 'LIO-SAM', 'SigLIP 2', 'FAISS', 'ROS', 'PyTorch'],
      keyPoints: [
        'Designed a hybrid localization system combining LIO-SAM SLAM with SigLIP 2 VLM embeddings and FAISS vector search, achieving a 17x reduction in map size (368 KB vs 6.0 MB voxelized SLAM map / 2.31 GB raw LiDAR bag)',
        'Evaluated on the M2DGR dataset (gate_01 sequence), achieving an exceptional in-map median Absolute Trajectory Error (ATE) of 0.32 m and 95th percentile error of 2.1 m without local geometric refinement',
        'Implemented a temporal plausibility filter on top-10 retrieved candidate matches to resolve visual aliasing/ambiguous matches, ensuring robust sequential trajectory estimation'
      ],
      fullDescription: `<p>This project introduces a robust, lightweight hybrid localization framework that combines geometric SLAM (LIO-SAM) with semantic vision-language model (VLM) embeddings from SigLIP 2 for scalable place recognition. By storing only 768-dimensional float vectors and SE(3) poses for keyframes rather than dense point clouds, the system dramatically reduces memory footprint while maintaining high-fidelity trajectory tracking and sub-millisecond pose retrieval.</p>`,
      sections: [
        {
          title: 'System Overview & Mapping Pipeline',
          content: `<p>The mapping pipeline uses LIO-SAM to process LiDAR and IMU data, generating keyframe poses. Each keyframe is associated with a timestamp-matched RGB image. The images are passed through the SigLIP 2 VLM vision encoder to produce 768-dimensional global embedding vectors. These embeddings are stored in a FAISS index configured for cosine similarity search, mapping to their respective SE(3) poses. This compresses the map storage to just 368 KB for 120 keyframes—a 17x reduction over voxelized SLAM maps and over 6,500x smaller than raw sensor streams.</p>`
        },
        {
          title: 'Localization & Temporal Filtering',
          content: `<p>During online localization, query RGB images from a camera are processed through the same SigLIP 2 model to extract embeddings, which are compared against the FAISS index to retrieve the top-10 candidate keyframe poses. To mitigate perceptual aliasing (where visually similar scenes map to different physical locations), a temporal plausibility filter is applied. The filter rejects candidate matches that imply unrealistic motion or large spatial jumps, resulting in a stable and robust visual localization trajectory.</p>`
        },
        {
          title: 'Experimental Evaluation',
          content: `<p>We evaluated the system on the gate_01 sequence of the M2DGR dataset using Absolute Trajectory Error (ATE) metrics. Without local geometric refinement (such as Iterative Closest Point), the purely topological retrieval achieved an exceptional median ATE of 0.32 meters, with 88.4% of queries falling within a 1-meter threshold, demonstrating the viability of lightweight, camera-only semantic localization for edge devices.</p>`
        }
      ],
      images: [],
      github: 'https://github.com/khgaurav/Semantic_SLAM'
    },
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
      fullDescription: `<p>Mars Rover Manipal is an interdisciplinary student project that aims to explore robotics and its application in interplanetary expeditions.</p>
      <p>The project MRM annually participates in international and national competitions, The University Rover Challenge, European Rover Challenge, International Rover Challenge, International Rover Design Challenge and the International Mars Hackathon, organised by The Mars Society- The United States and South Asia since 2016.</p>
      <p>The Electronics & AI subsystem processes and interprets data from various sensors such as cameras, GPS, LiDARS, and IMUs for the autonomous part of the robot and also sets up and interfaces with various segments of the rover, which work together to achieve the rover's desired performance in all tasks for effective control and communication.</p>`,
      sections: [
        {
          title: 'Autonomous Mission',
          content: `<p>The Autonomous Traversal mission has been approached in a modular fashion by breaking down the given problem statement into subtasks and testing each of them meticulously. For navigation, an RTK GPS has been configured to rectify its error by picking up a RTCM stream. The rover is localized accurately by fusing GPS, IMU and visual odometry data using an extended Kalman filter.</p>
          <p>For robust obstacle avoidance, the system deduces its surrounding by making use of a 275° FOV 3D LiDAR and a stereocam in tandem. Ground plane from the LiDAR is removed using RANSAC. Obstacles are smoothly circumvented from a long distance by computing a sum of vectors from the cardioid scaled laser scan to provide dynamic soft turn commands. The stereocam is used to avoid nearby obstacles that remain undetected by the LiDAR. The whole autonomous system is set up on ROS to ensure modularity, easy communication between modules and efficient integration of all nodes to accomplish all the subtasks.</p>`
        },
        {
          title: 'Rover Control',
          content: `<p>A 32-bit ARM Cortex M4 based STM32 F3 Discovery is used to achieve precise and accurate control of the rover. It serves as the primary controller responsible for controlling the motor drivers of the wheels and robotic manipulator, and rotation of multiple cameras. The control is divided into five modes:</p>
          <ul>
            <li>Traversal</li>
            <li>Hill assist</li>
            <li>Robotic manipulator</li>
            <li>Soil collection</li>
            <li>Autonomous traversal</li>
          </ul>
          <p>A single modular program has been developed that can seamlessly switch between the five modes. Precise 32-bit multi-channel timers are used to implement six-wheel skid drive and hill assist. Hill assist holds the rover at a given position at an inclination where normally slipping might occur, thereby assisting the driver to operate the robotic manipulator on steep hills. Six-wheel skid drive is used to overcome extreme terrains that are hilly, rocky and rough by controlling the torque provided by each motor. Fail safes in the code have been incorporated as protection against rover damages by restricting unwarranted motion of the rover. A custom Battery Monitoring System has been fabricated to monitor battery parameters.</p>`
        },
        {
          title: 'Communication',
          content: `<p>The rover operates on 5.8GHz and 2.4GHz frequency bands with a combination of omni-directional, directional and circular polarized antennas that adhere to the FCC standards and regulations. In previous competitions, the rover lost communication link in Non-Line of Sight (NLOS) situation.</p>
          <p>A comprehensive analysis of various antenna parameters was performed to isolate the problem. The router's proprietary communication protocol uses an acknowledgment feature for fail-safe data transfer, which caused a problem in NLOS communication. Multiple measures including circular polarized antennas, increasing the height of the antennas, and automatic path traceback have been used to overcome the issue.</p>`
        },
        {
          title: 'Graphical User Interface (GUI)',
          content: `<p>The GUI has different views for every task, each consisting of buttons and graphs. It helps us reduce the base station set-up time in all tasks and makes the control of the rover more intuitive. All camera feeds from the rover are hosted on a local server and accessed on various client laptops as required. This prevents saturation of the bandwidth as the same camera feeds aren't requested multiple times. Live GPS plotting of the rover has been achieved to allow the driver to direct the rover towards the locations given in the task. A navigation indicator and a destination indicator has been incorporated in the GUI for the same.</p>`
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
      id: 'monocular-depth',
      title: 'Monocular Depth Estimation',
      description: 'Hybrid architecture combining Swin Transformers and knowledge distillation for high-precision depth estimation',
      tech: ['Python', 'PyTorch', 'Swin Transformer', 'Knowledge Distillation', 'Edge Deployment', 'PyTorch Lightning'],
      keyPoints: [
        'Enhanced Apple Depth Pro using Swin Transformer architecture and Cross-Context Distillation from Distill Any Depth teacher model, achieving 22% RMSE reduction on NYU/KITTI',
        'Optimized boundary accuracy by 41% through multi-scale feature fusion and global-local context alignment',
        'Deployed real-time inference pipeline (35ms/frame) on NVIDIA Jetson via TensorRT optimization while maintaining 2.25MP resolution'
      ],
      fullDescription: `<p>This advanced monocular depth estimation system enhances Apple's Depth Pro foundation through three key innovations:</p>
      <ol>
        <li>Swin Transformer architecture for linear-complexity multi-scale processing</li>
        <li>Cross-Context Knowledge Distillation from Distill Any Depth's multi-teacher framework</li>
        <li>Edge-optimized deployment via layer fusion and mixed-precision quantization.</li>
      </ol>
      <p>The system achieves state-of-the-art performance on NYU Depth v2 (0.385 RMSE) and KITTI (2.873 RMSE) while maintaining real-time capabilities through architectural optimizations and advanced training techniques. Practical applications span robotic navigation, AR/VR scene understanding, and autonomous vehicle perception systems.</p>`,
      sections: [
        {
          title: 'Architectural Innovations',
          content: `<p>The enhanced architecture combines Swin Transformer's hierarchical attention mechanisms with Depth Pro's original multi-scale ViT design. Key components include:</p>
          <ul>
            <li>Shifted window self-attention for local-global feature integration</li>
            <li>Cross-Context Distillation head transferring knowledge from Distill Any Depth</li>
            <li>Dynamic depth bins adaptation for improved metric depth estimation</li>
          </ul>
          <p>Hybrid quantization (FP16/INT8) enables 4.2x faster inference on edge devices while maintaining sub-centimeter accuracy.</p>`
        },
        {
          title: 'Training Methodology',
          content: `<p>Implemented a phased training approach:</p>
          <ol>
            <li>Pretrained Swin Transformer backbone on synthetic data (MIX-6)</li>
            <li>Knowledge distillation using Distill Any Depth's multi-teacher framework</li>
            <li>Edge deployment optimization via differentiable quantization</li>
          </ol>
          <p>The Cross-Context Distillation loss combines:</p>
          <ul>
            <li>Structural similarity (SSIM) for boundary preservation</li>
            <li>Scale-aware gradient matching for depth discontinuities</li>
            <li>Affinity distillation for global context transfer</li>
          </ul>
          <p>This approach reduced boundary errors by 32% compared to baseline distillation methods.</p>`
        },
        {
          title: 'Performance Benchmarks',
          content: `<p>Comprehensive evaluation across multiple benchmarks:</p>
          <ul>
            <li><strong>NYU Depth v2:</strong> 0.385 RMSE (22% improvement over baseline)</li>
            <li><strong>KITTI:</strong> 2.873 RMSE with 41% better edge accuracy</li>
          </ul>`
        },
        {
          title: 'Applications and Extensions',
          content: `<p>Deployed in three real-world scenarios:</p>
          <ol>
            <li>Robotic navigation: Improved obstacle detection in cluttered environments</li>
            <li>AR measurement: Sub-centimeter accuracy up to 5m range</li>
            <li>Automotive perception: 4D occupancy grid generation</li>
          </ol>
          <p>Current work extends the framework to:</p>
          <ul>
            <li>Temporal depth consistency using neural parametric filters</li>
            <li>Few-shot adaptation for specialized domains (medical imaging)</li>
            <li>Multi-task learning with surface normal estimation</li>
          </ul>`
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
      fullDescription: `<p>Multi-Agent Trajectory Optimization leverages a Bayesian Optimization framework to plan and optimize flight trajectories for a coordinated swarm of drones. By integrating Gaussian Process regression, the system predicts feasible trajectory parameters that minimize snap and jerk while ensuring synchronized waypoint alignment across multiple agents. The approach extends single-drone multi-fidelity methods to a multi-agent context, incorporating dynamic constraint handling and collision avoidance in complex environments.</p>`,
      sections: [
        {
          title: 'Framework Overview',
          content: `<p>The framework integrates Bayesian Optimization with Gaussian Process regression to generate smooth, dynamically feasible trajectories. It formulates an optimization problem that minimizes trajectory snap while satisfying inter-drone synchronization and collision avoidance constraints.</p>`
        },
        {
          title: 'Methodology',
          content: `<p>Building on a single-drone multi-fidelity approach, the algorithm extends to handle multi-agent coordination by incorporating adaptive fidelity scheduling and novel acquisition functions tailored for inter-agent interactions. This method allows efficient exploration of the trajectory space while balancing computational load and accuracy.</p>`
        },
        {
          title: 'Experimental Setup and Results',
          content: `<p>Simulations were conducted in complex, dynamic environments with multiple drones operating simultaneously. The results demonstrate that the multi-agent framework achieves over 98% dynamic feasibility, with improved convergence rates and robustness against obstacles compared to baseline methods. Detailed performance metrics—including training times, convergence rates, and obstacle avoidance capabilities—are discussed in the report.</p>`
        },
        {
          title: 'Discussion and Future Work',
          content: `<p>The report addresses challenges in scalability and real-time implementation while outlining potential enhancements such as tighter integration with perception systems and adaptive re-planning strategies. Future work will focus on improving fault tolerance and validating the framework in real-world flight tests.</p>`
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
    }
  ];

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }
}
