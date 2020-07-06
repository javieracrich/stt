module.exports = {
  name: 'admin-panel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/admin-panel/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
