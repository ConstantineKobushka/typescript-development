const firstName: string = 'Jhon';
const lastName: string = 'Doe';
const birthDate: string | Date = '18.07.1995';
const sex: 'male' | 'female' = 'male';
const isMarried: boolean = true;
const phoneNumber: string | number = '+380661234567';
const email: string | null | undefined = 'example@mail.com';

type Statuses = {
  male: {
    true: 'Одружений';
    false: 'Неодружений';
  };
  female: {
    true: 'Заміжня';
    false: 'Незаміжня';
  };
};

const statuses: Statuses = {
  male: {
    true: 'Одружений',
    false: 'Неодружений',
  },
  female: {
    true: 'Заміжня',
    false: 'Незаміжня',
  },
};

function printUserData(
  firstName: string,
  lastName: string,
  birthDate: string | Date,
  sex: 'male' | 'female',
  isMarried: boolean
): void {
  const maritalKey: 'true' | 'false' = isMarried ? 'true' : 'false';
  const maritalStatuse: string = statuses[sex][maritalKey];

  console.log(
    `Ім'я користувача: ${firstName} ${lastName}
Дата народження: ${birthDate}
Сімейний стан: ${maritalStatuse}
    `
  );
}

printUserData(firstName, lastName, birthDate, sex, isMarried);
