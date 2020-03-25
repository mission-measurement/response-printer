import React from 'react'
import { Text, View, Image, Source } from '@react-pdf/renderer'
import styles from '../../styles'
import logo from '../../images/logo.png'

const Header = (props) => {

  const {organization, programname, reportingperiod} = props

  return (
    <View style={styles.header}>
      <Image src={logo} style={styles.image}/>
      <View style={styles.title}>
        {/**/}
        <Text style={styles.organizationname}>{organization}</Text>
        <Text>{programname}</Text>
        <Text>{" "}</Text>
        <Text>Impact Genome Report Summary for period:</Text>
        {reportingperiod ? <Text>{reportingperiod.start} - {reportingperiod.end}</Text> : <Text></Text>}
      </View>
    </View>
  )
}

export default Header
