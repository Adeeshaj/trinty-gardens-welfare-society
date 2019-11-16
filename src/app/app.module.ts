import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'events', component: EventsComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'announcements', component: AnnouncementsComponent},
      { path: 'vison-mission', component: VisionMissionComponent}
    ]) ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, AnnouncementsComponent, VisionMissionComponent, EventsComponent, ContactComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
