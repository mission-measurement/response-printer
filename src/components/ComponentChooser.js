import React from 'react'
import {Currency, DateRange, YesNoRadio, YesNoConditional, Number, Textarea, Multiselect, Dropdown, Activites, PrimaryOutcome, Percentage, DropdownWithTextArea } from './Components'
import { Text } from '@react-pdf/renderer'

const ComponentChooser = (props) => {
  const {type, object} = props

  const answer = object.responsevalue

  switch (type) {
    case 'currency':
      return <Currency object={object} />
    case 'daterange':
      return <DateRange object={object} />
    case 'yesnoradio':
      return <YesNoRadio object={object} />
    case 'primary-outcome':
      return <PrimaryOutcome object={object} />
    case 'textarea':
      return <Textarea object={object} />
    case 'activities':
      return <Activites object={object} />
    case 'number':
      return <Number object={object} />
    case 'percentage':
      return <Percentage object={object} />
    case 'yesnoconditional':
      return <YesNoConditional object={object} />
    case 'multiselect':
      return <Multiselect object={object} />
    case 'dropdown':
      return <Dropdown object={object} />
    case 'dropdown-with-textarea':
      return <DropdownWithTextArea object={object} />
    default:
      return <><Text style={{color: 'blue'}}>{type + ' not found'}</Text></>
  }

}

export default ComponentChooser
