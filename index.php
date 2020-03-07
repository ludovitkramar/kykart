<!--THIS IS THE UNIVERSAL HEADER-->
<?php
  $universalStart = fopen("/var/www/html/universal-start.html", "r") or die("Unable to open the UneversalStart!!");
  echo fread($universalStart,filesize("/var/www/html/universal-start.html"));
  fclose($universalStart);
 ?>
<div class="colum-center">
<!--THE CONTENT STARTS FROM HERE----------------------------------------------->
<article>
<div class="invisible-box">
  <h2 class="LinBiolinum_R" id="about">About The kykart Project</h2>
  <p class="content">The kykart Project's mission is to experiment and learn. The areas of interest are wide and varied, ranging from music, programming to history or maybe even philosophy.</p>
  <p class="content"></p>
</div>
<div class="invisible-box">
  <h2 class="LinBiolinum_R" id="news">News and updates</h2>
  <p class="content">Updates on the status of development will be posted here:</p>
<?php
  $news_dir = "/var/www/html/news";
  $allTheNews = scandir($news_dir);
  rsort($allTheNews);
  array_pop($allTheNews);
  array_pop($allTheNews);
  $amount = count($allTheNews);
  for ($i=0; $i < $amount; $i++) {
    $newsArticle = fopen("/var/www/html/news/" . $allTheNews[$i], "r") or die("Unable to open the article!!!");
    echo fread($newsArticle,filesize("/var/www/html/news/" . $allTheNews[$i]));
    fclose($newsArticle);
  }
 ?>
</div>
</article>
<!--THE CONTENT ENDS HERE------------------------------------------------------>
</div>
<div class="colum-right">
<!--Right colum starts--------------------------------------------------------->

<!--Right colum ends----------------------------------------------------------->
</div>
<?php
  $universalEnd = fopen("/var/www/html/universal-end.html", "r") or die("Unable to open the UneversalEnd!!");
  echo fread($universalEnd,filesize("/var/www/html/universal-end.html"));
  fclose($universalEnd);
 ?>
