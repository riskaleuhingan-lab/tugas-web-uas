// Fungsi berpindah halaman
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// Nomor 9: Validasi Formulir
document.getElementById('formTransaksi').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('namaTransaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;
    const errorMsg = document.getElementById('errorMsg');

    if (nama === "" || jumlah === "" || kategori === "") {
        errorMsg.innerText = "Error: Semua kolom harus diisi!";
    } else {
        errorMsg.innerText = "";
        
        // Tambahkan ke tabel (Nomor 5b)
        const tabel = document.getElementById('tabelData').getElementsByTagName('tbody')[0];
        const baris = tabel.insertRow();
        baris.innerHTML = `<td>${nama}</td><td>${jumlah}</td><td>${kategori}</td>`;
        
        alert("Transaksi Berhasil Disimpan!");
        this.reset();
    }
});
