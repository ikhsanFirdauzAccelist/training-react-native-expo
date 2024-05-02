import { Button, Image, Pressable, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';

export default function MyProfileScreen() {

    const imageUrl = "https://i.kym-cdn.com/entries/icons/original/000/048/010/side_eye_cat.jpg";

    const handleSubmit = () => {
        console.log("Submitted");
    } 

  return (
    <SafeAreaView className="bg-slate-800 flex-1">
        <View className="flex justify-center items-center bg-slate-800 h-48">
            <View className="bg-transparent items-center">
                <View className="rounded-full bg-white w-20 h-20 overflow-hidden">
                    <Image source={{uri: imageUrl}} className="h-20 w-20" />
                </View>
                <Text className="pt-4 text-2xl font-bold text-slate-300">Your Name</Text>
            </View>
        </View>
        <View className="bg-slate-950 rounded-t-3xl flex-1">
            <View className="bg-transparent flex-1 mt-5 mx-5">
                <Text className="mb-3 mt-5 text-base">Form 1</Text>
                <TextInput className="color-white bg-slate-800 h-10 px-3 rounded-xl"></TextInput>
                
                {/* <Text className="mb-3 mt-5 text-base">Form 2</Text>
                <TextInput className="color-white bg-slate-800 h-10 px-3 rounded-xl"></TextInput>
                
                <Text className="mb-3 mt-5 text-base">Form 3</Text>
                <TextInput className="color-white bg-slate-800 h-10 px-3 rounded-xl"></TextInput>
                
                <Text className="mb-3 mt-5 text-base">Form 4</Text>
                <TextInput className="color-white bg-slate-800 h-10 px-3 rounded-xl"></TextInput>
                
                <Text className="mb-3 mt-5 text-base">Form 5</Text>
                <TextInput className="color-white bg-slate-800 h-10 px-3 rounded-xl"></TextInput>
                
                <Text className="mb-3 mt-5 text-base">Form 6</Text>
                <TextInput className="color-white bg-slate-800 h-10 px-3 rounded-xl"></TextInput>
                
                <Text className="mb-3 mt-5 text-base">Form 7</Text>
                <TextInput className="color-white bg-slate-800 h-10 px-3 rounded-xl"></TextInput>
                 */}
                
                <CustomButton onPress={handleSubmit} />
                
            </View>
        </View>        
    </SafeAreaView>
  );
}
