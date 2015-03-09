/*!jQuery TagsInput */
/**
 * SOME TITLE
 *
 * Version: 2.0.0
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2015 Luckner Jr Jean-Baptiste
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
 
 // https://github.com/aterrien/jQuery-Knob/blob/master/js/jquery.knob.js
 
(function(factory) {
   if (typeof exports === 'object') {
      // CommonJS
      module.exports = factory(require('jquery'));
   } else if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module
      define(['jquery'], factory);
   } else {
      // Browser globals
      factory(jQuery);
   }
}(function($) {
   'use strict';
   
   var tagsInput = {};
   tagsInput.Core = {};
   
   // Object
   tagsInput.Obj = function() {
      var self = this;
      
      this.options = null;
      this.$ = null;
      this.$realInput = null;
      this.$fakeInput = null;
      this.autocomplete = null;
      this.defaultText = null;
      
      this.run = function() {
         console.log('in run function');
         var configure = function(event, config) {
            var option;
            for(option in config) {
               self.options[option] = config[option];
            }
         }
         
         // Merge options
         this.options = $.extend({
            // Config
            minChars: 0,
            defaultText: 'Add a tag',
            
            // UI
            height: 100,
            width: 300,
            
            // Autocomplete
            
            // Hooks
            
            // Output formatting or other things
         }, this.options);
      };
      
      
      
      
      
      // // Get the element's ID or create one
      // var id = this.$.attr('id');
      
      // var markup = '';
   };
   
   $.fn.tagsInput = function(options) {
      return this.each(function() {
         var instance = new tagsInput.Obj();
         instance.run();
      });
   }
   
}));