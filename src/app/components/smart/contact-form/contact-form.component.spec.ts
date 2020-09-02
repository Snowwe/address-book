import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ContactService } from '../../../services/contact.service';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let contactService: ContactService;
  const contactMock = {
    id: null,
    surname: 'Странный',
    name: 'Менее',
    patronym: 'Какой-то',
    phone: '70000500000',
    isFavorite: false,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot()
      ],
      providers: [ContactService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    contactService = TestBed.get(ContactService);
    fixture.detectChanges();
    spyOn(contactService, 'addContact');
    spyOn(component.contactForm, 'reset');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.contactForm).toBeTruthy();
  });

  it('should add contact', () => {
    component.contactForm.patchValue({
      surname: 'Странный',
      name: 'Менее',
      patronym: 'Какой-то',
      phone: '0000500000',
    });
    component.addContact();

    expect(component.contactForm.reset).toHaveBeenCalled();
    expect(contactService.addContact).toHaveBeenCalledWith(contactMock);
  });

  it('shouldn\'t add contact', () => {
    component.contactForm.patchValue({
      surname: '',
      name: 'Менее',
      patronym: 'Какой-то',
      phone: '0000500000',
    });
    component.addContact();
    expect(component.contactForm.valid).toBeFalsy();
  });

});
