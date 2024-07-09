
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent, NgFor],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  constructor(public lngService: LanguageService) {

  }


  myProjects: {
    id: number;
    imgPath: string;
    name: string;
    language: string;
    descriptionEN: string;
    descriptionGER: string;
    live: string;
    github: string;
  }[] = [{
    "id": 1,
    "imgPath": "assets/img/projects_dabubble.png",
    "name": "DABubble",
    "language": "Angular | TypeScript | Firebase | HTML | SCSS",
    "descriptionEN": "Chat messenger inspired by Slack. Stay in contact with colleagues, keep up to date, and share thoughts and ideas.",
    "descriptionGER": "Chat-Messenger inspiriert von Slack. Halten Sie Kontakt zu Ihren Kollegen, bleiben Sie auf dem neuesten Stand und teilen Sie Gedanken und Ideen.",
    "live": "https://da-bubble.stephanie-wetzel.com/",
    "github": "https://github.com/StephanieWetzel/DABubble.git"
  },
  {
    "id": 2,
    "imgPath": "assets/img/projects_join.png",
    "name": "Join",
    "language": "JavaScript | HTML | CSS",
    "descriptionEN": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users & categories.",
    "descriptionGER": "Task-Manager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer & Kategorien zu.",
    "live": "https://join.stephanie-wetzel.com/login_index.html",
    "github": "https://github.com/StephanieWetzel/Join.git"
  },
  {
    "id": 3,
    "imgPath": "assets/img/projects_sharkie.png",
    "name": "Sharkie",
    "language": "JavaScript | HTML | CSS",
    "descriptionEN": "Jump and run game based on object-oriented approach. Help Sharkie find coins and poison bottles to fight against the mad whale.",
    "descriptionGER": "Jump-and-Run-Spiel basierend auf dem objektorientierten Ansatz. Helfen Sie Sharkie, Münzen und Giftflaschen zu finden, um gegen den verrückten Wal zu kämpfen.",
    "live": "https://sharkie.stephanie-wetzel.com/index.html",
    "github": "https://github.com/StephanieWetzel/sharkie.git"
  },
  {
    "id": 4,
    "imgPath": "assets/img/projects_pokedex.png",
    "name": "Pokédex",
    "language": "JavaScript | HTML | CSS | Api",
    "descriptionEN": "Based on the PokéAPI - a simple library that provides and catalogues pokemon information.",
    "descriptionGER": "Basierend auf der PokéAPI - eine einfache Bibliothek, die Informationen über Pokémon bereitstellt und katalogisiert.",
    "live": "https://pokedex.stephanie-wetzel.com/index.html",
    "github": "https://github.com/StephanieWetzel/pokedex.git"
  }
    ];
}