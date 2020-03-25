import React from 'react'
import { Text } from '@react-pdf/renderer'

import styles from '../../styles'

const DateRange = (props) => {
  const { object } = props

  const answer = object.responsevalue

  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      {answer ? <Text>{answer.start + ' - ' + answer.end}</Text> : <Text></Text>}
    </>
  )

}


export default DateRange
