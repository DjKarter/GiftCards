import React from 'react';

export const Input = ({
  name,
  labelText,
  type,
  placeholder,
  rules,
  errors,
  register,
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}> {labelText}</label>
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          aria-invalid={!!errors[name]}
        />
        <div className="form-error">
          {errors[name] && <p>Некорректные данные!</p>}
        </div>
      </div>
    </>
  );
};

/***
 <div className="form-group">
 <label htmlFor="name">Имя</label>
 <input type="text"
 placeholder="Введите ваше имя"
 {...register('name',
 {required:true, maxLength:20 }
 )}
 aria-invalid={!!errors.name}/>
 <div>{errors.name && <p>Error!</p>}</div>
 </div>
 <div className="form-group">
 <label htmlFor="phone">Телефон</label>
 <input type="tel"
 placeholder="+7 (___) ___-__-__"
 {...register('phone',
 {required:true, pattern : /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/}
 )}
 aria-invalid={!!errors.phone}/>
 <div>{errors.phone && <p>Error!</p>}</div>
 </div>
 <div className="form-group">
 <label htmlFor="email">Почта</label>
 <input type="email"
 placeholder="example@mail.ru"
 {...register('email')}
 aria-invalid={!!errors.email}/>
 </div>
 ***/
