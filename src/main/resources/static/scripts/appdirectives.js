'use strict';

(function() {

	var module = angular.module('appdirectives', [ 'ui.bootstrap','tw.services.fileReader' ]);

	/* Automatic uppercase for ID's */
	module.directive('capitalize', function() {
		return {
			require : 'ngModel',
			restrict : "A",
			link : function(scope, elem, attrs, modelCtrl) {

				/* Watch the model value using a function */
				scope.$watch(function() {
					return modelCtrl.$modelValue;
				}, function(value) {
					if (!isDefined(value) || isUpperCase(value)) {
						return;
					}

					/* Save selection position */
					var start = elem[0].selectionStart;
					var end = elem[0].selectionEnd;

					/* uppercase the value */
					value = value.toUpperCase();

					/* set the new value in the modelControl */
					modelCtrl.$setViewValue(value);

					/* update the view */
					modelCtrl.$render();

					/* Reset the position of the cursor */
					elem[0].setSelectionRange(start, end);
				});
				function isDefined(str) {
					return angular.isDefined(str) && str !== null
							&& str.length > 0;
				}
				function isUpperCase(str) {
					return str === str.toUpperCase();
				}
			}
		};
	});


	

	
	module.directive('uiMaskType', [ '$log', '$compile',
			function($log, $compile) {
				return {
					restrict : "A",
					priority : 200,
					terminal : true,
					// replace: true,
					link : function(scope, element, attributes) {

						switch (element.attr('mask-type')) {
						case 'tel':
							element.attr('ui-mask', '(99) 999-9999');
							break;
						case 'mobile':
							element.attr('ui-mask', '999-999-99999');
							break;
						case 'date':
							element.attr('ui-mask', '99/99/9999');
							break;
						case 'fax':
							element.attr('ui-mask', '(99) 999-9999');
							break;
						case 'ipAd':
							element.attr('ui-mask', '999.999.999.999');
							break;
						case 'year':
							element.attr('ui-mask', '9999');
							break;
						}
						element[0].removeAttribute('ui-mask-type');

						element.replaceWith($compile(element)(scope));
					}
				};
			} ]);

	module
			.directive(
					'scrollUp',
					function() {
						return {
							restrict : "EA",
							template : '<div class="scroll-top"><div class="scroll-icon"><i class="fa fa-fw fa-chevron-up"></i></div></div>',
							link : function(scope, element) {
								$(window).scroll(function() {
									if ($(this).scrollTop() > 200) {
										$('.scroll-top').fadeIn();
									} else {
										$('.scroll-top').fadeOut();
									}
								});
								element.on('click', function() {
									$("html,body").animate({
										scrollTop : '0px'
									}, "slow");
								});
							}
						};
					});

	/* Modified angular-ui-mask config: added maskDefinitions of 1,2 and 3 */
	module.value('uiMaskConfig', {
		maskDefinitions : {
			'1' : /[0-1]/,
			'2' : /[0-2]/,
			'3' : /[0-3]/,
			'9' : /\d/,
			'A' : /[a-zA-Z]/,
			'*' : /[a-zA-Z0-9]/
		},
		clearOnBlur : true,
		clearOnBlurPlaceholder : false,
		escChar : '\\',
		eventsToHandle : [ 'input', 'keyup', 'click', 'focus' ],
		addDefaultPlaceholder : true,
		allowInvalidValue : false
	});

	module
			.directive(
					'validateEmail',
					function() {
						var EMAIL_REGEXP = /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,4})$/;
						var linker = function(scope, element, attrs, ctrl) {

							element.on('blur', function() {
								var val = element.val();
								if (EMAIL_REGEXP.test(val)) {
									element.val(val);
								} else {
									element.val("");
								}

							});
						}
						return {
							require : 'ngModel',
							restrict : '',
							link : linker
						};
					});

	module.directive('tooltip', function() {
		return {
			restrict : "A",
			link : function(scope, element, attrs) {
				element.hover(function() {
					element.tooltip('show');
					/* element.removeAttr("tooltip-data"); */
				}, function() {
					element.tooltip('hide');
					element.removeAttr("tooltip");
				});

				element.click(function() {
					element.tooltip('hide');
				})
			}
		};
	});

	module.directive('caret', [ '$timeout', '$parse',
			function($timeout, $parse) {
				return {
					link : function(scope, element, attrs) {
						var model = $parse(attrs.caret);
						scope.$watch(model, function(value) {
							if (value === true) {
								$timeout(function() {
									element[0].focus();
								});
							}
						});
						element.bind('blur', function() {
							scope.$apply(model.assign(scope, false));
						});
					}
				};
			} ]);

	module.directive('fileUpload', function() {
		return {
			scope : {
				file : '=',
				accept : '=',
			},
			link : function(scope, el, attrs, ctrl) {
				console.log(ctrl)
				el.bind('change',
						function(event) {
							var files = event.target.files;
							var file = files[0];

							var validFormats = [ 'jpg', 'jpeg', 'png', 'JPG',
									'JPEG', 'PNG' ];

							var value = file.name
							var ext = value.substr(value.lastIndexOf('.') + 1);

							if (ext == '')
								return;

							if (validFormats.indexOf(ext) !== -1
									&& file.size < 2097152) {
								scope.file = file;
								scope.$apply();
							} else {
								scope.file = 'invalid';
								alert('Invalid! File should not be more than 2mb');
								scope.$root.showUploadSgnErrorMessage = true;
								scope.$apply();
							}

						});
			}
		};
	});

	module.directive('filePreview', function(twFileReader) {
		return {
			restrict : 'A',
			scope : {
				filePreview : '='
			},
			link : function(scope, element, attrs) {
				scope.$watch('filePreview', function(filePreview) {
					if (filePreview && filePreview.name) {
						twFileReader.readAsDataURL(filePreview).then(
								function(result) {
									element.attr('src', result);
								});
					}
				});
			}
		};
	});

	module.directive('validFile', function() {
		return {
			require : 'ngModel',
			link : function(scope, elem, attrs, ngModel) {
				var validFormats = [ 'jpg', 'jpeg', 'png' ];
				elem.bind('change', function() {
					validImage(false);
					scope.$apply(function() {
						ngModel.$render();
					});
				});
				ngModel.$render = function() {
					ngModel.$setViewValue(elem.val());
				};
				function validImage(bool) {
					ngModel.$setValidity('extension', bool);
				}
				ngModel.$parsers.push(function(value) {
					var ext = value.substr(value.lastIndexOf('.') + 1);
					if (ext == '')
						return;
					if (validFormats.indexOf(ext) == -1) {
						return value;
					}
					validImage(true);
					console.log('asdf' + value)
					return value;

				});
			}
		};
	});

	module.directive('contactNumber', function() {
		function link(scope, element, attr, ngModelCtrl) {
			ngModelCtrl.$parsers.push(function(viewValue) {
				var replaced = viewValue.replace(/[^0-9()+-]/g, '');

				if (replaced !== viewValue) {
					ngModelCtrl.$setViewValue(replaced);
					ngModelCtrl.$render();
				}

				return replaced;
			});
		}

		return {
			restrict : 'A',
			require : 'ngModel',
			link : link
		};
	});

})();
