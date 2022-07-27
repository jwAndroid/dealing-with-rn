import auth from '@react-native-firebase/auth';

export function signIn({ email, password }) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({ email, password }) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}
// '앱을 가동'하거나 '로그인 상태가 변경'될 때 현재 사용자의 정보를 파라미터로 받아오는
// 특정 '콜백 함수'를 등록하는 함수

export function signOut() {
  return auth().signOut();
}
