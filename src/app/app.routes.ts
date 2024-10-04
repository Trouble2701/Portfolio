import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ImprintComponent } from './content/imprint/imprint.component';
import { PolicyComponent } from './content/policy/policy.component';

export const routes: Routes = [
    {path: '', component:ContentComponent},
    {path: 'imprint', component:ImprintComponent},
    {path: 'policy', component:PolicyComponent},
];
