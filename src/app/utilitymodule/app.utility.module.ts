import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CommunicationService } from './services/app.communication.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/app.http.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [CommunicationService, HttpService]
})
export class UtilityModule {}

