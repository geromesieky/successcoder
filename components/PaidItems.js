import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../styles/globalStyles'
import { AntDesign } from '@expo/vector-icons';
import CoursesOverview from './CoursesOverview';

const PaidItems = ({ totalPrice, date, courseDetails }) => {

    const [isShowing, setIsShowing ] = useState(false);

    const handleShow = () => {
        setIsShowing( prevState => !prevState )
    }

  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.totalPaid}>{totalPrice.toFixed(2)} GNF</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <TouchableOpacity
        onPress={ handleShow }
        style={styles.iconBtn}
      >
        <AntDesign 
            name={isShowing ? "minuscircleo" : "pluscircleo"}
            size={24} 
            color={globalStyles.green}
        />
      </TouchableOpacity>

      {
        isShowing && (
            <View style={styles.detailPaidCourse}>
                {
                    courseDetails.courses.map( course => (
                        <CoursesOverview 
                            key={course.id}
                            title={course.title}
                            price={course.price}
                        />
                    ))
                }
            </View>
        )
      }
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    paidCoursesContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        margin: 20,
        padding: 15
    },
    paidCourses: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalPaid: {
        fontSize: 18
    },
    date: {
        fontSize: 16
    },
    iconBtn: {
        alignSelf: 'flex-end'
    },
    detailPaidCourse: {
        marginTop: 20,
        borderTopColor: globalStyles.lightGrey,
        borderTopWidth: 1
    }
})

export default PaidItems