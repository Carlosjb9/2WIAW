CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    img VARCHAR(255),
    title VARCHAR(255),
    year INT,
    director VARCHAR(255),
    actors VARCHAR(255),
    duration VARCHAR(50),
    genre VARCHAR(255),
    country VARCHAR(255),
    language VARCHAR(255),
    awards VARCHAR(255),
    rating DECIMAL(3,1)
);

INSERT INTO movies (img, title, year, director, actors, duration, genre, country, language, awards, rating) 
VALUES 
('https://pics.filmaffinity.com/Deadpool-551207887-large.jpg', 'Deadpool', 2016, 'Tim Miller', 'Ryan Reynolds, Morena Baccarin', '108 minutes', 'Action, Adventure, Comedy', 'USA', 'English', '2 nominations', 8.0),
('https://pics.filmaffinity.com/Wonder_Woman_1984-688416694-large.jpg', 'Wonder Woman 1984', 2020, 'Patty Jenkins', 'Gal Gadot, Chris Pine', '151 minutes', 'Action, Adventure, Fantasy', 'USA', 'English', '3 wins & 27 nominations', 5.4);
