import moment from 'moment';

const seedData = {
  'User': [
    {
      uid: 'derrickw',
      name: 'Derrick',
      permissions: ['admin']
    },
    {
      uid: 'another',
      name: 'Another User'
    }
  ],
  'Event': [
    {
      title: 'Test TOI #1',
      start: moment().add(5, 'days').toString(),
      end: moment().add(5, 'days').toString(),
      capacity: 25
    },
    {
      title: 'Test TOI #2',
      start: moment().add(30, 'days').toString(),
      end: moment().add(5, 'days').toString(),
      capacity: 25
    },
    {
      title: 'Test TOI #3',
      start: moment().add(60, 'days').toString(),
      end: moment().add(5, 'days').toString(),
      capacity: 25
    }
  ]
};

console.log('SEED', seedData);

export default seedData;