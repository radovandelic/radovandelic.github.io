<?php
include "db.php";
session_start();
unset($_SESSION['motor']);
unset($_SESSION['cijenaod']);
unset($_SESSION['cijenado']);
unset($_SESSION['marka']);
unset($_SESSION['model']);
unset($_SESSION['page']);
unset($_SESSION['ponuda']);
session_destroy();
$user_ip = getenv('REMOTE_ADDR');
$geo = unserialize(file_get_contents("http://www.geoplugin.net/php.gp?ip=$user_ip"));
$country = $geo["geoplugin_countryName"];
$city = $geo["geoplugin_city"];
if ($country != "Belgium") {
    $file = fopen("visitors.txt", "a");
    fwrite($file, (date("H:i:s, d/m/y") . "\n" . $city . ", " . $country . "\n________________________\n"));
    fclose($file);
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
   <meta charset='utf-8'>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Smart Buyer Viljuskari</title>
	<meta name="keywords" content="povoljni automobili,polovni automobili, rabljena vozila, jeftini auti" />
	<meta name="description" content="Agregator najpovoljnijih vozila na Europskom tržištu" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="menuvi.js"></script>
	<script type="text/javascript" src="ajaxmodels.js"></script>
	<link rel="stylesheet" href="styles.css">

</head>
<body>

<div id='cssmenu'>
<ul>
   <li class='active'><a name="reset" href='/'><span>Naslovna</span></a></li>
   <li class='has-sub' id="ponuda1">
    <a href='#'><span>Ponuda</span></a>
      <ul>
         <li><a href='#' id="sve" name="ponuda" ><span>Sve</span></a></li>
         <li><a href='#' id="20" name="ponuda" ><span>Povoljnije za 20%</span></a></li>
         <li class='last'><a href='#' id="30" name="ponuda" ><span>Povoljnije za 30%</span></a></li>
      </ul>
   </li>
   <?php
if (isset($_SESSION['marka'])) {echo "<li class='has-sub' id='" . $_SESSION['marka'] . "'>";} else {echo "<li class='has-sub' id='Marka'>";}
?>

    <a href='#'><span>Marka</span></a>
      <ul>
         <li><a href='#' id="Jungheinrich" name="marka" ><span>Jungheinrich</span></a></li>
         <li class='last'><a href='#' id="Linde" name="marka" ><span>Linde</span></a></li>
      </ul>
   </li>
   <li class='has-sub' id='Model'>
    <a href='#'><span>Model</span></a>
      <ul>
		<?php
//
if ($_POST['name'] == "marka") {
    $_SESSION['marka'] = $_POST['id'];
    unset($_SESSION['ponuda']);
}
$conn = pg_connect($dbstring)
or die("Can't connect to database" . pg_last_error());

if (!$conn) {
    echo "<li>error #1</li>";
}
$sql = "SELECT marka, model, count(*) FROM viljuskari";
/*if(isset($_SESSION['marka']))
{
$sql .= " WHERE marka = '".$_SESSION['marka']."'";
}
else
{
$sql .= " WHERE marka = 'Jungheinrich'";
}*/
$sql .= " GROUP BY marka, model ORDER BY count(*) DESC LIMIT 50;";
$cmd = pg_query($conn, $sql);

if (!$cmd) {
    echo "<li>error #2</li>";
}
while ($row = pg_fetch_row($cmd)) {
    echo "<li><a href='#' id=\"" . $row[1] . "\" name=\"model\" ><span>" . $row[0] . " " . $row[1] . " (" . $row[2] . ")</span></a></li>";
}
?>
      </ul>
   </li>
   <li class='has-sub' id='Cenaod'>
    <a href='#'><span>Cena od</span></a>
      <ul>
         <li><a href='#' id="2000" name="cenaod" ><span>€2000</span></a></li>
         <li><a href='#' id="3000" name="cenaod" ><span>€3000</span></a></li>
         <li><a href='#' id="4000" name="cenaod" ><span>€4000</span></a></li>
         <li><a href='#' id="5000" name="cenaod" ><span>€5000</span></a></li>
         <li><a href='#' id="7000" name="cenaod" ><span>€7000</span></a></li>
         <li><a href='#' id="10000" name="cenaod" ><span>€10000</span></a></li>
         <li><a href='#' id="12000" name="cenaod" ><span>€12000</span></a></li>
         <li><a href='#' id="15000" name="cenaod" ><span>€15000</span></a></li>
         <li><a href='#' id="20000" name="cenaod" ><span>€20000</span></a></li>
         <li><a href='#' id="25000" name="cenaod" ><span>€25000</span></a></li>
         <li><a href='#' id="30000" name="cenaod" ><span>€30000</span></a></li>
         <li><a href='#' id="40000" name="cenaod" ><span>€40000</span></a></li>
         <li class='last'><a href='#' id="50000" name="cenaod" ><span>€50000</span></a></li>
      </ul>
   </li>
   <li class='has-sub' id='Cenado'><a href='#'><span>Cena do</span></a>
      <ul>
         <li><a href='#' id="2000" name="cenado" ><span>€2000</span></a></li>
         <li><a href='#' id="3000" name="cenado" ><span>€3000</span></a></li>
         <li><a href='#' id="4000" name="cenado" ><span>€4000</span></a></li>
         <li><a href='#' id="5000" name="cenado" ><span>€5000</span></a></li>
         <li><a href='#' id="7000" name="cenado" ><span>€7000</span></a></li>
         <li><a href='#' id="10000" name="cenado" ><span>€10000</span></a></li>
         <li><a href='#' id="12000" name="cenado" ><span>€12000</span></a></li>
         <li><a href='#' id="15000" name="cenado" ><span>€15000</span></a></li>
         <li><a href='#' id="20000" name="cenado" ><span>€20000</span></a></li>
         <li><a href='#' id="25000" name="cenado" ><span>€25000</span></a></li>
         <li><a href='#' id="30000" name="cenado" ><span>€30000</span></a></li>
         <li><a href='#' id="40000" name="cenado" ><span>€40000</span></a></li>
         <li class='last'><a href='#' id="50000" name="cenado" ><span>€50000</span></a></li>
      </ul>
   </li>
   <li class='has-sub' id='Motor'><a href='#'><span>Motor</span></a>
      <ul>
         <li><a href='#' name= "motor" id="Električni"><span>Električni</span></a></li>
         <li><a href='#' name="motor" id= "Dizel"><span>Dizel</span></a></li>
         <li class='last'><a href='#' name="motor" id="LPG"><span>LPG</span></a></li>
      </ul>
   </li>
   <li class='has-sub'><a href='#'><span>Kontakt</span></a>
      <ul>
         <li><a href='autor.php' target="if1" id="Autor"><span>Autor</span></a></li>
         <li class='last'><a href='tehnologije.php' target="if1" id="Tehnologije"><span>Tehnologije</span></a></li>
      </ul>
   </li>
   <li><a href='logins/login.php' target="if1"><span>Login</span></a></li>
   <!--<li class='last'><a href='#'><span>Contact</span></a></li>-->
</ul>
</div>
    <div id="if">
	<iframe name="if1" id="if1" src='pgsqlviljuskari.php'>
		<h2>Sorry, your browser does not support iframe!</h2>
	</iframe>
    </div>

</body>
</html>
