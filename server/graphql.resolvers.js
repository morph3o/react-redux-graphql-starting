const people = [
  {
    id: 1,
    name: 'Peter'
  },
  {
    id: 2,
    name: 'Marissa'
  }
];

module.exports = {
  Query: {
    allPeople: () => people
  }
};
