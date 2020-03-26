import React from 'react'
import useResponseContext from '../hooks/useResponseContext'
import useGlobalContext from '../hooks/useGlobalContext'
import globalVars from '../helpers/globalVars'
import surveyVars from '../helpers/surveyVars'

import styles from '../styles'
import { Text } from '@react-pdf/renderer'

import Metadata from './metadata/Metadata'
import Section from './sections/Section'
import Header from './header/Header'
import Index from './index/Index'

const SurveyPrinter = () => {
  const data = useResponseContext()
  const globaldata = useGlobalContext()

  //

  return (
    <>
      <Header
        organization={'My organization'}
        programname={globalVars.getValueByFieldName('programname', globaldata.globalvariables)}
        reportingperiod={globalVars.getValueByFieldName('reportingperiod', data.jsonformat)}
      />
      <Index
        structure={data.jsonformat}
      />
      <Metadata
        programname={globalVars.getValueByFieldName('programname', globaldata.globalvariables)}
        location={globalVars.getValueByFieldName('location', globaldata.globalvariables)}
        targetedoutcomes={globalVars.getValueByFieldName('targetedoutcomes', globaldata.globalvariables)}
        classification={globalVars.getValueByFieldName('classification', globaldata.globalvariables)}
        primarybeneficiary={globalVars.getValueByFieldName('primarybeneficiary', globaldata.globalvariables)}
        targetedoutcomes={globalVars.getValueByFieldName('targetedoutcomes', globaldata.globalvariables)}
        primaryoutcome={globalVars.getValueByFieldName('primaryoutcome', globaldata.globalvariables)}
      />
      {
        data.jsonformat.map(
          (section, i) => {
            return <Section section={section} number={i + 1} />
          }
        )
      }

      <Text style={{marginLeft: 218, paddingTop: 20}} render={({ pageNumber, totalPages }) => (
        `Page ${pageNumber} / ${totalPages} - printed ${new Date().toLocaleString('en-US')}`
      )} fixed />
    </>
  )


}

export default SurveyPrinter
