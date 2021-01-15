module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  testMatch: [
    "**/src/**/*.spec.[jt]s?(x)"
  ]
}

//  **/src/**  -> sökvägen ska innehålla "src"
//  *.spec     -> OnOff.spec, hello.spec, ...
//  [jt]       -> antingen "j" eller "t"
