<!DOCTYPE html>
<html>
<body>
    
	<?php
		function prime($n)
		{
			if ($n == 1) {
				return 0;
			}
			for ($i = 2; $i < $n; $i++) {
				if ($n % $i == 0) {
					return 0;
				}
			}
			return 1;
		}
		$a = $_POST["N1"];
        $b = $_POST["N2"];
        echo "<h3>Prime Numbers in the range ".$a." and ".$b." are : "."</h3>";
		for ($i = $a; $i <= $b; $i++) {
			$p = prime($i);
			if ($p == 1) {
				echo $i." ";
			}
		}
	?>
</body>
</html>