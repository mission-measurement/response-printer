import React from 'react';
import { ResponseContextProvider } from './context/ResponseContext'
import { GlobalContextProvider } from './context/GlobalContext'
import { Page, Document, PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF, {PDFViewer} from '@react-pdf/renderer';
import SurveyPrinter from './components/SurveyPrinter'
import repsonsedata from './sampleresponse.json'
import globaldata from './sampleglobal.json'
import styles from './styles'

import './App.css';

function App() {
  return (

    <div className="App">
      <PDFViewer style={{width: '100vw', height: '100vh'}}>
        <ResponseContextProvider value={[repsonsedata, () => {}]}>
        <GlobalContextProvider value={[globaldata, () => {}]}>
        <Document>
          <Page size="A4" style={styles.page} ruler={false}>
            <SurveyPrinter />
          </Page>
        </Document>
        </GlobalContextProvider>
        </ResponseContextProvider>
      </PDFViewer>
      {/*
      <PDFDownloadLink document={
        <Document>
        <Page size="A4" style={styles.page}>
          <ResponseContextProvider value={[data, () => {}]}>
            <SurveyPrinter />
          </ResponseContextProvider>
        </Page>
      </Document>} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <button>Download now!</button>)}
      </PDFDownloadLink>*/}
    </div>
  );
}

export default App;
