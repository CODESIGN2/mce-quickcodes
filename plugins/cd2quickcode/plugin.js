/**
 * plugin.js
 *
 * Copyright, CODESIGN2 UK (Trading Name of Mr Lewis Cowles)
 * Released under MIT License.
 *
 */
/*global tinymce:true */

(function() {
	window.cd2 = window.cd2 || {};
	window.cd2.mce = window.cd2.mce || {};
	window.cd2.mce.transformQuickCode = function(content) {
		var matches = content.match(/{(?:[^{,^}]+)}/g); // match {*} containing any chars but { & }
		if( matches !== null ) {
			matches.map( function(e) {
				content = content.replace(e, '<span class="cd2-mce-view cd2-quick-code" contenteditable="false" data-sc="'+btoa(e)+'"><span class="inner">&nbsp;</span></span>');
			} );
		}
		return content;
	};
	window.cd2.mce.restoreQuickCode = function(ed) {
		// do the opposite
		var matches = ed.contentDocument.querySelectorAll('.cd2-mce-view'), i;
		for( i = 0; i<matches.length; ++i) {
			matches[i].outerHTML = atob(matches[i].dataset.sc);
		}
	};

	tinymce.create('tinymce.plugins.cd2quickcodeplugin', {
		init : function(ed) {
			ed.on('beforeSetContent', function(e) {
				e.content = window.cd2.mce.transformQuickCode(e.content);
			});
			ed.on('beforeGetContent', function(e) {
				e.content = window.cd2.mce.restoreQuickCode(e.target);
			});

			ed.on('postProcess', function(e) {
				if (e.set) {
					e.content = window.cd2.mce.transformQuickCode(e.content);
				}

				if (e.get) {
					window.cd2.mce.restoreQuickCode(e.target);
				}
			});
			
			(ed.contentStyles = ed.contentStyles || [])
				.push(
					[
					".cd2-mce-view { position: relative; display: inline-block; min-width: 10em; min-height: 1em; border: 1px dashed; }",
					".cd2-mce-view .toolbar { position: absolute; top: -2em; margin: 0 auto; background-color: #ccc; display: inline-block; min-width: 10em; min-height: 1em; }"
					]
				);

			console.log(ed);
		}
	});
	tinymce.PluginManager.add('cd2quickcode', tinymce.plugins.cd2quickcodeplugin);
})();
