module.exports = {
    stylesheet: `
      body {
        font-family: 'Helvetica', 'Arial', 'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif;
        font-size: 11pt;
        line-height: 1.5;
        max-width: 210mm;
        margin: 0 auto;
        padding: 2cm;
      }
      h1 {
        font-size: 22pt;
        text-align: center;
        margin-bottom: 1.5cm;
        border-bottom: 1px solid #000;
        padding-bottom: 0.5cm;
      }
      h2 {
        font-size: 16pt;
        margin-top: 1cm;
        margin-bottom: 0.5cm;
        border-bottom: 1px solid #ddd;
        padding-bottom: 0.2cm;
      }
      h3 {
        font-size: 14pt;
        margin-top: 0.7cm;
      }
      h4 {
        font-size: 12pt;
        margin-top: 0.5cm;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 1em 0;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 8px;
      }
      th {
        background-color: #f2f2f2;
      }
      code {
        font-family: 'Courier New', monospace;
        background-color: #f5f5f5;
        padding: 2px 4px;
        border-radius: 3px;
      }
      strong {
        font-weight: bold;
      }
      p {
        margin-bottom: 0.5em;
      }
      ul, ol {
        margin-bottom: 1em;
        padding-left: 2em;
      }
      li {
        margin-bottom: 0.3em;
      }
      blockquote {
        border-left: 4px solid #ddd;
        padding-left: 1em;
        color: #666;
      }
      a {
        color: #0366d6;
        text-decoration: none;
      }
      @media print {
        @page {
          size: A4;
          margin: 0;
        }
        body {
          padding: 2cm;
        }
      }
    `,
    pdf_options: {
      format: 'A4',
      margin: {
        top: '30mm',
        right: '20mm',
        bottom: '30mm',
        left: '20mm'
      },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div style="font-size: 8pt; text-align: center; width: 100%;"></div>',
      footerTemplate: '<div style="font-size: 8pt; text-align: center; width: 100%; margin: 0 auto;">' +
                      '<span class="pageNumber"></span> / <span class="totalPages"></span>' +
                      '</div>',
      preferCSSPageSize: true
    },
    launch_options: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  };