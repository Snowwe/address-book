export const CONTACTS = [
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
    id: 3,
    surname: 'Вообще',
    name: 'Не-представляю',
    patronym: 'Кто-это',
    phone: '70000200000',
    isFavorite: false,
  },
];

export enum Title {
  Surname = 'Фамилия',
  Name = 'Имя',
  Patronym = 'Отчество',
  Phone = 'Телефон'
}
