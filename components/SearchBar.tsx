import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface ISearchBarProps {
  onPress?: () => void;
  placeholder: string;
  value?: string;
  onchangeText?: (text: string) => void;
}

const SearchBar = ({
  onPress,
  placeholder,
  value,
  onchangeText,
}: ISearchBarProps) => {
  return (
    <View className="flex-row items-center rounded-full bg-dark-200 px-5 py-2 border border-light-500">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#a8b5db"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChange={() => {}}
        placeholderTextColor={"#a8b5db"}
        onChangeText={onchangeText}
        className="flex-1 text-light-300 ml-2"
      />
    </View>
  );
};

export default SearchBar;
