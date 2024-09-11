CREATE TABLE hotelInfo (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    region VARCHAR(255)
);

CREATE TYPE category_type AS ENUM ('Стандарт', 'Люкс', 'Апартаменты');
CREATE TYPE status_type AS ENUM ('Свободен', 'Занят');

CREATE TABLE number_fond (
    id SERIAL PRIMARY KEY,
    numer VARCHAR(10),
    category category_type,
    number_of_seats 
    status_free status_type,
);