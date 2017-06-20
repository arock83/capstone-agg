"use strict";

app.directive("fileInput", ["$parse", function($parse){
	return {
		restrict: "A",
		link: function(scope, element, attribute) {
			element.bind("change", function(){
				$parse(attribute.fileInput)
				.assign(scope, element[0].file);
				scope.$apply();

			});
		}
	};
}]);