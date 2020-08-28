import { TestBed } from '@angular/core/testing';
import { ContactService } from './contact.service';
import { CONTACTS } from '../components/consts';
import { IContact } from '../interfaces/IContact';

describe('ContactService', () => {
  const contactListMock = CONTACTS;
  const contactMock: IContact = {
    id: null,
    surname: 'Странный',
    name: 'Менее',
    patronym: 'Какой-то',
    phone: '70000500000',
    isFavorite: false,
  };
  let contactService: ContactService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    contactService = TestBed.get(ContactService);
  });

  it('should be created', () => {
    const service: ContactService = TestBed.get(ContactService);
    expect(service).toBeTruthy();
  });

  it('getContactList should return contactList',
    (done: DoneFn) => {
      contactService.getContactList().subscribe(value => {
        expect(value).toBe(contactListMock);
        expect(value.length).toBe(3);
        done();
      });
    });

  it('addContact should been called', () => {
    spyOn(contactService, 'addContact').and.callFake(() => {
    });
    contactService.addContact(contactMock);

    expect(contactService.addContact).toHaveBeenCalled();
  });

  it('deleteContact should been called', () => {
    spyOn(contactService, 'deleteContact').and.callFake(() => {
    });
    contactService.deleteContact(1);

    expect(contactService.deleteContact).toHaveBeenCalled();
  });

  it('makeFavorite should been called', () => {
    spyOn(contactService, 'makeFavorite').and.callFake(() => {
    });
    contactService.makeFavorite(contactMock.id);

    expect(contactService.makeFavorite).toHaveBeenCalled();
  });
});
