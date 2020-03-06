import React from 'react';
import { ResponseContextProvider } from './context/ResponseContext'
import { Page, Document, PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF, {PDFViewer} from '@react-pdf/renderer';
import SurveyPrinter from './components/SurveyPrinter'
import data from './sampleresponse.json'
import styles from './styles'

import './App.css';

function App() {
  return (
    <div className="App">
      <PDFViewer style={{width: '100vw', height: '100vh'}}>
        <ResponseContextProvider value={[data, () => {}]}>
        <Document>
          <Page size="A4" style={styles.page} ruler={false}>
            <SurveyPrinter />
          </Page>
        </Document>
        </ResponseContextProvider>
      </PDFViewer>

      {/*<PDFDownloadLink document={
        <Document>
        <Page size="A4" style={styles.page}>
          <ResponseContextProvider value={[data, () => {}]}>
            <SurveyPrinter />
          </ResponseContextProvider>
        </Page>
      </Document>} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>*/}
    </div>
  );
}

export default App;
