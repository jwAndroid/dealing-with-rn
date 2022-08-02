import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
