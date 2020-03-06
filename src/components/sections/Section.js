import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import styles from '../../styles'

import Subsection from './Subsection'

const Section = (props) => {
  const { data } = props

  return (
    <>
      <View style={styles.subsection}>
        <Text>{data.name}</Text>
        {data.subsections.map(subsection => {
          return <Subsection data={subsection} />
        })}
      </View>
    </>
  )
}


export default Section
