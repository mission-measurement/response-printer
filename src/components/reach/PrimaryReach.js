import React from 'react'
import { Text } from '@react-pdf/renderer'
import styles from '../../styles'

const PrimaryReach = (props) => {
  const { object } = props
  const answer = object.responsevalue

  return (
    <><Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
    {answer ? answer.map(input => <Text>{input.inputValues.beneficiary.name + ': ' + input.inputValues.achievednumber + '/' + input.inputValues.outofnumber}</Text>) : <Text></Text>}
    </>
  )

}

export default PrimaryReach
