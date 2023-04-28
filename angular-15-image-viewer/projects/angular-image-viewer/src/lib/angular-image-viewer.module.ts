import { NgModule } from '@angular/core';
import { AngularImageViewerComponent } from './angular-image-viewer.component';
import { FullScreenDirective } from './directive/full-screen.directive';



@NgModule({
  declarations: [
    AngularImageViewerComponent,
    FullScreenDirective
  ],
  imports: [
  ],
  exports: [
    AngularImageViewerComponent
  ]
})
export class AngularImageViewerModule { }
