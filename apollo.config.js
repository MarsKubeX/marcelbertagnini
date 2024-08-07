/* eslint-disable no-undef */
// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'my-app',
      // URL to the GraphQL API
      url: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clvskbxcs0hnb07us01t41tw6/master/graphql'
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js']
  }
}
