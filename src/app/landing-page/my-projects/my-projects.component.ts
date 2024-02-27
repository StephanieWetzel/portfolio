
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent, NgFor],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  myProjects: {
    id: number;
    imgPath: string;
    name: string;
    language: string;
    description: string;
    live: string;
    github: string
  }[] = [{
    "id": 1,
    "imgPath": "assets/img/projects_join.png",
    "name": "Join",
    "language": "JavaScript | HTML | CSS",
    "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    "live": "https://stephanie-wetzel.com/join/login_index.html",
    "github": "https://github.com/StephanieWetzel/Join"
  },
  {
    "id": 2,
    "imgPath": "assets/img/projects_sharkie.png",
    "name": "Sharkie",
    "language": "JavaScript | HTML | CSS",
    "description": "Jump and run game based on object-oriented approach. Help Sharkie find coins and poison bottles to fight against the mad whale.",
    "live": "https://stephanie-wetzel.com/sharkie/index.html",
    "github": "https://github.com/StephanieWetzel/sharkie"
  },
  {
    "id": 3,
    "imgPath": "assets/img/projects_pokedex.png",
    "name": "Pokédex",
    "language": "JavaScript | HTML | CSS | Api",
    "description": "Based on the PokéAPI - a simple library that provides and catalogues pokemon information.",
    "live": "https://stephanie-wetzel.com/pokedex/index.html",
    "github": "https://github.com/StephanieWetzel/pokedex"
  }
    ];
}
