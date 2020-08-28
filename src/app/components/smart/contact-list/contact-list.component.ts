import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IContact } from '../../../interfaces/IContact';
import { ContactService } from '../../../services/contact.service';
import { Observable } from 'rxjs';
import { Title } from '../../consts';

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
    this.contactList$ = this.contactService.getContactList();
  }


  public isFavorite(id: number): void {
    this.contactService.makeFavorite(id);
  }

  public deleteContact(id: number): void {
    this.contactService.deleteContact(id);
  }
}
