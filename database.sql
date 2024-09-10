create TABLE Hotel (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    region VARCHAR(255)
);

-- create Table post (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255),
--     content VARCHAR(255),
--     user_id INTEGER,
--     FOREIGN KEY (user_id) REFERENCES person (id)
-- );