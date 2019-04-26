<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$name = urldecode($name);
$tel = urldecode($tel);
$name = trim($name);
$tel = trim($tel);
echo $name;
echo "<br>";
echo $tel;
if (mail("al.horkina@gmail.com", "Заявка с сайта", "ФИО:".$name.". Tel: ".$tel ,"From: info@webriz.ru \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>