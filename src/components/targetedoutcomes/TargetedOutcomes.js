import React from 'react'
import { View, Text } from '@react-pdf/renderer'

import styles from '../../styles'

const TargetedOutcomes = (props) => {
  const {object} = props
  const answer = object.responsevalue
  
  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      {answer ? answer.map(option => {
        if(option){
          return (
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingRight: '10'}}>Impact Area: {option.impactarea.impactname}</Text>
              <Text style={{paddingRight: '10'}}>Focus Area: {option.focusarea.name}</Text>
              <Text style={{padding: '0'}}>Outcome: {option.outcome.name}</Text>
            </View>
          )
        } else {
          return (
            <Text>Ups!</Text>
          )
        }
      }) : <Text></Text>}
    </>
  )
}

export default TargetedOutcomes
