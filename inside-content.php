<div class="content-title">
  <div class="container">
    <h3>
      <?php if (get_post_type(get_the_ID()) == 'page') { ?>
      Services
      <?php } else { ?>
      <span>
        <img src="<?=get_template_directory_URI()?>/img/src/clock.svg" alt="Post time" />
        <?=the_date()?>
      </span>
      <?php } ?>
    </h3>
    <h2><?=the_title()?></h2>
  </div>
</div>

<div class="content-img">   
	<img src="<?=catch_that_image(1)?>" alt="<?=the_title()?>" />
</div>

<div class="content-text">
  <div class="container">
    <div class="content-wrapper">
      <?=the_content()?>
    </div>
  </div>
</div>
