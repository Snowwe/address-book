import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ContactFormComponent} from './components/smart/contact-form/contact-form.component';
import {ContactListComponent} from './components/smart/contact-list/contact-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactFormComponent,
        ContactListComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot()
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
