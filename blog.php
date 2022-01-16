<?php
/**
 * Template Name: blog
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<section class="blog">
  <div class="container">
    <div class="blog-title">
      <h3>Last Posts</h3>
      <h2>blog</h2>
    </div>

    <div class="blog-wrapper">
      <? query_posts( array( 'post_type' => 'post', 'posts_per_page' => '1', 'cat' => '1' ) );  ?>
      <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>

      <a href="<?=the_permalink()?>" class="blog-card">
        <div class="blog-card-img">
          <img src="<?=catch_that_image(2)?>" alt="<?=the_title()?>" />
        </div>

        <div class="blog-text">
          <span>
            <img src="<?=get_template_directory_URI()?>/img/src/clock.svg" alt="Post time" />
            <?=the_date()?>
          </span>

          <h4><?=the_title()?></h4>
          <p><?=the_field('resume')?></p>
        </div>
      </a>

      <?php endwhile; ?>
      <?php endif; ?>

      <div class="blog-pattern" style="background-image: url('<?=get_template_directory_URI()?>/img/src/pattern_2.png')"></div>
    </div>
  </div>
</section>

<?php get_footer();