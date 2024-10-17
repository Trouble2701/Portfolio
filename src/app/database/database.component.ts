import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatabaseComponent {


  datas =
    [
      {
        myInfo: ['Frontend Entwickler', 'Weiterbildung Backend', 'in Dresden', 'Remote Arbeiten', 'Suche Herausforderungen', 'Offen für neue Technologien'],
        navBar: ['Über mich', 'Skills', 'Projekte'],
        legalNotice: 'Impressum',
        frontend: 'Frontend Entwickler',
        headline: ['Meine Arbeit', 'Schreib mir'],
        contact: [
          'Kontaktieren Sie mich',
          'Lassen Sie uns zusammenarbeiten',
          'Müssen Sie ein Problem lösen?',
          'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.',
          'Brauchen Sie einen Frontend-Entwickler?',
          'Dann lassen Sie uns reden!',
          'Wie ist Ihr Name?',
          'Ihr Name',
          'Wie ist Ihre E-Mail Adesse?',
          'ihreemail@email.de',
          'Wie kann ich Ihnen helfen?',
          'Hallo Sven, ich bin Interessiert..',
          'Ups! Ihr Name scheint zu fehlen',
          'Hoppla! Ihre E-Mail ist erforderlich',
          'Was müssen Sie entwickeln?',
          'Bitte akzeptieren Sie die Datenschutzerklärung',
          "Ich habe die ",
          'Datenschutzerklärung',
          'gelesen und stimme der darin beschriebenen Verarbeitung meiner Daten zu.',
          'Sagen Sie Hallo',
          'Nachricht wurde gesendet :-)',
        ],
        projects: 'Ausgewählte Projekte',
        projectsDes: 'Entdecken Sie hier eine Auswahl meiner Arbeiten – interagieren Sie mit Projekte, um meine Fähigkeiten in Aktion zu sehen',
        projectsQuest: 'Worum geht es in diesem Projekt?',
        projectsInfoFirst: 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
        projectsInfoSecond: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
        projectsInfoThird: 'Der Pokédex liefert Informationen zu den jeweiligen Pokenmon. Derzeit werden maximal 217 Pokemon geladen um die Ladezeit zu minimieren.',
        whoIam: [
          'Wer bin ich',
          'Über mich',
          'Hallo, mein Name ist Sven und ich bin',
          ' Jahre. Ich bin ein Frontend-Entwickler und wohne in Dresden. Motiviert durch die grenzenlosen Möglichkeiten innerhalb der IT freue ich mich darauf, visuell fesselnde und intuitive Websites und Anwendungen zu erstellen.',
          'Ich bin flexibel in Bezug auf die Arbeitsumgebung und kann sowohl vor Ort in Dresden als auch remote effektiv arbeiten.',
          'Ich bin aufgeschlossen und ich stelle mich gerne neuen Herausforderungen, um mein Wissen und meine Fähigkeiten stetig zu steigern.',
          "Ich sehe in der Gestaltung von WebApplications nicht nur simples Programmieren, sondern es ist für mich eine kreative Form der Problemlösung. Ich bin stolz auf meine Fähigkeiten, komplexe technische Herausforderungen in ansprechende, benutzerfreundliche Lösungen umzuwandeln. So helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.",
        ],
        technologies: [
          'Technologien',
          'Fähigkeiten',
          'Auf meinem Weg bei der Developer Akademie habe ich umfassendes Wissen erworben und den Einsatz verschiedener Frontend-Technologien und -Konzepte erlernt. Ich beherrsche unterschiedliche Programmiersprachen gut und im Umgang mit diversen Datenbanken bin ich sicher.',
          'Ich habe Ihr',
          'Interesse geweckt?',
          'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein bisheriges Wissen einzubringen und zu erweitern.',
          'Schreiben sie mir',
        ],
        reviews: [
          'Was meine Kollegen über mich sagen',
          'Sven hat im Teamprojekt "Kochwelt" tolle Arbeit geleistet. Er war immer hilfsbereit, motiviert und zuverlässig. Die Zusammenarbeit war eine gute Erfahrung.',
          'In unserer Projektarbeit war Sven ein unverzichtbarer und engagierter Kollege, der auch in schwierigen Situationen einen klaren Kopf behielt. Er war immer bereit zu unterstützen und brachte sich mit zielführenden Lösungsansätzen ein. Die Zusammenarbeit mit ihm war angenehm und durchweg konstruktiv.',
          'Ich kann auf eine super Zusammenarbeit mit den beiden Teilnehmern der Developer Akademie Gabor und Sven zurückblicken. Die beiden Kollegen konnten mit ihrem Vorsprung in JavaScript und ihren angeeigneten Kenntnissen zum rechtzeitigen Abschluss des gelungenen Projektes „Kochwelt“ beitragen',
        ],
      },
      {
        myInfo: ['Frontend Developer', 'Backend training', 'in Dresden', 'Available for remote work', 'Search Challenges', 'Open to new Technologies'],
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
          'Privacy Policy',
          'and agree to the processing of my data as outlined.',
          'Say Hello',
          'Message has been sent :-)',
        ],
        projects: 'Featured Projects',
        projectsDes: 'Explore a selection of my work here - interact with projects to see my skills in action',
        projectsQuest: 'What is this project about?',
        projectsInfoFirst: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        projectsInfoSecond: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        projectsInfoThird: 'The Pokédex provides information about the respective Pokemon. Currently, a maximum of 217 Pokemon are loaded to minimize loading time.',
        whoIam: [
          'Who I Am',
          'About Me',
          'Hello, my name is Sven and I am',
          ' years. I am a frontend developer and live in Dresden. Motivated by the limitless possibilities within IT I look forward to creating visually captivating and intuitive websites and applications.',
          'I am flexible in terms of work environment and can work effectively both on-site in Dresden and remotely.',
          'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
          "In my profession, programming isn't just about writing code, it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life."
        ],
        technologies: [
          'Technologies',
          'Skill Set',
          'During my journey at Developer Academy, I have learned to work extensively on various projects and use various frontend technologies and concepts. I am open to using new technologies and methodologies to continuously improve my skills and stay at the forefront in the ever-evolving landscape of web development.',
          'Have I piqued',
          'your interest?',
          'Please feel free to contact me. I look forward to contributing and expanding my existing knowledge.',
          "Let's Talk",
        ],
        reviews: [
          'What my colleagues say about me',
          'Sven did a great job in the “Kochwelt” team project. He was always helpful, motivated and reliable. It was a good experience working together.',
          'In our project work, Sven was an indispensable and committed colleague who kept a clear head even in difficult situations. He was always ready to support and contributed targeted solutions. Working with him was pleasant and consistently constructive.',
          'I can look back on a great collaboration with the two participants of the Developer Academy, Gabor and Sven. With their advantage in JavaScript and the knowledge they acquired, the two colleagues were able to contribute to the timely completion of the successful "Kochwelt" project.',
        ],
      }
    ];

codearts = ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript', 'JavaScript'];
languarge:string | null = '';
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
site:string = '';

sites = [
  {
    name: ['Join', 'El Pollo Loco', 'Pokédex'],
    img: ['join.png', 'elpollo.png', 'pokedex.png'],
    description:
      [this.projectsInfoFirst,
      this.projectsInfoSecond,
      this.projectsInfoThird],
    siteLinksGit: ['https://github.com/ClaudiaDaneder/Join', 'https://github.com/Trouble2701/el-polo-loco', 'https://github.com/Trouble2701/pokedex'],
    siteLinksTest: ['https://join.sven-plankenbichler.net', 'https://elpollo.sven-plankenbichler.net', 'https://pokedex.sven-plankenbichler.net'],
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
  this.sites[0].description[0] = this.projectsInfoFirst;
  this.sites[0].description[1] = this.projectsInfoSecond;
  this.sites[0].description[2] = this.projectsInfoThird;
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
