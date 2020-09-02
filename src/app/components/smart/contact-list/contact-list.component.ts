import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IContact } from '../../../interfaces/IContact';
import { ContactService } from '../../../services/contact.service';
import { Observable } from 'rxjs';
import { CONTACTS, Title } from '../../consts';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  public contactList$: Observable<IContact[]>;
  public title = Title;

  constructor(private contactService: ContactService) {
  }

  public ngOnInit(): void {
    this.contactService.setContacts(CONTACTS);
    this.contactList$ = this.contactService.contactList$.pipe(
      map(contact => this.contactService.sortBy(contact))
    );
  }

  public isFavorite(id: number): void {
    this.contactService.makeFavorite(id);
  }

  public deleteContact(id: number): void {
    this.contactService.deleteContact(id);
  }
}
