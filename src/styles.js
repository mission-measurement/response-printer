import {StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    fontSize: 8,
    margin: 10,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 50,
  },
  header: {
    flexDirection: 'column',
    marginBottom: 10
  },
  index: {
    flexDirection: 'column',
    textAlign: 'center'
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
  question: {
    fontFamily: 'Helvetica-Bold',
  },
  question_response: {
    justifyContent: 'between',
    flexDirection: 'content',
    paddingRight: 20,
    marginBottom: 5
  },
  image: {
    height: '60px',
    width: '90px',
    marginHorizontal: 245,
    marginBottom: 10
  },
  organizationname: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 14
  },
  title: {
    fontSize: 12,
    flexDirection: 'column',
    textAlign: 'center'
  }
})

export default styles
