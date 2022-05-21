import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent} from './reactiveform/reactiveform.component';
// import { HttpClientModule} from '@angular/common/http';
import { freeApiService} from './service/freeapi.service';

@NgModule({
  declarations: [
    AppComponent,
    FormreactiveComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // RouterModule 
    HttpClientModule
  ],
  providers: [ freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
