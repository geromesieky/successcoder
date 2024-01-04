import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserEditCourse = ({ route }) => {

  const courseId = route.params.courseId;
  
  return (
    <View>
      <Text>UserEditCourse</Text>
    </View>
  )
}

export default UserEditCourse

const styles = StyleSheet.create({})