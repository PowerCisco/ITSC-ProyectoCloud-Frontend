import {TableExportData} from '../../MedicoUserView/ReportDir/TableExportData'
import { useReport } from '../../../Hooks/useReport';
import { Modal } from '@material-ui/core';
import {BodyReportModal} from '../../Modal/ModalBody/Report/BodyReport';

import * as XLSX from 'xlsx/xlsx.mjs'
import { Button, createTheme, ThemeProvider } from '@mui/material';

import jsPDF from 'jspdf'; 
import 'jspdf-autotable'; 




import './ReportPageAuditor.scss';
export const ReportPageAuditor = () => {
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
      third:{
        main: '#36d36d'
      }
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

  const downloadXLS = () => {
    const newData = Data.map(row => {
      delete row.tableData
      return row
    })
    const workSheet = XLSX.utils.json_to_sheet(newData)
    const workBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook, workSheet, "Reporte")

    XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })

    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
   
    XLSX.writeFile(workBook, "ReporteData.xlsx")
  }
  const downloadPDf = () => {
    const doc = new jsPDF();
    doc.text("Reporte", 20, 5)
    doc.autoTable({
      theme: "grid",
      columnStyles: { 0: { halign: 'center', fillColor: [255, 250, 255] }, },
      bodyStyles: { fontSize: 8 },
      headStyles: { fontSize: 9 },
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: Data
    })

    doc.save('Reporte.pdf')
  }

  return (
    <>
    
    <div className='rep'>
        <ThemeProvider theme={theme}>
          <Button className={'reportIco'} variant='contained' color='primary' onClick={() => openCloseReportModal()}> Generar Reporte</Button>
          <Button disabled={reportButton} className={'pdfRep'} variant='contained' color='secondary' onClick={() => downloadPDf()
          }> Exportar PDF </Button>
          <Button disabled={reportButton} className={'excelRe'} variant='contained' color='third' onClick={() => downloadXLS()
          }> Exportar Excel </Button>
        </ThemeProvider>

        <div className='data'>
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
