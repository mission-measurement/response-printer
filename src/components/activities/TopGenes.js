import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import styles from '../../styles'

const TopGenes = (props) => {
  const {object} = props
  const answer = object.responsevalue.sort((a, b) => {if(a.rank < b.rank){ return 1 }else{return -1}})

  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      {answer ? answer.map((option, i) => { return (option ? <View style={{flexDirection:'column'}}><Text>{i+1 + '. '+ option.genename}</Text></View> : <Text>'Not Found'</Text>)}) : <Text></Text>}
    </>
  )
}

export default TopGenes
