function generatePreview() {
    const { jsPDF } = window.jspdf;
    pdf = new jsPDF();
    // ... (rest of your PDF generation code) ...


    // Render PDF preview (Improved Method)
    const previewContainer = document.getElementById('pdf-preview');
    previewContainer.innerHTML = ''; // Clear previous preview

    const blob = pdf.output('blob');  // Generate PDF as a blob

    const pdfData = URL.createObjectURL(blob); // Create a blob URL

    const iframe = document.createElement('iframe');
    iframe.src = pdfData;
    iframe.style.width = '100%';
    iframe.style.height = '400px';
    previewContainer.appendChild(iframe);


    // Show download button
    document.getElementById('downloadButton').style.display = 'block';

    // Optional: Revoke blob URL (for memory management)
    // You might want to revoke the blob URL later when it's no longer needed.
    // For example, when the user generates a new preview or leaves the page:
    // URL.revokeObjectURL(pdfData); 

}
