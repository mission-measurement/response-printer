import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import styles from '../../styles'

import TextInput from '../textinput/TextInput'


const Metadata = (props) => {
  const {programname, classification, primarybeneficiary, location, targetedoutcomes, primaryoutcome} = props

  return (
    <View style={styles.section}>
      <Text style={styles.sectionheader}>
        Metadata
      </Text>
      <TextInput question={"What's the program name?"} response={programname} />
      <TextInput question={"What's primary outcome of your program?"} response={primaryoutcome} />
      <TextInput question={"What's the program classification?"} response={classification} />
      <TextInput question={"Who is the primary beneficiary?"} response={primarybeneficiary} />
      <TextInput question={"What's the primary operating location?"} response={location} />
      <TextInput question={"What are the outcomes you target?"} response={targetedoutcomes} />
    </View>
  )
}

export default Metadata
