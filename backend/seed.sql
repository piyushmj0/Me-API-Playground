INSERT INTO profile (name, email, education)
VALUES ('Piyush', 'piyush@email.com', 'B.Tech Computer Science');

INSERT INTO skills (name)
VALUES ('javascript'), ('nodejs'), ('postgresql');

INSERT INTO projects (title, description, link)
VALUES (
  'Me-API Playground',
  'Personal profile backend API',
  'https://github.com/yourname/me-api-playground'
);

INSERT INTO project_skills
SELECT p.id, s.id
FROM projects p, skills s
WHERE s.name IN ('javascript', 'nodejs');
