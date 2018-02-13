<?php
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';
include '../db.php';

sec_session_start();
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
        <meta charset="UTF-8">
        <title>Secure Login: Protected Page</title>
        <link rel="stylesheet" href="styles/main.css" />
</head>

<body>
        <?php if (login_check($mysqli) == true): ?>
            <p>Welcome <?php echo htmlentities($_SESSION['username']); ?>!</p>
            <?php
$modeli = array("");
$modeliLength = 0;
$conn = pg_connect($dbstring)
or die("Can't connect to database" . pg_last_error());

if (!$conn) {
    echo "error1";
}

$cmd = pg_query($conn, "SELECT model, tip, godinapr, count(*) FROM oglasi GROUP BY model, tip, godinapr HAVING count(*) > 30 ORDER BY COUNT(*) DESC;");
if (!$cmd) {
    echo "error2";
}

while ($row = pg_fetch_row($cmd)) {
    $modeli[$modeliLength][0] = $row[0];
    $modeli[$modeliLength][1] = $row[1];
    $modeli[$modeliLength][2] = $row[2];
    $modeliLength++;
}

for ($i = 0; $i < $modeliLength; $i++) {
    $sql = "SELECT avg(cijena), stddev(cijena) FROM oglasi WHERE model = '" . $modeli[$i][0] . "' AND tip = '" . $modeli[$i][1] . "' AND godinapr = " . $modeli[$i][2] . " ; ";
    $cmd = pg_query($conn, $sql);
    while ($row = pg_fetch_row($cmd)) {
        if ($row[1] != 0) {

            //echo $row[0]." + " .$row[1]."<br/>";
            $targetPrice = $row[0] - 2 * $row[1];
            //echo $targetPrice."<br/>";
            $sql = "SELECT * FROM oglasi WHERE cijena < $targetPrice AND model = '" . $modeli[$i][0] . "' AND tip = '" . $modeli[$i][1] . "' AND godinapr = " . $modeli[$i][2] . ";";

            $cmd = pg_query($conn, $sql);
            $sql = "";
            while ($row = pg_fetch_row($cmd)) {
                if (pg_fetch_row(pg_query($conn, "SELECT count(*) FROM oglasiselectedstd2 WHERE uniqid = " . $row[13] . ";"))[0] < 1 && strpos($sql, $row[13]) === false) {
                    $sql1 = "INSERT INTO oglasiselectedstd2(marka, model, cijena, aktivan, godinapr";
                    $sql2 = "VALUES('" . $row[1] . "', '" . $row[2] . "', " . $row[3] . ", true, " . $row[6];
                    if ($row[5] != "") {
                        $sql1 .= ", tip";
                        $sql2 .= ", '" . $row[5] . "'";
                    }
                    if ($row[7] != "") {
                        $sql1 .= ", mjesecpr";
                        $sql2 .= ", " . $row[7];
                    }
                    if ($row[8] != "") {
                        $sql1 .= ", kilometri";
                        $sql2 .= ", " . $row[8];
                    }
                    if ($row[9] != "") {
                        $sql1 .= ", motor";
                        $sql2 .= ", '" . $row[9] . "'";
                    }
                    if ($row[10] != "") {
                        $sql1 .= ", lokacija";
                        $sql2 .= ", '" . $row[10] . "'";
                    }
                    if ($row[11] != "") {
                        $sql1 .= ", drzava";
                        $sql2 .= ", '" . $row[11] . "'";
                    }
                    if ($row[12] != "") {
                        $sql1 .= ", url";
                        $sql2 .= ", '" . $row[12] . "'";
                    }
                    if ($row[13] != 0) {
                        $sql1 .= ", uniqid";
                        $sql2 .= ", " . $row[13];
                    }
                    $sql1 .= ") ";
                    $sql2 .= "); ";
                    $sql .= $sql1 . $sql2;
                    echo $sql1 . $sql2 . "<br/>";
                }
            }
            $cmd = pg_query($conn, $sql);
            $sql = $sql1 = $sql2 = null;
            //echo pg_fetch_row($cmd)[0];
        }

    }

}
?>
            <p>Return to <a href="login.php">login page</a></p>
        <?php else: ?>
            <p>
                <span class="error">You are not authorized to access this page.</span> Please <a href="login.php">login</a>.
            </p>
        <?php endif;?>

</body>
</html>
