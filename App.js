import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWIthColorAndText from './components/ViewBoxesWIthColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import CustomText from './components/CustomText';

export default function App() {
  return (
    <View /* style={styles.container} */>
      {/* <ViewBoxesWIthColorAndText/> */}
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      <CustomText/>
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

