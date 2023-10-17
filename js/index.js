document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadCv').addEventListener('click', downloadCv);
});

function downloadCv() {
    const url = 'files/PodestaNahuelCV.pdf';
    let link = document.createElement('a');
    link.href = url;
    link.download = 'mi_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
}