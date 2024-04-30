import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function FirstHomeScreen() {
  return (
    <View style={styles.container}>
        {/* write your codes here, make it so it could navigate to 
        a second screen in this stack, and dont forget to create 
        the stack screen in the _layout.tsx file */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  iconStyle: {
    marginBottom: 30,
  }
});
