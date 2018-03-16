<?php

/*
Plugin Name: Advanced Custom Fields Sidebar & Widget
Plugin URI: http://www.zillow.com
Description: Allows sidebars and widgets to be added as custom fields and individually configured.
Version: 1.0.0
Author: Chris Jones
Author URI: http://heyjones.com
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

if( !defined( 'ABSPATH' ) ) exit;

if( !class_exists( 'acf_plugin_widget' ) ){

	class acf_plugin_widget{

		function __construct(){
			$this->settings = array(
				'version' => '1.0.0',
				'url' => plugin_dir_url( __FILE__ ),
				'path' => plugin_dir_path( __FILE__ )
			);
			add_action( 'acf/include_field_types', array( $this, 'include_field_types') );
		}

		function include_field_types( $version = false ){
			if( !$version || $version != 5 ) return;
			include_once( 'fields/acf-sidebar-v' . $version . '.php' );
			include_once( 'fields/acf-widget-v' . $version . '.php' );
		}

	}

	new acf_plugin_widget();

}
