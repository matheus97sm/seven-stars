<?php
/**
 * Template Name: faq
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<section class="faq">
  <div class="container">
    <div class="faq-title">
      <h3>questions that may help you</h3>
      <h2>Faq</h2>
    </div>

    <div class="faq-wrapper">
      <? query_posts( array( 'post_type' => 'faq-question', 'posts_per_page' => '-1' ) );  ?>
      <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>

      <div class="faq-question">
        <h3>
          <span><?=the_title()?></span>
          <div></div>
        </h3>
        
        <div class="faq-question-text">
          <?=the_content()?>
        </div>
      </div>
      
      <?php endwhile; ?>
      <?php endif; ?>
    </div>
  </div>
</section>

<?php get_footer();