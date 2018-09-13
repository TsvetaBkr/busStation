import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Route[] = [
  {path:"", component:HomeComponent},
  {path:"timetable", component: TimetableComponent},
  {path:"contacts", component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
