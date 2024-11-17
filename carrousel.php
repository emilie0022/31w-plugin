<?php
/*
plugin name: Carrousel
description: Affiche un carrousel à partir d'une galerie d'image
version: 1.0.0
author: Eddy Martin
author uri: https://referenced.ca
*/

function enfile_css_js()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "/style.css");
    $version_js =  filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(
        "carrousel",
        plugin_dir_url(__FILE__) . "/style.css",
        array(),
        $version_css
    );
    wp_enqueue_script(
        "carrousel",
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    );
}
add_action("wp_enqueue_scripts", "enfile_css_js");

function genere_carrousel()
{
    $chaine =
        '
        <div class="carrousel">
            <button class="carrousel__X">X</button>
            
            <button class="carrousel__gauche"><svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#cceaff"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></button>

            <button class="carrousel__droite"><svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#cceaff"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>

        <figure class="carrousel__figure"></figure>
    </div>';
    return $chaine;
}

add_shortcode("carrousel", "genere_carrousel");