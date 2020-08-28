import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { CONTACTS } from '../components/consts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactList$: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>(CONTACTS);
  private id = this.counter();

  public addContact(contact: IContact): void {
    const contactId = this.id();
    contact = { ...contact, id: contactId };

    const contactList = [...this.contactList$.value, contact];

    this.sortBy(contactList);
    this.contactList$.next(contactList);
  }

  // счетчик id для тестового задания, в реальных проектах не используется
  private counter() {
    let currCount = CONTACTS.length + 1;

    return () => currCount++;
  }

  private sortBy(contactList: IContact[]): void {
    contactList.sort((a, b) => {
      if (a.isFavorite === b.isFavorite) {
        return a.surname.toLowerCase() > b.surname.toLowerCase() ? 1 : -1;
      }
      return a.isFavorite < b.isFavorite ? 1 : -1;
    });
  }
}
