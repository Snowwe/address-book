import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { ContactService } from '../../../services/contact.service';
import { NgxMaskModule } from 'ngx-mask';
import { IContact } from "../../../interfaces/IContact";

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let contactService: ContactService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      imports: [NgxMaskModule.forRoot()],
      providers: [ContactService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    contactService = TestBed.get(ContactService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete contact', () => {
    spyOn(contactService, 'deleteContact');

    component.deleteContact(1);

    expect(contactService.deleteContact).toHaveBeenCalled();
  });

  it('should set isFavorite contact', () => {
    const testContact: IContact = {
      id: null,
      surname: 'Странный',
      name: 'Менее',
      patronym: 'Какой-то',
      phone: '70000500000',
      isFavorite: false,
    };

    spyOn(contactService, 'makeFavorite');

    component.isFavorite(testContact.id);

    expect(contactService.makeFavorite).toHaveBeenCalled();
  });
});
