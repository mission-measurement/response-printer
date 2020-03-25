import React from 'react'
import { Text } from '@react-pdf/renderer'

import styles from '../../styles'

const Currency = (props) => {
  const {object} = props
  const answer = object.responsevalue

  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      {answer ? <Text>{answer.currency + ': ' + answer.total}</Text> : <Text></Text>}
    </>
  )
}

export default Currency
