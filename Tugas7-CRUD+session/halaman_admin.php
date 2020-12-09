<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Halaman Admin</title>
	<link rel="stylesheet" href="style1.css">
</head>
<body>
<?php 
	session_start();
 
	// cek apakah yang mengakses halaman ini sudah login
	if($_SESSION['level']==""){
		header("location:index.php?pesan=gagal");
	}
 
	?>
	<h1>Halaman Admin</h1>
 
	<p>Selamat datang <b><?php echo $_SESSION['username']; ?></b> Anda telah login sebagai <b><?php echo $_SESSION['level']; ?></b>.</p>
 

	<br/>
	<div class="link">
	<a href="insert.php">+Tambah data</a>
	</div>	
	<br/>
	<br/>
	<table border="1">
		<thead>
		<tr>
			<th>NIM</th>
			<th>Nama</th>
			<th>Alamat</th>
			<th>OPSI</th>
		</tr>
		</thead>
		<tbody>
		<?php 
		include 'koneksi.php';
		$data = mysqli_query($koneksi,"select * from mahasiswa");
		while($d = mysqli_fetch_array($data)){
			?>
			<tr>
				<td><?php echo $d['nim']; ?></td>
				<td><?php echo $d['nama']; ?></td>
				<td><?php echo $d['alamat']; ?></td>
				<td>
					<a href="edit.php?id=<?php echo $d['id']; ?>">edit</a>
					<a href="delete.php?id=<?php echo $d['id']; ?>">delete</a>
				</td>
			</tr>
			<?php 
		}
		?>
		</tbody>
	</table>
	<br>
	<div class="link">
	<a href="logout.php">LOGOUT</a>
	</div>
</body>
</html>