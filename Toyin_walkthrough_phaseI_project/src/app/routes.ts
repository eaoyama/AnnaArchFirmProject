import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home page' } // Use 'data' instead of 'title'
      },
      {
        path: 'clients',
        component: ClientFormComponent,
        data: { title: 'Create Clients' } // Use 'data' instead of 'title'
      },
      {
        path: 'meetings',
        component: MeetingFormComponent,
        data: { title: 'Create Meetings' } // Use 'data' instead of 'title'
      }

];

export default routeConfig;