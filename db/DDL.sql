CREATE DATABASE jobsapi;
\c jobsapi;

CREATE TABLE users (
    id              SERIAL,
    email           VARCHAR(50) NOT NULL    UNIQUE,
    pass            VARCHAR(60) NOT NULL,
    rol             VARCHAR(25),
    lenguage        VARCHAR(20),
    PRIMARY KEY(id)
    );
