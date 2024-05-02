import { Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import CustomButton from '@/components/CustomButton';

type SubmitForm = {
    name: string,
    price: number,
    discount: number,
    rating: number,
    description: string,
}

export default function CreateScreen() {

    async function onPressSubmit(data: SubmitForm) {

        const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        console.log(await response.json())
    }
  
    return (
    <SafeAreaView className="flex-1 bg-slate-950">
        <View className='flex-1 mx-3'>
            <Text className='text-base'>
                This is a form to simulate a POST request to: https://dummyjson.com/docs/products
            </Text>

            <TextInput>

            </TextInput>
            
            <CustomButton title='create'/>
        </View>
    </SafeAreaView>
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
