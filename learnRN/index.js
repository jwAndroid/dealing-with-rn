/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// 리액트 네이티브는 index.js 에서 시작한다.
// registerComponent 메서드로 화면에 컴포넌트를 보여줄 수 있다.
