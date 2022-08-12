import { useReport } from '../../../Hooks/useReport';
import { Modal } from '@material-ui/core'
import { TableExportData } from './TableExportData'
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { BodyReportModal } from '../../Modal/ModalBody/Report/BodyReport';
import jsPDF from 'jspdf'
import XLSX from 'xlsx'

import 'jspdf-autotable'

import './ReportPage.scss'

export const ReportPage = () => {

  const { handleChange, getDataReport, Report, openCloseReportModal, Data, reportButton } = useReport();
  const { bodyreport } = BodyReportModal(handleChange, openCloseReportModal, getDataReport);

  const theme = createTheme({
    palette: {
      primary: {

        main: '#64B5F6',
      },
      secondary: {

        main: '#2424e5',
      },
    },
  });
  const columns =
    [
      {
        title: 'Fecha',
        field: 'fecha',
       
      },
      {
        title: 'Nombre Completo',
        field: 'nombreCompleto',

      },

      {
        title: 'Edad',
        field: 'edad',


      },
      {
        title: 'Diagnostico',
        field: 'diagnostico'

      },
      {
        title: 'Tratamiento',
        field: 'tratamiento'

      },
      {
        title: 'Medico',
        field: 'medico',

      },
      {
        title: 'Carrera',
        field: 'carrera',

      },
      {
        title: 'Matricula',
        field: 'matricula',

      },
      {

        title: 'Departamento',
        field: 'departamento',
      },
      {

        title: 'Telefono',
        field: 'telefono',
      }


    ]

    const downloadXLS = ()=>{

    }
  const downloadPDf = () => {
    const doc = new jsPDF();
    doc.text("Reporte", 20, 5)
    doc.autoTable({
      theme: "grid",
      columnStyles: { 0: { halign: 'center', fillColor: [255, 250, 255] }, },
      bodyStyles:{fontSize: 8},
      headStyles:{fontSize:9},
      columns: columns.map(col =>({ ...col, dataKey:col.field })),
      body: Data
  })

  doc.save('Reporte.pdf')
  }
  return (
    <>
      <div className='report'>
        <ThemeProvider theme={theme}>
          <Button className={'reportIcon'} variant='contained' color='primary' onClick={() => openCloseReportModal()}> Generar Reporte</Button>
          <Button disabled={reportButton} className={'createReport'} variant='contained' color='secondary' onClick={()=>  downloadPDf()
}> Exportar Reporte </Button>
        </ThemeProvider>

        <div className='dataTable'>
          <TableExportData Data={Data} />

        </div>



      </div>




      <Modal
        open={Report}
        onClose={openCloseReportModal}
      >
        {bodyreport}
      </Modal>
    </>
  )
}
