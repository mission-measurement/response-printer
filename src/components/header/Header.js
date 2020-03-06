import React from 'react'
import { Text, View, Image, Source } from '@react-pdf/renderer'
import styles from '../../styles'
import logo from '../../images/logo.png'

const Header = (props) => {

  return (
    <View style={styles.header}>
      <Image src={logo} style={styles.image}/>
      <Text style={styles.title}>
        Survey Response Summary - {new Date().toISOString().substring(0, 10)}
      </Text>
    </View>
  )
}

export default Header
