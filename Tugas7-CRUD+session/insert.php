<!DOCTYPE html>
<html>
<head>
	<title>Tambah</title>
	<link rel="stylesheet" href="style2.css">
</head>
<body>
 
	<h2>DATA MAHASISWA</h2>
	<br/>
	<a href="halaman_admin.php">KEMBALI</a>
	<br/>
	<br/>
	<h3>TAMBAH DATA MAHASISWA</h3>
	<form method="post" action="insert_aksi.php">
		<table cellpadding="13">
			<tr>
				<td>NIM</td>
				<td><input type="number" name="nim"></td>
			</tr>
            <tr>			
				<td>Nama</td>
				<td><input type="text" name="nama"></td>
			</tr>
			<tr>
				<td>Alamat</td>
				<td><input type="text" name="alamat"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="SIMPAN"></td>
			</tr>		
		</table>
	</form>
</body>
</html>