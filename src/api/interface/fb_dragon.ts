import {
  getFirestore,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  collection,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { fb_app } from '@/services/firebaseConfig'

const db = getFirestore(fb_app)
const dragons = collection(db, 'dragon')

export const getDragon = (params?: any) => {
  return params
    ? getDoc(doc(db, 'dragon', params.id)).then((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }))
    : getDocs(dragons).then((data: any) =>
        data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      )
}

export const createDragon = ({ data }: any) => addDoc(dragons, data)

export const updateDragon = ({ data }: any) => {
  const { id } = data
  const dragon = doc(db, 'dragon', id)
  console.log({ id, dragon, data })
  return setDoc(dragon, data)
}

export const removeDragon = (params: any) => {
  const { id } = params
  const dragon = doc(db, 'dragon', id)
  return deleteDoc(dragon)
}
