module.exports = {
  client: {
    tagName: 'gql',
    includes: ['./src/**/*.ts'],
    service: {
      name: 'tutorial-12345',
      url: 'http://localhost:4000',
      localSchemaFile: './schema.json'
    }
  }
};
