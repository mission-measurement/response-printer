import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import styles from '../../styles'

const TextInput = (props) => {

  const {question, response} = props


  return (
    <View style={styles.question_response} wrap>
      <Text style={styles.question} wrap>
        {question + ' '}
      </Text>
      <Text wrap>
        {response}
      </Text>
    </View>
  )

}

export default TextInput
