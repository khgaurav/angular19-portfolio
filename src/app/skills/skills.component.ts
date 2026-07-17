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
      name: 'AI/ML & Reinforcement Learning',
      skills: [
        {
          name: 'LLMs & Agentic Frameworks',
          description: 'Building multi-agent reasoning graphs (LangGraph), complex routing/retrieval chains (LangChain), and RAG pipelines.'
        },
        {
          name: 'Reinforcement Learning (RL)',
          description: 'Deep experience optimizing control policies (DDPG/PPO) in MuJoCo environments and designing RL-as-a-judge (RLAIF) loops for model retraining.'
        },
        {
          name: 'Deep Learning & CV',
          description: 'Experience building/training neural networks (PyTorch, TensorFlow) and deploying YOLO detectors for real-time monitoring.'
        },
        {
          name: 'Evaluation & Validation',
          description: 'Designing rigorous evaluation frameworks, including stratified cross-validation, ablation studies, and extreme-error analysis.'
        }
      ]
    },
    {
      name: 'Chip Design & Verification',
      skills: [
        {
          name: 'Verilog / SystemVerilog',
          description: 'Designing and simulating synthesizable digital hardware architectures, state machines, and interface controllers.'
        },
        {
          name: 'FPGA Deployment',
          description: 'Compiling and deploying neural networks onto AMD Kria KR260 FPGA fabrics through the Xilinx Vitis AI flow.'
        },
        {
          name: 'RTL & Interface Design',
          description: 'Implementing bus protocols (I2C, SPI), clock stretching, and custom hardware-software interfaces.'
        },
        {
          name: 'Quantization & DPU',
          description: 'Quantizing model weights/activations to INT8 precision to fit DPU memory and meet real-time latency constraints.'
        }
      ]
    },
    {
      name: 'Data Pipelines & MLOps',
      skills: [
        {
          name: 'Data Pipelines & Generation',
          description: 'Building pipelines for high-throughput streaming (Kafka, Protobuf) and synthetic data/frame creation.'
        },
        {
          name: 'MLOps & Orchestration',
          description: 'Managing end-to-end ML lifecycles, dataset versioning, and experiment tracking using MLflow and Dataiku.'
        },
        {
          name: 'Backend & Vector Search',
          description: 'Developing performant backend microservices (FastAPI, Spring Boot) and integrating FAISS vector databases.'
        },
        {
          name: 'Database Systems',
          description: 'Structuring, indexing, and querying prediction streams and experiment logs using MongoDB DocumentDB.'
        }
      ]
    }
  ];
}
