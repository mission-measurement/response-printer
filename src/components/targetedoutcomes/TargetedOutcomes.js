import React from 'react'
import { Text } from '@react-pdf/renderer'

import styles from '../../styles'

const TargetedOutcomes = (props) => {
  const {object} = props
  const answer = object.responsevalue

  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text style={{color: 'red'}}>{answer.map(option => { return (option ? option.outcome.name : 'Not Found')}).join(', ')}</Text>
    </>
  )
}

export default TargetedOutcomes
