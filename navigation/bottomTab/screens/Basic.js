// /**
//  * @format
//  */

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return <Text>Home</Text>;
// };

// const SearchScreen = () => {
//   return <Text>Search</Text>;
// };

// const NotificationScreen = () => {
//   return <Text>Notification</Text>;
// };

// const MessageScreen = () => {
//   return <Text>Message</Text>;
// };

// const Sample = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           tabBarActiveTintColor: '#fb8c00',
//           tabBarInactiveTintColor: '#303030',
//           tabBarShowLabel: true,
//           tabBarItemStyle: { backgroundColor: 'gray', margin: 5 },
//           tabBarStyle: { height: 70, backgroundColor: 'gray' },
//           tabBarAllowFontScaling: false,
//           tabBarHideOnKeyboard: true,
//         }}>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: '홈',
//             title: 'Home',
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="home" color={color} size={size} />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{
//             title: 'Search',
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="search" color={color} size={size} />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Notification"
//           component={NotificationScreen}
//           options={{
//             title: 'Notification',
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="notifications" color={color} size={size} />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Message"
//           component={MessageScreen}
//           options={{
//             title: 'Message',
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="message" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Sample;
