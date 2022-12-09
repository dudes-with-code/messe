erstelle xampp db mit name messe. und admin user mit globalen rechten

- adde mysq://USER:PASSWORD@localhost:3306/messe?schema=SCHEMA
  in .env zur database url.

  user und password austauschen mit admin login

- run "npx prisma db push" um db tabellen zu erstellen
- run "npm run db-seed" um db mit dummy data zu befüllen
