<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

<? if (is_single()) { ?>
	
<?php include 'inside-content.php'; ?>
    
<? } else { ?>

	//Codigo fora do post
    
<? } ?>