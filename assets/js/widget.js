(function($){

	function initialize_field( $el ) {

		//$el.doStuff();
		$el.on('change', function(e){
			if(e.target.name.indexOf('[class]') > 0){
				var name = $el.find('option:selected').parent().attr('name');
				var widget = $el.find('option:selected').val();
				var form = $(this).parent().find('.acf-field-widget-form');
				$.get(ajaxurl + '?action=acf-widget-form&widget=' + widget + '&name=' + name, function(data){
					form.html(data);
				});
			}
		});

	}


	if( typeof acf.add_action !== 'undefined' ) {

		/*
		*  ready append (ACF5)
		*
		*  These are 2 events which are fired during the page load
		*  ready = on page load similar to $(document).ready()
		*  append = on new DOM elements appended via repeater field
		*
		*  @type	event
		*  @date	20/07/13
		*
		*  @param	$el (jQuery selection) the jQuery element which contains the ACF fields
		*  @return	n/a
		*/

		acf.add_action('ready append', function( $el ){

			// search $el for fields of type 'FIELD_NAME'
			acf.get_fields({ type : 'widget'}, $el).each(function(){

				initialize_field( $(this) );

			});

		});


	}


})(jQuery);
