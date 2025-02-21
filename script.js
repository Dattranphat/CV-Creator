function generatePreview() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Hello, world!", 10, 10);
    
    const previewContainer = document.getElementById('pdf-preview');
    previewContainer.innerHTML = '';

    const blob = doc.output('blob');
    const pdfData = URL.createObjectURL(blob);

    const iframe = document.createElement('iframe');
    iframe.src = pdfData;
    iframe.width = '100%';
    iframe.height = '400px';
    previewContainer.appendChild(iframe);
}
