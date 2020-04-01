import React from 'react'
import { Text, View } from '@react-pdf/renderer'

import styles from '../../styles'

const Location = (props) => {
  const { object } = props
  const answer = object.responsevalue

  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      <View style={{flexDirection: 'row', flexWrap: 'true'}}>
        {answer ? answer.map(country => {
          return (
            <View>
            <Text wrap>{country.country.name + ' (' + country.regions.map(region => region.name).join(', ') + ')'}</Text>
            <Text wrap>Postal Codes: {country.postal}</Text>
            </View>
          )
        }) : <Text></Text>}
      </View>
    </>
  )
}

export default Location
