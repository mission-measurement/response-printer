import React from 'react'
import { Text } from '@react-pdf/renderer'
import styles from '../../styles'



const YesNoRadio = (props) => {
  const { object } = props
  const answer = object.responsevalue

  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text>{answer}</Text>
    </>
  )
}

export default YesNoRadio
