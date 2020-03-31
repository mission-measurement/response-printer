import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer'
import styles from '../../styles'
import checkmark from '../../images/checkmark.png'

const Activities = (props) => {
  const {object} = props
  const answer = object.responsevalue

  return (
    <>
      <Text style={styles.question}>{object.questionnumber + '. ' + object.questionbody}</Text>
      <View style={{flexDirection: 'row', flexWrap: true, marginTop: '10px', marginBottom: '10px', fontFamily: 'Helvetica-Bold'}}><View style={{width: '50%'}}><Text>Description</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center'}}>N/A</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center'}}>1</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center'}}>2</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center'}}>3</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center'}}>4</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center'}}>5</Text></View></View>
      {answer.map(gene => { return (gene ? <View style={{flexDirection: 'row', flexWrap: true}}><View style={{width: '50%'}}><Text>{gene.genename}</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center', color: 'green'}}>{gene.value ? '' : <Image src={checkmark}></Image>}</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center', color: 'green'}}>{gene.value === '1' ? <Image src={checkmark}></Image> : ''}</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center'}}>{gene.value === '2' ? <Image src={checkmark}></Image> : ''}</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center', color: 'green'}}>{gene.value === '3' ? <Image src={checkmark}></Image> : ''}</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center', color: 'green'}}>{gene.value === '4' ? <Image src={checkmark}></Image> : ''}</Text></View><View style={{width: '8.33%'}}><Text style={{textAlign: 'center', color: 'green'}}>{gene.value === '5' ? <Image src={checkmark}></Image> : ''}</Text></View></View> : <Text>Not Found</Text>)})}
    </>
  )
}

export default Activities
