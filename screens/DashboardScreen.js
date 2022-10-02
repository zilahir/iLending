import { SafeAreaView, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import CustomText from '../components/app/CustomText';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown, faArrowUp, faBell } from '@fortawesome/free-solid-svg-icons';
import * as iLendingColors from '../etc/colors';
import colors from 'tailwindcss/colors';
import PaymentCard from '../components/dashboard/PaymentCard';

const DashboardScreen = () => {
  const { user } = useAuth();

  return (
    <View className="flex-1">
      <LinearGradient
        colors={[iLendingColors.ilending[800], iLendingColors.ilending[800], iLendingColors.ilending[900]]}
        className="h-full w-full absolute"
      />
      <SafeAreaView className="">
        <ScrollView className="flex flex-col grow space-y-4 p-4">
          <View className="flex flex-row justify-between">
            <CustomText className="text-white dark:text-black text-2xl">
              Welcome {user.displayName ?? 'my friend'}!
            </CustomText>
            <TouchableOpacity className="p-2">
              <FontAwesomeIcon icon={faBell} color={colors.white} size={18} />
            </TouchableOpacity>
          </View>

          <View className="h-48">
            <View className="flex flex-col justify-between bg-ilending-900 h-full w-full rounded-lg p-4">
              <View className="flex flex-col items-center">
                <CustomText className="text-sky-400">
                  Total balance
                </CustomText>
                <CustomText className="text-white text-2xl">
                  $5 000
                </CustomText>
              </View>
              <View className="flex flex-row justify-between p-2 rounded-xl bg-ilending-800">
                <View className="grow items-center">
                  <CustomText className="text-white text-lg">
                    Debts
                  </CustomText>
                  <CustomText className="text-white text-lg">
                    $500
                  </CustomText>
                </View>
                <View className="grow items-center">
                  <CustomText className="text-white text-lg">
                    Loans
                  </CustomText>
                  <CustomText className="text-white text-lg">
                    $1 500
                  </CustomText>
                </View>
              </View>
            </View>
          </View>

          <View className="flex flex-row justify-between rounded-xl space-x-4 mb-8">
            <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-sky-400 rounded-lg p-3">
              <FontAwesomeIcon icon={faArrowUp} color={colors.black} size={18} />
              <CustomText className="text-lg text-black">
                Debt
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-ilending-900 rounded-lg p-3">
              <FontAwesomeIcon icon={faArrowDown} color={colors.white} size={18} />
              <CustomText className="text-lg text-white">
                Loan
              </CustomText>
            </TouchableOpacity>
          </View>

          <View className="mb-4">
            <View className="flex flex-row justify-between items-start">
              <CustomText className="text-white text-lg">
                Payments
              </CustomText>
              <TouchableOpacity className="p-2">
                <CustomText className="text-white">
                  See all
                </CustomText>
              </TouchableOpacity>
            </View>

            <View className="flex flex-col">
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default DashboardScreen;
