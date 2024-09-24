import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AboutmeComponent, SkillsComponent, ProjectsComponent, ReviewsComponent, ContactComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
