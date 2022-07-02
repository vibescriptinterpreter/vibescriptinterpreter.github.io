import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'

export const getPurchaseList = async () => {
  const citiesCol = collection(db, 'products');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
};