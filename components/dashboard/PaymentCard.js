import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from '../app/CustomText';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import colors from 'tailwindcss/colors';

const PaymentCard = () => {
  return (
    <TouchableOpacity className="h-14 flex flex-row justify-between items-center space-x-2 mb-2">
      <View className="bg-red-400 justify-center p-2 rounded-lg">
        <FontAwesomeIcon icon={faArrowDown} color={colors.white} size={18} />
      </View>
      <View className="flex flex-col grow justify-between pl-2 pr-4">
        <CustomText className="w-32 text-white text-base">
          Somogyi Gergő
        </CustomText>
        <CustomText className="text-gray-500">
          SPAR bevásárlás
        </CustomText>
      </View>
      <View className="flex flex-row items-center justify-end">
        <CustomText className="text-red-400 mr-2">
          - $300
        </CustomText>
      </View>
    </TouchableOpacity>
  )
}

export default PaymentCard;