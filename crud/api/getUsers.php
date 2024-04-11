<?php
include "./partials/Connection.php";

try {
  $SQL = "SELECT * FROM user;";

  $state = $pdo->prepare($SQL);
  $state->execute();
  $rows =  $state->fetchall(PDO::FETCH_ASSOC);
  $json = [];

  /*while ($row = $state->fetch(PDO::FETCH_ASSOC)) {
    $json[] = [
      "id" => $row['id'],
      "fullname" => "{$row['firstname']} {$row['lastname']}"
    ];
  }
*/

  var_dump($rows);

  echo json_encode($json);
} catch (PDOException $e) {
  die($e->getMessage());
}
?>
