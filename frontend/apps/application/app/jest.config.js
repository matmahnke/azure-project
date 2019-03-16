module.exports = {
  name: 'application-app',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/application/app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
