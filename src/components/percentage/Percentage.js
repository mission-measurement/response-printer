import React from 'react'
import { Text } from '@react-pdf/renderer'

import styles from '../../styles'

const Percentage = (props) => {
  const { object } = props
  const answer = object.responsevalue

  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      {answer.map(option => { return <Text>{option ? option.option.text + ': ' + option.value + '%' : 'Not available'}</Text>})}
    </>
  )
}

export default Percentage
