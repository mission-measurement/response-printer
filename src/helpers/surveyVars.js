function getValueByFieldName(fieldname, data){
  var result = undefined

  data.map(section => {
    section.subsections.map(subsection => {
      subsection.questions.map(
        question => {
          if(question.name == fieldname){
            result = question
          }
        }
      )
    })
  })

  return result.responsevalue
}

export default {
  getValueByFieldName
}
