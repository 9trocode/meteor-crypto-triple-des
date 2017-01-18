Package.describe({
  name: 'ikaedesu:crypto-triple-des',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Triple DES algorithm for CryptoJS, standard secure algorithms.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ikae/meteor-crypto-triple-des.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');

  api.use([
    'jparker:crypto-core@0.1.0',
    'jparker:crypto-cipher-core@0.1.0',
    'jparker:crypto-padding@0.1.0',
    'jparker:crypto-mode@0.1.0'
    ], ['client', 'server']);

  api.imply([
    'jparker:crypto-core',
    'jparker:crypto-cipher-core',
    'jparker:crypto-mode',
    'jparker:crypto-padding'
  ], ['client', 'server']);

  api.addFiles('lib/tripledes.js', ['client', 'server']);
});
