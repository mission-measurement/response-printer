import React from 'react'
import { Text } from '@react-pdf/renderer'


const PrimaryOutcome = (props) => {
  const {object} = props
  const answer = object.responsevalue

  return (
    <>
      <Text>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text style={{color: 'red'}}>{answer.map(outcome => { return (outcome ? outcome.name : 'Not Found')}).join(', ')}</Text>
    </>
  )
}

export default PrimaryOutcome
