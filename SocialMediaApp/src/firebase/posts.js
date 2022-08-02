import firestore from '@react-native-firebase/firestore';

export const PAGE_SIZE = 3;

const postsCollection = firestore().collection('posts');

export const createPost = ({ user, photoURL, description }) => {
  return postsCollection.add({
    user,
    photoURL,
    description,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
};

export async function getPosts({ userId, mode, id } = {}) {
  let query = postsCollection.orderBy('createdAt', 'desc').limit(PAGE_SIZE);

  if (userId) {
    query = query.where('user.id', '==', userId);
  }

  if (id) {
    const cursorDoc = await postsCollection.doc(id).get();
    query =
      mode === 'older'
        ? query.startAfter(cursorDoc)
        : query.endBefore(cursorDoc);
  }

  const snapshot = await query.get();

  const posts = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return posts;
}

export async function getOlderPosts(id, userId) {
  return getPosts({
    id,
    mode: 'older',
    userId,
  });
}

export async function getNewerPosts(id, userId) {
  return getPosts({
    id,
    mode: 'newer',
    userId,
  });
}

export async function removePost(id) {
  return postsCollection.doc(id).delete();
}

export async function updatePost({ id, description }) {
  return postsCollection.doc(id).update({
    description,
  });
}
