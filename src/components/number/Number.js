import React from 'react'
import { Text } from '@react-pdf/renderer'
import styles from '../../styles'

const Number = (props) => {
  const { object } = props
  const answer = object.responsevalue

  if(typeof(answer) == 'object'){
    return <><Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text><Text>{answer.value}</Text></>
  } else {
    return <><Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text><Text>{answer}</Text></>
  }

}

export default Number
