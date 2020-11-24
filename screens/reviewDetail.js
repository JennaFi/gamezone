import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetails ({ navigation }) {
  const rating = navigation.getParam('rating')
  // const pressHandler = () => {
  //   navigation.goBack()
  // }
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.rating[rating]} />

        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }

})
