<?php
  $conn = mysqli_connect(
    'localhost',
    'root',
    '11111111',
    'opentutorials'
  );
  echo "<h1>제목이다~</h1>";
  $sql = "SELECT * FROM user WHERE isAdmin=1";
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_array($result);
  echo "<h1>".$row['name']."</h1>";
  echo $row['description'];
?>