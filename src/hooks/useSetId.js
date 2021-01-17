import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
  const storeId = async (value) => {
    try {
      await AsyncStorage.setItem('@id', value);
    } catch (e) {
      console.log('store data error', e);
    }
  };
  return [storeId];
};