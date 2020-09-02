import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/IContact';
import { CONTACTS } from '../components/consts';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private id = this.counter();
  private _contactList$: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>([]);

  public contactList$: Observable<IContact[]> = this._contactList$.asObservable();

  public setContacts(contacts: IContact[]): void {
    this._contactList$.next(contacts);
  }

  public addContact(contact: IContact): void {
    const contactId = this.id();
    contact = { ...contact, id: contactId };

    const contactList = [...this._contactList$.value, contact];

    this._contactList$.next(contactList);
  }

  public deleteContact(id: number): void {
    const contactList = this._contactList$.value.filter(item => item.id !== id);
    this._contactList$.next(contactList);
  }

  public makeFavorite(id: number): void {
    const contactList = this._contactList$.value;
    contactList.map(item => item.id === id ? item.isFavorite = !item.isFavorite : item.isFavorite);

    this.sortBy(contactList);
    this._contactList$.next(contactList);
  }

  // счетчик id для тестового задания, в реальных проектах не используется
  private counter(): () => number {
    let currCount = CONTACTS.length + 1;

    return () => currCount++;
  }

  public sortBy(contactList: IContact[]): IContact[] {
    return contactList.sort((a, b) => {
      if (a.isFavorite === b.isFavorite) {
        return a.surname.toLowerCase() > b.surname.toLowerCase() ? 1 : -1;
      }
      return a.isFavorite > b.isFavorite ? -1 : 1;
    });
  }
}
