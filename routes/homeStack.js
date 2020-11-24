import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import ReviewDetail from '../screens/reviewDetail'
import Header from '../shared/header'
import React from 'react'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        // eslint-disable-next-line react/display-name
        headerTitle: () => <Header navigation={navigation} title='GameZone'/>
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetail,
    navigationOptions: {
      title: 'Review Details'

    }
  }
}

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#bbb', height: 60 }
  }
})

export default HomeStack
