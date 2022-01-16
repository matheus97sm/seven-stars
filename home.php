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
<section class="home-banner" style="background-image: url('<?=get_template_directory_URI()?>/img/src/banner.jpg')">
  <div class="container">
    <div class="home-banner-text">
      <h1><?=$title?></h1>
      <p><?=$text?></p>
      <a href="<?=$button_link?>" class="cta cta-blue"><?=$button_name?></a>
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
      <div class="review">
        <strong>Jhon Doe</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id magna nec nibh tristique porttitor non quis massa. Etiam gravida consequat pharetra.</p>
      </div>
    </div>
  </div>
</section>

<?php if( have_rows('about') ):
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

      <a href="<?=the_permalink()?>" class="home-services-item fadeUp" data-animar>
        <svg width="32" height="32" viewBox="0 0 32 32">
          <use xlink:href="#rocket"></use>
        </svg>

        <div class="home-services-item-img">
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

<?php if( have_rows('blog') ):
while( have_rows('blog') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$button_name = get_sub_field('button_name');
$button_link = get_sub_field('button_link');
?>
<? query_posts( array( 'post_type' => 'post', 'posts_per_page' => '1', 'cat' => '1' ) );  ?>
<?php if ( have_posts() ) : ?>
<section class="home-blog">
  <div class="container">
    <div class="home-blog-title">
      <h3><?=$subtitle?></h3>
      <h2><?=$title?></h2>
    </div>

    <div class="home-blog-wrapper">
      <?php while ( have_posts() ) : the_post(); ?>

      <div class="home-blog-card">
        <a href="<?=the_permalink()?>" class="home-blog-img">
          <div class="yellow-frame"></div>
          <img src="<?=catch_that_image(2)?>" alt="<?=the_title()?>" />
          <img src="<?=get_template_directory_URI()?>/img/src/pattern_1.png" alt="Seven Stars" class="home-blog-img-pattern" />
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

          <a href="<?=the_permalink()?>" class="cta cta-cian">
            read more
          </a>
        </div>
      </div>

      <?php endwhile; ?>
    </div>

    <a href="<?=$button_link?>" class="cta cta-cian"><?=$button_name?></a>
  </div>
</section>
<?php endif; ?>
<?php endwhile; ?>
<?php endif; ?>

<?php get_footer();