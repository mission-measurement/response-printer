import React from 'react'
import { Text } from '@react-pdf/renderer'


const Activities = (props) => {
  const {object} = props
  const answer = object.responsevalue

  return (
    <>
      <Text>{object.questionnumber + '. ' + object.questionbody}</Text>
      <Text style={{color: 'red'}}>{answer.map(gene => { return (gene ? gene.genename : 'Not Found')}).join(', ')}</Text>
    </>
  )
}

export default Activities
