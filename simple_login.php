<?php
  session_start();
  $id = $_GET['id'];
  $pw = $_GET['pw'];
  
  if($id == 'guest' && $pw == 'guest') {
    echo "Success";
    $_SESSION['id'] = $id;
  }
  else "Failed"
?>