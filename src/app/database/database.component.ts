import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatabaseComponent {


  datas =
    [
      {
        myInfo: ['Frontend Entwickler', 'Wohne in Dresden', 'Remote Arbeiten'],
        navBar: ['Über mich', 'Skills', 'Projekte'],
        legalNotice: 'Impressum',
        frontend: 'Frontend Entwickler',
        headline: ['Meine Arbeit', 'Schreib mir'],
        contact: [
          'Kontaktieren Sie mich', 
          'Lassen Sie uns zusammenarbeiten', 
          'Müssen Sie ein Problem Lösen?', 
          'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.',
          'Brauchen Sie einen Frontend-Entwickler?',
          'Lassen Sie uns Reden!',
          'Wie ist Ihr Name',
          'Hier kommt Ihr Name rein',
          'Wie ist Ihre E-Mail Adesse',
          'deineemail@email.de',
          'Wie kann ich Ihnen helfen?',
          'Hallo Sven, ich bin Interessiert..',
          'Ups! Ihr Name scheint zu fehlen',
          'Hoppla! Ihre E-Mail ist erforderlich',
          'Was müssen Sie entwickeln?',
          'Bitte akzeptieren Sie die Datenschutzerklärung',
          "Ich habe die ",
          'Datenschutzerklärung',
          'gelesen und stimme der darin beschriebenen Verarbeitung meiner Daten zu.',
          'Sagen Sie Hallo'
        ],
        projects: 'Ausgeählte Projekte',
        projectsDes: 'Entdecken Sie hier eine Auswahl meiner Arbeiten – interagieren Sie mit Projekte, um meine Fähigkeiten in Aktion zu sehen',
        projectsQuest: 'Worum geht es in diesem Projekt?',
        projectsInfoFirst: 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
        projectsInfoSecond: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
        projectsInfoThird: 'Diese App ist eine Slack-Clone-App. Es revolutioniert die Teamkommunikation und Zusammenarbeit mit seiner intuitiven Benutzeroberfläche, Echtzeit-Messaging und einer robusten Kanalorganisation.',
      },
      {
        myInfo: ['Frontend Developer', 'Based in Dresden', 'Available for remote work'],
        navBar: ['About me', 'Skills', 'Projects'],
        legalNotice: 'Legal Notice',
        frontend: 'Frontend Developer',
        headline: ['Check my Work', 'Contact me'],
        contact: [
          'Contact me', 
          "Let's work together", 
          'Got a problem to solve?', 
          'Contact me througth this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
          'Need a Frontend developer?',
          "Let's Talk!",
          "What's your name?",
          'Your name goes here',
          "What's your email?",
          'youremail@email.com',
          'How can I help you?',
          'Hello Sven, i am intrested in..',
          'Oops! it seems your name is missing',
          'Hoppla! your email is required',
          'What do you need to develop?',
          'Please Accept the private policy',
          "I've read the ",
          'privacy policy',
          'and agree to the processing of my data as outlined.',
          'Say Hello'
        ],
        projects: 'Featured Projects',
        projectsDes: 'Explore a selection of my work here - interact with projects to see my skills in action',
        projectsQuest: 'What is this project about?',
        projectsInfoFirst: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        projectsInfoSecond: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        projectsInfoThird: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      }
    ];

  codearts = ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript', 'JavaScript'];
  languarge = 'DE';
  toLang = 0;
  myInfo = this.datas[this.toLang].myInfo;
  navBar = this.datas[this.toLang].navBar;
  legalNotice = this.datas[this.toLang].legalNotice;
  frontend = this.datas[this.toLang].frontend;
  contact = this.datas[this.toLang].contact;
  headLine = this.datas[this.toLang].headline;
  projects = this.datas[this.toLang].projects;
  projectsDes = this.datas[this.toLang].projectsDes;
  projectsQuest = this.datas[this.toLang].projectsQuest;
  projectsInfoFirst = this.datas[this.toLang].projectsInfoFirst;
  projectsInfoSecond = this.datas[this.toLang].projectsInfoSecond;
  projectsInfoThird = this.datas[this.toLang].projectsInfoThird;

  sites = [
    {
      name: ['Join', 'El Pollo Loco', 'DA Bubble'],
      img: ['join.png', 'elpollo.png', 'dabubble.png'],
      description: 
      [this.projectsInfoFirst,
        this.projectsInfoSecond,
        this.projectsInfoThird],
      siteLinksGit:['https://github.com/ClaudiaDaneder/Join', 'https://github.com/Trouble2701/el-polo-loco', 'https://github.com'],
      siteLinksTest:['https://sven-friedrich.developerakademie.net/Join/', 'https://sven-friedrich.developerakademie.net/elpollo/', 'https://dabubble.ihor-tsarkov.com/'],
    }
  ];
  constructor() {
    this.setLang();
  }

  setLang() {
    setInterval(() => {
      this.toLang = this.languarge == 'DE' ? 0 : 1;
      this.headerLang();
      this.footerLang();
      this.contactMe();
      this.projectsTitle();
    }, 100)
  }

  headerLang() {
    this.myInfo = this.datas[this.toLang].myInfo;
    this.navBar = this.datas[this.toLang].navBar;
    this.frontend = this.datas[this.toLang].frontend;
    this.headLine = this.datas[this.toLang].headline;
  }

  contactMe(){
    this.contact = this.datas[this.toLang].contact;
  }

  projectsTitle(){
    this.projects = this.datas[this.toLang].projects;
    this.projectsDes = this.datas[this.toLang].projectsDes;
    this.projectsQuest = this.datas[this.toLang].projectsQuest;
    this.projectsInfoFirst = this.datas[this.toLang].projectsInfoFirst;
    this.projectsInfoSecond = this.datas[this.toLang].projectsInfoSecond;
    this.projectsInfoThird = this.datas[this.toLang].projectsInfoThird;
    console.log(this.projectsInfoFirst);
  }

  footerLang() {
    this.legalNotice = this.datas[this.toLang].legalNotice;
  }
}
