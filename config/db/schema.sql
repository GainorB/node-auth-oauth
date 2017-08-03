DROP DATABASE IF EXISTS oauthsocial_app;
CREATE DATABASE oauthsocial_app;

\c oauthsocial_app;

CREATE TABLE IF NOT EXISTS users(
    id NUMERIC PRIMARY KEY NOT NULL,
    -- FaceBookToken TEXT,
    -- TwitterToken TEXT,
    -- GoogleToken TEXT,
    token TEXT,
    email TEXT NOT NULL,
    name TEXT NOT NULL
);