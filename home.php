<?php
/**
 * Template Name: home
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<?php if( have_rows('banner') ):
while( have_rows('banner') ): the_row(); 

$title = get_sub_field('title');
$text = get_sub_field('text');
$button_name = get_sub_field('button_name');
$button_link = get_sub_field('button_link');
?>
<section class="home-banner" data-anima-tempo style="background-image: url('<?=get_template_directory_URI()?>/img/src/banner.png')">
  <div class="container">
    <div class="home-banner-text">
      <h2 data-anima-tempo><?=$title?></h2>
      <h1 data-anima-tempo><?=$text?></h1>
      <a data-anima-tempo href="<?=$button_link?>" class="cta cta-blue"><?=$button_name?></a>
    </div>
  </div>

  <div class="home-banner-pattern" style="background-image: url('<?=get_template_directory_URI()?>/img/src/pattern_1.png')"></div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<section class="reviews">
  <div class="container">
    <h3>what they are saying about us</h3>
    <h2>our reviews</h2>

    <div class="reviews-wrapper">
      <div class="reviews-carousel">
        <? query_posts( array( 'post_type' => 'reviews', 'posts_per_page' => '9' ) );  ?>
        <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>

        <div class="review" data-stars="<?=the_field('stars')?>">
          <h4><?=the_title()?></h4>
          <p><?=the_content()?></p>

          <div class="review-stars"></div>
        </div>

        <?php endwhile; ?>
        <?php endif; ?>
      </div>
    </div>

    <div class="reviews-buttons">
      <button class="reviews-left">
        <img src="<?=get_template_directory_URI()?>/img/src/arrow.svg" alt="Reviews" />
      </button>
      
      <button class="reviews-right">
        <img src="<?=get_template_directory_URI()?>/img/src/arrow.svg" alt="Reviews" />
      </button>
    </div>
  </div>
</section>

<?php wp_reset_query();
if( have_rows('about') ):
while( have_rows('about') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
$button_name = get_sub_field('button_name');
$button_link = get_sub_field('button_link');
?>
<section class="home-about">
  <div class="container">
    <div class="home-about-text">
      <h3><?=$subtitle?></h3>
      <h2><?=$title?></h2>

      <div>
        <?=$text?>  
      </div>

      <a href="<?=$button_link?>" class="cta cta-yellow"><?=$button_name?></a>
    </div>

    <div class="home-about-logo">
      <img src="<?=get_template_directory_URI()?>/img/src/logo_horizontal.svg" alt="Seven Stars" />
    </div> 
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<div class="home-about-logos">
  <div class="container">
    <img src="<?=get_template_directory_URI()?>/img/src/different.svg" alt="Seven Stars - We do different" />
    <img src="<?=get_template_directory_URI()?>/img/src/beyond.svg" alt="Seven Stars - We go beyond" />
    <img src="<?=get_template_directory_URI()?>/img/src/another.svg" alt="Seven Stars - From another world" />
  </div>
</div>

<?php if( have_rows('services') ):
while( have_rows('services') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
$button_name = get_sub_field('button_name');
$button_link = get_sub_field('button_link');
?>
<section class="home-services">
  <div class="container">
    <div class="home-services-text">
      <div>
        <h3><?=$subtitle?></h3>
        <h2><?=$title?></h2>
      </div>

      <p><?=$text?></p>
    </div>

    <div class="home-services-wrapper">
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

      <a href="<?=the_permalink()?>" class="home-services-item">
        <svg width="32" height="32" viewBox="0 0 32 32">
          <use xlink:href="#rocket"></use>
        </svg>

        <div class="home-services-item-text">
          <h5><?=the_title()?></h5>
          <p><?=the_field('resume')?></p>
        </div>
      </a>

      <?php endwhile; ?>
    </div>

    <a href="<?=$button_link?>" class="cta cta-cian"><?=$button_name?></a>
  </div>

  <div class="home-services-pattern" style="background-image: url('<?=get_template_directory_URI()?>/img/src/pattern_2.png')"></div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<?php query_posts( array( 'post_type' => 'post', 'posts_per_page' => '1', 'cat' => '1' ) );  ?>
<?php if ( have_posts() ) : ?>

<section class="home-blog">
  <div class="container">
    <div class="home-blog-title">
      <h3>Last posts</h3>
      <h2>Blog</h2>
    </div>

    <div class="home-blog-wrapper">
      <?php while ( have_posts() ) : the_post(); ?>

      <div class="home-blog-card">
        <a href="<?=the_permalink()?>" class="home-blog-img">
          <div class="home-blog-img-wrapper">
            <img src="<?=catch_that_image(2)?>" alt="<?=the_title()?>" />
          </div>

          <div class="yellow-frame"></div>
          <div class="yellow-box"></div>
          <div class="white-box"></div>

          <img 
            src="<?=get_template_directory_URI()?>/img/src/pattern_1.png" 
            alt="Seven Stars" 
            class="home-blog-img-pattern" 
          />
        </a>

        <div class="home-blog-text">
          <span>
            <img src="<?=get_template_directory_URI()?>/img/src/clock.svg" alt="Post time" />
            <?=the_date()?>
          </span>

          <a href="<?=the_permalink()?>">
            <h4><?=the_title()?></h4>
          </a>

          <p><?=the_field('resume')?></p>

          <a href="<?=the_permalink()?>" class="cta cta-yellow">
            read more
          </a>
        </div>
      </div>

      <?php endwhile; ?>
    </div>

    <a href="<?=site_url()?>/blog" class="cta cta-cian">All blog posts</a>
  </div>
</section>
<?php endif; ?>

<?php get_footer();