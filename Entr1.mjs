const entries = [];

document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Save entry to the entries array
    entries.push({ name, email, message });

    // Clear form fields
    document.getElementById('entryForm').reset();
});

document.getElementById('generatePdf').addEventListener('click', function() {
    if (entries.length === 0) {
        alert('No entries to generate PDF.');
        return;
    }

    // Generate PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let y = 10;
    entries.forEach((entry, index) => {
        doc.text(`Entry ${index + 1}`, 10, y);
        doc.text(`Name: ${entry.name}`, 10, y + 10);
        doc.text(`Email: ${entry.email}`, 10, y + 20);
        doc.text(`Message: ${entry.message}`, 10, y + 30);
        y += 40; // Move to the next entry position
    });

    // Save the PDF
    doc.save('entries.pdf');
});
