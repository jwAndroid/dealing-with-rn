### Setup

## node lts install with nvm

```bash
$ nvm install --lts
```

## install react-native cli

```bash
$ npm install -g react-native-cli
```

## create react-native app

```bash
$ npx react-native init ${project name} --version 0.68.2
$ npx react-native upgrade
```

## Start IOS App

```bash
$ react-native run-ios

project pakage in ios/Podfile
# use_flipper!()

install cocoapods

cd ios
$ pod install

if , have a some error with install pod 
error: ...

zsh termenal brew uninstall cocoapods and then -arm64 cocoapods install
solve:
$ sudo gem uninstall cocoapods
$ arch -arm64 brew install cocoapods 

$ cd ios
$ pod install
```

## Start Android App
```bash
$ react-native run-android
```
---

### Reference link

- [Node.js](https://nodejs.org/ko) install , update
- [React Native](https://reactnative.dev)
- [ESLint](https://eslint.org)
  - [No Unused Vars](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)
- [Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Emotion](https://emotion.sh/docs/introduction) introduction , [install](https://emotion.sh/docs/@emotion/native) and [setup](https://emotion.sh/docs/typescript)
- [Axios](https://www.npmjs.com/package/axios)
- [Redux](https://redux.js.org/introduction/installation)
- [react-native-debugger](https://github.com/jhen0409/react-native-debugger/releases) for window
- [redux-logger](https://github.com/LogRocket/redux-logger)
- [npm trands](https://www.npmtrends.com)
- [openbase](https://openbase.com)
- [Public-API](https://github.com/public-apis/public-apis)

## Design

- [MUI](https://mui.com/getting-started/usage)
- [Ant](https://ant.design/components/overview)
- [User Interface Component](https://docs.expo.dev/guides/userinterface) introduction
- [Kitten](https://akveo.github.io/react-native-ui-kitten)
- [react-native-elements](https://reactnativeelements.com/docs)
- [Vector-Icons](https://icons.expo.fyi)
- [Google Fonts Icons](https://fonts.google.com/icons)

## Flexbox Froggy

- https://flexboxfroggy.com/#ko
