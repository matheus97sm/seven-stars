<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

<footer class="footer">
  <div class="container">
    <div class="footer-header">
      <div class="footer-title">
        <h3>connect with us</h3>
        <h2>contact</h2>
      </div>

      <img src="<?=get_template_directory_URI()?>/img/src/logo_horizontal.svg" alt="Seven Stars" />
    </div>

    <div class="footer-info">
      <? echo do_shortcode('[contact-form-7 id="7" title="Form Footer"]'); ?>

      <div class="sitemap">
        <h5>Sitemap</h5>

        <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu' => 'MenuTopo', 'menu_class' => 'nav-menu', 'menu_id' => 'primary-menu' ) ); ?>
      </div>

      <div class="footer-contact">
        <h5>Contact</h5>

        <div class="footer-contact-info">
          <a href="tel:(646)2360560" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#tel"></use>
            </svg> 
            <span>(646) 236 0560</span>
          </a>
          <a href="mailto:info.sevenstarsluxury@gmail.com" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#mail"></use>
            </svg> 
            <span>info.sevenstarsluxury@gmail.com</span>
          </a>

          <a href="https://instagram.com/seven_stars_luxury_cleaning?utm_medium=copy_link" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#instagram"></use>
            </svg> 
            <span>@seven_stars_luxury_cleaning</span>
          </a>
        </div>

        <div class="footer-contact-social">
          <!-- <a href="https://facebook.com" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#facebook"></use>
            </svg> 
          </a> -->
        </div>
      </div>
    </div>

    <div class="rodape">
      <p>Copyright © www.sevenstarsluxurycleaning.com 2022. All rights reserved.</p>
    </div>
  </div>
</footer>

<div style="display: none;">
  <?php include 'svg.php'; ?>
</div>

<script src="<?=get_template_directory_URI()?>/app/app.js"></script>

<?php wp_footer(); ?>
</body>
</html>
