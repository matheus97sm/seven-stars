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
        <h3>Contact</h3>

        <div class="footer-contact-info">
          <a href="tel:555555555" target="_blank">555555555</a>
          <a href="mailto:contact@sevenstars.com" target="_blank">contact@sevenstars.com</a>
        </div>

        <div class="footer-contact-social">
          <a href="https://www.instagram.com/" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#instagram"></use>
            </svg> 
          </a>
          
          <a href="https://facebook.com" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <use xlink:href="#facebook"></use>
            </svg> 
          </a>
        </div>
      </div>
    </div>

    <div class="rodape">
      <p>Copyright © www.sevenstars.com 2022. All rights reserved.</p>
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