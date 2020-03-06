import {StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    fontSize: 8,
    margin: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'column',
    marginBottom: 10
  },
  section: {
    flexDirection: 'column',
    marginBottom: 10
  },
  subsection: {
    marginBottom: 5,
    paddingRight: 20
  },
  sectionheader: {
    fontSize: 10,
    marginBottom: 5
  },
  question_response: {
    justifyContent: 'between',
    flexDirection: 'content',
    paddingRight: 20,
    marginBottom: 5
  },
  image: {
    height: '80px',
    width: '120px',
    marginHorizontal: 230,
    marginBottom: 10
  },
  title: {
    fontSize: 12,
    textAlign: 'center'
  }
})

export default styles
