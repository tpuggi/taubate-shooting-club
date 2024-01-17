import React from 'react';
import jsPDF from 'jspdf';

const PDFGenerator = () => {

  const buttonDownload = {
    textDecoration: 'underline',  // Adiciona sublinhado
    fontWeight: 'bold',           // Torna o texto negrito
    color: 'white',                // Cor do texto em branco
    backgroundColor: '#990000',        // Cor de fundo vermelho
    padding: '10px 20px',          // Adiciona algum espaçamento interno ao botão
    border: 'none',                // Remove a borda (opcional)
    cursor: 'pointer'               // Adiciona um cursor de ponteiro para indicar que é clicável
  };

  const generatePDF = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();
    
    // Add content to the PDF
    pdf.text('Hello, this is a PDF document generated using jsPDF!', 20, 20);

    // Save the PDF as a blob
    const pdfBlob = pdf.output('blob');

    // Create a download link and trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(pdfBlob);
    downloadLink.download = 'generated-document.pdf';
    downloadLink.click();
  };

  return (
    <div>
      <button onClick={generatePDF}  style={buttonDownload} >Baixar meu Certificado</button>
    </div>
  );
  
};


export default PDFGenerator;
