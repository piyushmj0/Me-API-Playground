CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  education TEXT
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  link TEXT
);

CREATE TABLE project_skills (
  project_id INT REFERENCES projects(id),
  skill_id INT REFERENCES skills(id),
  PRIMARY KEY (project_id, skill_id)
);

CREATE TABLE links (
  id SERIAL PRIMARY KEY,
  github TEXT,
  linkedin TEXT,
  portfolio TEXT
);
