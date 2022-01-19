<?php
/**
 * Template Name: services
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<?php if( have_rows('services', 9) ):
while( have_rows('services', 9) ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
?>
<section class="services">
  <div class="container">
    <div class="services-text">
      <div>
        <h3><?=$subtitle?></h3>
        <h2><?=$title?></h2>
      </div>

      <p><?=$text?></p>
    </div>

    <div class="services-wrapper">
      <?php
        $args = array(
          'post_parent' => 15,
          'post_type' => 'page',
          'orderby' => 'menu_order',
          'meta_key' => 'featured',
          'meta_value' => true
        );

        $child_query = new WP_Query( $args );
      ?>
      <?php while ( $child_query->have_posts() ) : $child_query->the_post(); ?>

      <a href="<?=the_permalink()?>" class="services-item">
        <img src="<?=catch_that_image(2)?>" alt="<?=the_title()?>" />
        
        <h3><?=the_title()?></h3>
      </a>

      <?php endwhile; ?>
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<?php get_footer();