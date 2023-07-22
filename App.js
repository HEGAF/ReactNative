import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWIthColorAndText from './components/ViewBoxesWIthColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import CustomText from './components/CustomText';
import Counter from './components/Counter';
import MyInput from './components/MyInput';
import IncrementCounter from './components/IncrementCounter';
import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewBoxesWIthColorAndText/> */}
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      {/* <CustomText/> */}
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* {<IncrementCounter/>} */}
      {<Form/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

