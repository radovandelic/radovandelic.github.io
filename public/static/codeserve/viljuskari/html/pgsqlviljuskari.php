<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<meta charset='UTF-8'/>
	<title>Database</title>
<link href="tooplate_style.css" rel="stylesheet" type="text/css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="pgvi.js"></script>
</head>

<body>
<div id="tooplate_middle">

<?php
include "db.php";
session_start();
$_SESSION['page'] = $_POST['page'];
if($_POST['name'] == "motor")
{
	$_SESSION['motor'] = $_POST['id'];
	unset($_SESSION['ponuda']);
}
else if($_POST['name'] == "cenaod")
{
	$_SESSION['cijenaod'] = $_POST['id'];
	unset($_SESSION['ponuda']);
}
else if($_POST['name'] == "ponuda")
{
	$_SESSION['ponuda'] = $_POST['id'];
}
else if($_POST['name'] == "cenado")
{
	$_SESSION['cijenado'] = $_POST['id'];
	unset($_SESSION['ponuda']);
}
else if($_POST['name'] == "model")
{
	$_SESSION['model'] = $_POST['id'];
	unset($_SESSION['ponuda']);
}
else if($_POST['name'] == "marka")
{
	$_SESSION['marka'] = $_POST['id'];
	unset($_SESSION['ponuda']);
}	
$conn = pg_connect($dbstring)
    or die("Can't connect to database".pg_last_error());

if(!$conn)
{
 echo "GREŠKA #1";   
}
$sql = "";
if($_SESSION['ponuda'] == "sve" || !isset($_SESSION['ponuda']))
{
		$sql = "SELECT * FROM viljuskari WHERE url IS NOT NULL";

		if(isset($_SESSION['marka']))
		{
				$sql .= " AND marka = '".$_SESSION['marka']."'";
		}/*
		else
		{
			$sql .= " AND marka = 'Jungheinrich'";	
		}*/
		if(isset($_SESSION['model']))
		{
				$sql .= " AND model = '".$_SESSION['model']."'";
		}
		if(isset($_SESSION['motor']))
		{
		$sql .= " AND motor = '".$_SESSION['motor']."'";
		}
		if(isset($_SESSION['cijenaod']))
		{
		 $sql .= " AND cena >= ".$_SESSION['cijenaod'];
		}
		if(isset($_SESSION['cijenado']))
		{
		 $sql .= " AND cena <= ".$_SESSION['cijenado'];
		}
}
else
{
	if(!isset($_SESSION['marka']))		
		{
				$_SESSION['marka'] = "Jungheinrich";
		}
		$sql = "SELECT model, count(*) FROM viljuskari WHERE marka = '" . $_SESSION['marka'];
		$sql .= "' GROUP BY model ORDER BY count(*) DESC LIMIT 50;";
		$cmd = pg_query($conn, $sql);
		$sql = "";
		$i=0;
		if(!$cmd)
		{
				echo "GREŠKA #2";
		}
		while($row = pg_fetch_row($cmd))
		{
				if($i!=0)
				{
						$sql .= " UNION ";
				}
				$sql .= "SELECT * FROM viljuskari WHERE model = '" . $row[0] . "' AND cena < 0." . (100 - (int)$_SESSION['ponuda']);
				$sql .= " *(SELECT AVG(cena) FROM viljuskari WHERE model = '" . $row[0] . "') ";
				$i++;
		}
}

		$sql .= " ORDER BY marka, model, cena ASC";	
//echo $sql;
$sql2= "";
if(isset($_SESSION['page']))
{
		$sql2 .= " OFFSET ".$_SESSION['page'];
}
$sql2 .= " LIMIT 50;";	

$cmd = pg_query($conn, $sql);
$i=0;
while($row = pg_fetch_row($cmd))
{
		$i++;
}
$cmd = pg_query($conn, $sql.$sql2);
if(!$cmd)
{
        echo "GREŠKA #3";
		//echo $sql;
}
echo "<table style='table-layout: auto; '> <tr><th style='text-align: left; width: 120px;'>Marka</th><th style='width: 100px;'>Model</th><th style='width:100px;'>Cena</th><th style='width:100px;'>Godina</th><th style='width:120px;'>Radnih Sati</th><th style='width:100px;'>Motor</th><th style='width:120px;'>Kapacitet</th>";
echo "<th style='width: 100px;'>Visina</th><th style='width: 129px;'>Visina Podiz.</th><th>Država</th></tr> ";
while($row = pg_fetch_row($cmd))
{
	echo "<tr><td><a href=\"".$row[13]."\" target=\"_blank\">".$row[1]."</a></td><td>".$row[2]."</td><td>€".$row[3]."</td><td>".$row[4];
	echo "</td><td>".$row[5]."</td><td>".$row[10]."</td><td>";
    if($row[6] != null){
		echo $row[6]." kg";
	}
	echo "</td><td>".$row[8]."</td><td>".$row[7]."</td><td>".$row[12]."</td></tr>";
}
echo "</table><br/><br/>";
$pg = '0';
if(isset($_SESSION['page'])) { $pg= $_SESSION['page']; }
echo "<div style='visibilitiy: hidden;' id='selpg' name='".$pg."'></div>";
?>
</div>
<div class='pages'>
<?php
if(isset($_SESSION['ponuda']) && $_SESSION['ponuda'] != "sve")
{
		$pgMax = (int)(ceil($i/50));
}
else
{
	
$sql = "SELECT COUNT(*) FROM viljuskari";
$sql .= " WHERE url IS NOT NULL";

		if(isset($_SESSION['marka']))
		{
				$sql .= " AND marka = '".$_SESSION['marka']."'";
		}
		else
		{
			$sql .= " AND marka = 'Jungheinrich'";	
		}
		if(isset($_SESSION['model']))
		{
				$sql .= " AND model = '".$_SESSION['model']."'";
		}
		if(isset($_SESSION['motor']))
		{
		$sql .= " AND motor = '".$_SESSION['motor']."'";
		}
		if(isset($_SESSION['cijenaod']))
		{
		 $sql .= " AND cena >= ".$_SESSION['cijenaod'];
		}
		if(isset($_SESSION['cijenado']))
		{
		 $sql .= " AND cena <= ".$_SESSION['cijenado'];
		}
$sql .= ";";
$cmd = pg_query($conn, $sql);
$pgMax = (int)(ceil(pg_fetch_row($cmd)[0]/50));	
}
//$page = (int)$_SESSION['page'];
//$realPage = $page/50+1;
for($i = 1; $i <= $pgMax; $i++)
{
	echo "<a class='page' id='".($i*50-50)."' href='#'>$i</a> &nbsp;&nbsp;";
}
?>
</div>
</body>
</html>
