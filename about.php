<?php
/**
 * Template Name: about
 *
 * @package WordPress
 * @subpackage matheusFonseca
 * @since matheusFonseca
 */
get_header(); ?>

<?php if( have_rows('about') ):
while( have_rows('about') ): the_row(); 

$subtitle = get_sub_field('subtitle');
$title = get_sub_field('title');
$text = get_sub_field('text');
?>
<section class="about">
  <div class="container">
    <div class="about-text">
      <h3><?=$subtitle?></h3>
      <h2><?=$title?></h2>

      <div>
        <?=$text?>
      </div>

      <div class="about-pattern" style="background-image: url('<?=get_template_directory_URI()?>/img/src/pattern_2.png')"></div>
    </div>

    <div class="about-img">
      <img src="<?=get_template_directory_URI()?>/img/src/different.svg" alt="Seven Stars - We do different" />
      <img src="<?=get_template_directory_URI()?>/img/src/beyond.svg" alt="Seven Stars - We go beyond" />
      <img src="<?=get_template_directory_URI()?>/img/src/another.svg" alt="Seven Stars - From another world" />
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<?php if( have_rows('mission') ):
while( have_rows('mission') ): the_row(); 

$first_title = get_sub_field('first_title');
$first_text = get_sub_field('first_text');
$second_title = get_sub_field('second_title');
$second_text = get_sub_field('second_text');
$third_title = get_sub_field('third_title');
$third_text = get_sub_field('third_text');
?>
<section class="mission">
  <div class="container">
    <img src="<?=get_template_directory_URI()?>/img/src/about_rocket.svg" alt="Seven Stars | We go beyond" />

    <div class="mission-card">
      <h4><?=$first_title?></h4>
      <p><?=$first_text?></p>
    </div>
    
    <div class="mission-card">
      <h4><?=$second_title?></h4>
      <p><?=$second_text?></p>
    </div>
    
    <div class="mission-card">
      <h4><?=$third_title?></h4>
      <p><?=$third_text?></p>
    </div>
  </div>
</section>
<?php endwhile; ?>
<?php endif; ?>

<?php get_footer();