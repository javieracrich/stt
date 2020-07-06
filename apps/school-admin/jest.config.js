module.exports = {
  name: 'school-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/school-admin/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
