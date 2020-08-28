import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContact } from '../../../interfaces/IContact';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;
  private pattern: RegExp = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/);
  private nonWhitespaceRegExp: RegExp = new RegExp('\\S');

  constructor(private fb: FormBuilder, private contactService: ContactService) {
  }

  public ngOnInit(): void {
    this.contactForm = this.fb.group({
      'surname': ['', [Validators.required, Validators.pattern(this.nonWhitespaceRegExp)]],
      'name': [''],
      'patronym': [''],
      'phone': ['', [Validators.required, Validators.pattern(this.pattern)]],
    });
  }

  public addContact(): void {
    const contact: IContact = {
      surname: this.contactForm.value.surname,
      name: this.contactForm.value.name,
      patronym: this.contactForm.value.patronym,
      phone: '7' + this.contactForm.value.phone,
      id: null,
      isFavorite: false
    };

    this.contactService.addContact(contact);
    this.contactForm.reset();
  }

  public isValid(fieldName: string): boolean {
    return this.contactForm.get(fieldName).touched && this.contactForm.get(fieldName).invalid;
  }
}
