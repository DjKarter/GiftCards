
Сценарий работы сервиса:
1. Первая страница: выбор сертификата.
   Выводит список сертификатов. Список сертификатов получать при помощи метода OSGetGoodList. Описание методов ниже.
   Пользователь просматривает список и выбирает сертификат, по кнопке «Оформить» попадает на страницу сбора контактов.
2. Вторая страница: заполнение контактов.
   Поля формы:
   «Имя», обязательное
   «Телефон», по маске телефона, обязательное
   «Почта», обязательное
   Сервис проверяет правильность заполнения полей, доступны кнопки «Назад» (обратно на страницу выбора сертификата) и «Оплатить».
   Сервис сохраняет собранные данные с помощью метода OSSale.
3. В рамках данного задания кнопка «Оплатить» ведет на страницу-заглушку с текстом «оплата...», страница нужна просто для понимания, что пользователь успешно дошел до оплаты.
