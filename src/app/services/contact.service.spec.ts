import { TestBed } from '@angular/core/testing';
import { ContactService } from './contact.service';
import { CONTACTS } from '../components/consts';
import { IContact } from "../interfaces/IContact";

describe('ContactService', () => {
  const contactListMock = CONTACTS;
  const contactMock: IContact = {
    id: null,
    surname: 'Аааа',
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

  it('addContact should add contact to contactList', (done) => {
    const contacts = contactListMock;
    const contact = contactMock;
    const result = [
      {
        id: 3,
        surname: 'Вообще',
        name: 'Не-представляю',
        patronym: 'Кто-это',
        phone: '70000200000',
        isFavorite: false,
      },
      {
        id: 1,
        surname: 'Странный',
        name: 'Менее',
        patronym: 'Какой-то',
        phone: '70000500000',
        isFavorite: false,
      },
      {
        id: 2,
        surname: 'Чуть',
        name: 'Менее',
        patronym: 'Странный',
        phone: '70000300000',
        isFavorite: false,
      },
      {
        id: 4,
        surname: 'Аааа',
        name: 'Менее',
        patronym: 'Какой-то',
        phone: '70000500000',
        isFavorite: false,
      },
    ];

    contactService.setContacts(contacts);
    contactService.addContact(contact);

    contactService.contactList$.subscribe(
      value => {
        expect(value).toEqual(result);
        done();
      }
    );
  });

  it('deleteContact should delete contact', (done) => {
    const contacts = contactListMock;
    const result = [
      {
        id: 3,
        surname: 'Вообще',
        name: 'Не-представляю',
        patronym: 'Кто-это',
        phone: '70000200000',
        isFavorite: false,
      },
      {
        id: 1,
        surname: 'Странный',
        name: 'Менее',
        patronym: 'Какой-то',
        phone: '70000500000',
        isFavorite: false,
      },
    ];

    contactService.setContacts(contacts);
    contactService.deleteContact(2);

    contactService.contactList$.subscribe(
      value => {
        expect(value).toEqual(result);
        done();
      }
    );
  });

  it('makeFavorite should make Favorite', (done) => {
    const contacts = [
      {
        id: 1,
        surname: 'Странный',
        name: 'Менее',
        patronym: 'Какой-то',
        phone: '70000500000',
        isFavorite: false,
      },
    ];

    contactService.setContacts(contacts);
    contactService.makeFavorite(1);

    contactService.contactList$.subscribe(
      value => {
        expect(value[0].isFavorite).toBeTruthy();
        done();
      }
    );
  });

  it('makeFavorite should make not Favorite', (done) => {
    const contacts = [
      {
        id: 1,
        surname: 'Странный',
        name: 'Менее',
        patronym: 'Какой-то',
        phone: '70000500000',
        isFavorite: true,
      },
    ];

    contactService.setContacts(contacts);
    contactService.makeFavorite(1);

    contactService.contactList$.subscribe(
      value => {
        expect(value[0].isFavorite).toBeFalsy();
        done();
      }
    );
  });

  it('sortBy should sort contacts by isFavorite', (done) => {
    const contacts = [
      {
        id: 1,
        surname: 'Странный',
        name: 'Менее',
        patronym: 'Какой-то',
        phone: '70000500000',
        isFavorite: false,
      },
      {
        id: 2,
        surname: 'Вообще',
        name: 'Не-представляю',
        patronym: 'Кто-это',
        phone: '70000200000',
        isFavorite: true,
      },
    ];

    contactService.setContacts(contacts);

    contactService.contactList$.subscribe(
      value => {
        contactService.sortBy(value);
        expect(value[0].id).toBe(2);
        done();
      }
    );
  });

  it('sortBy should sort contacts by surname', (done) => {
    const contacts = [
      {
        id: 1,
        surname: 'Странный',
        name: 'Менее',
        patronym: 'Какой-то',
        phone: '70000500000',
        isFavorite: false,
      },
      {
        id: 2,
        surname: 'Вообще',
        name: 'Не-представляю',
        patronym: 'Кто-это',
        phone: '70000200000',
        isFavorite: false,
      },
    ];

    contactService.setContacts(contacts);

    contactService.contactList$.subscribe(
      value => {
        contactService.sortBy(value);
        expect(value[0].id).toBe(2);
        done();
      }
    );
  });
});
