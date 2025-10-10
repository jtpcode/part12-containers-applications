db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('persons');

db.persons.insert({ name: 'John Doe', number: '123-456-7890' });
db.persons.insert({ name: 'Jane Smith', number: '987-654-3210' });