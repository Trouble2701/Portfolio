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
        projectsInfoThird: 'Der Pokedex liefert Informationen zu den jeweiligen Pokenmon. Derzeit werden maximal 217 Pokemon geladen um die Ladezeit zu minimieren.',
        whoIam: [
          'Wer bin ich',
          'Über mich',
          'Hallo, ich bin ein deutschsprachiger Frontend-Entwickler mit Sitz in Dresden. Motiviert durch die grenzenlosen Möglichkeiten innerhalb der IT, freue ich mich darauf, visuell fesselnde und intuitive Websites und Anwendungen zu erstellen.',
          'Flexibel in Bezug auf die Arbeitsumgebung kann ich sowohl vor Ort in Dresden als auch remote effektiv arbeiten.',
          'Ich bin aufgeschlossen und immer auf der Suche nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten stetig zu verbessern.',
          "In meinem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben; Es ist eine kreative Form der Problemlösung. Ich bin stolz auf meine Fähigkeit, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen umzuwandeln. So helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.",
        ],
        technologies: [
          'Technologien',
          'Fähigkeiten',
          'Meine Reise umfasste die Arbeit an verschiedenen Projekten und den Einsatz verschiedener Frontend-Technologien und -Konzepte. Ich bin offen für den Einsatz neuer Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden Landschaft der Webentwicklung an der Spitze zu bleiben.',
          'Sie brauchen eine',
          'andere Fähigkeit?',
          'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.',
          'Schreiben sie mir',
        ],
        reviews:[
          'Was meine Kollegen über mich sagen',
          'Sven hat im Teamprojekt "Kochwelt" tolle Arbeit gemacht. Er war immer hilfsbereit, motiviert und zuverlässig. Es war eine gute Erfahrung, zusammenzuarbeiten.',
          'In unserer Projektarbeit war Sven ein unverzichtbarer und engagierter Kollege, der auch in schwierigen Situationen einen klaren Kopf behielt. Er war immer bereit, zu unterstützen, und brachte sich mit zielführenden Lösungsansätzen ein. Die Zusammenarbeit mit ihm war angenehm und durchweg konstruktiv.',
          'Test',
        ]
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
        projectsInfoThird: 'The Pokedex provides information about the respective Pokemon. Currently, a maximum of 217 Pokemon are loaded to minimize loading time.',
        whoIam: [
          'Who I Am',
          'About Me',
          'Hi, I’m a german speaking Frontend Developer based in Dresden. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.',
          'Flexible in terms of working environments, I can work effectively both on-site in Dresden and remotely.',
          'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
          "In my profession, programming isn't just about writing code; it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life."
        ],
        technologies: [
          'Technologies',
          'Skill Set',
          'My journey has involved working on diverse projects, employing a range of frontend technologies and concepts. I am open to embracing new technologies and methodologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.',
          'You need',
          'another skill?',
          'Feel free to contact me. I look forward to expanding on my previous knowledge.',
          "Let's Talk",
        ],
        reviews:[
          'What my colleagues say about me',
          'Sven did a great job in the “Kochwelt” team project. He was always helpful, motivated and reliable. It was a good experience working together.',
          'In our project work, Sven was an indispensable and committed colleague who kept a clear head even in difficult situations. He was always ready to support and contributed targeted solutions. Working with him was pleasant and consistently constructive.',
          'Test',
        ]
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
  whoIam = this.datas[this.toLang].whoIam;
  technologies = this.datas[this.toLang].technologies;
  reviews = this.datas[this.toLang].reviews;

  sites = [
    {
      name: ['Join', 'El Pollo Loco', 'PokeDex'],
      img: ['join.png', 'elpollo.png', 'pokedex.png'],
      description:
        [this.projectsInfoFirst,
        this.projectsInfoSecond,
        this.projectsInfoThird],
      siteLinksGit: ['https://github.com/ClaudiaDaneder/Join', 'https://github.com/Trouble2701/el-polo-loco', 'https://github.com/Trouble2701/pokedex'],
      siteLinksTest: ['https://join.sven-plankenbichler.de', 'https://elpollo.sven-plankenbichler.de', 'https://pokedex.sven-plankenbichler.de'],
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
      this.whoIamContent();
      this.techContent();
      this.reviewShow();
    }, 100)
  }

  headerLang() {
    this.myInfo = this.datas[this.toLang].myInfo;
    this.navBar = this.datas[this.toLang].navBar;
    this.frontend = this.datas[this.toLang].frontend;
    this.headLine = this.datas[this.toLang].headline;
  }

  contactMe() {
    this.contact = this.datas[this.toLang].contact;
  }

  projectsTitle() {
    this.projects = this.datas[this.toLang].projects;
    this.projectsDes = this.datas[this.toLang].projectsDes;
    this.projectsQuest = this.datas[this.toLang].projectsQuest;
    this.projectsInfoFirst = this.datas[this.toLang].projectsInfoFirst;
    this.projectsInfoSecond = this.datas[this.toLang].projectsInfoSecond;
    this.projectsInfoThird = this.datas[this.toLang].projectsInfoThird;
  }

  whoIamContent() {
    this.whoIam = this.datas[this.toLang].whoIam;
  }

  techContent() {
    this.technologies = this.datas[this.toLang].technologies;
  }

  reviewShow(){
    this.reviews = this.datas[this.toLang].reviews;
  }

  footerLang() {
    this.legalNotice = this.datas[this.toLang].legalNotice;
  }
}
