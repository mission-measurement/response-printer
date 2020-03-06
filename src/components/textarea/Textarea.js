import React from 'react'
import { Text } from '@react-pdf/renderer'


const Textarea = (props) => {
  const { object } = props
  const answer = object.responsevalue

  if(typeof(answer) == 'object'){
    return <><Text>{object.questionnumber + '. ' + object.questionbody}</Text><Text>{answer.value}</Text></>
  } else {
    return <><Text>{object.questionnumber + '. ' + object.questionbody}</Text><Text>{answer}</Text></>
  }

}

export default Textarea
