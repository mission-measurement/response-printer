import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import styles from '../../styles'

const GeneImplementation = (props) => {
  const {object} = props
  const answer = object.responsevalue

  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      {answer ? answer.map((option, i) => { return (option ? <View style={{flexDirection:'column'}}><Text>{i+1 + '. '+ option.gene.name + ':'}</Text><Text>{option.value}</Text></View> : <Text>'Not Found'</Text>)}) : <Text></Text>}
    </>
  )
}

export default GeneImplementation
