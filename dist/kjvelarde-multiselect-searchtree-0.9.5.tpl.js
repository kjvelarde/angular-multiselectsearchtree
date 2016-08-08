angular.module('multiselect-searchtree').run(['$templateCache', function ($templateCache) {
    'use strict';

    $templateCache.put('src/multiselect-searchtree.tpl.html',
      "<div class=\"tree-control\">\n" +
      "\n" +
      "        <div class=\"helper-container\">\n" +
      "            <div class=\"line\">\n" +
      "                 <div class=\"input-group\">" +
      "                      <input placeholder=\"Search...\" type=\"text\" ng-model=\"filterKeyword\" ng-click=\"onFilterClicked($event)\"\n" +
      "                       class=\"form-control\">\n" +
      " <span class=\"clear-button\" ng-click=\"clearFilter($event)\" ng-style=\"clearSearchIconStyle\"><span class=\"item-close\"></span></span>\n" +
      "                      <span class=\"input-group-addon\">" +
      "                     <i class=\"glyphicon glyphicon-search\"></i>" +
      "                      </span>" +
     "                      <span class=\"input-group-addon\" ng-if=\"extraButtons\" style=\"cursor: pointer;\" ng-click=\"onSelectAll(inputModel,$event)\">" +
      "                     <i class=\"glyphicon glyphicon-ok\"></i> Select All" +
      "                      </span>" +
	       "                      <span class=\"input-group-addon\" ng-if=\"extraButtons\" style=\"cursor: pointer;\" ng-click=\"onClearAll(inputModel,$event)\">" +
      "                     <i class=\"glyphicon glyphicon-remove\"></i> Clear All" +
      "                      </span>" +
      "                  </div>" +           
      "            </div>\n" +
      "        </div>\n" +
      "    <div class=\"tree-view\">\n" +
      "        <ul class=\"tree-container\">\n" +
      "            <tree-item class=\"top-level\" ng-repeat=\"item in inputModel\" item=\"item\" ng-show=\"!item.isFiltered\"\n" +
      "                       use-callback=\"useCallback\" can-select-item=\"canSelectItem\"\n" +
      "                       multi-select=\"multiSelect\" item-selected=\"itemSelected(item)\"\n" +
      "                       on-active-item=\"onActiveItem(item)\" select-only-leafs=\"selectOnlyLeafs\"></tree-item>\n" +
      "        </ul>\n" +
      "    </div>\n" +
      "</div>\n"
    );


    $templateCache.put('src/tree-item.tpl.html',
      "<li>\n" +
      "    <div class=\"item-container\" ng-class=\"{active: item.isActive, selected: item.selected}\"\n" +
      "         ng-click=\"clickSelectItem(item, $event)\" ng-mouseover=\"onMouseOver(item, $event)\">\n" +
      "        <span ng-if=\"showExpand(item)\" class=\"expand\" ng-class=\"{'expand-opened': item.isExpanded}\"\n" +
      "              ng-click=\"onExpandClicked(item, $event)\"></span>\n" +
      "\n" +
      "        <div class=\"item-details\"><input class=\"tree-checkbox\" type=\"checkbox\" ng-if=\"showCheckbox()\"\n" +
      "                                         ng-checked=\"item.selected\"/>{{item.name}}\n" +
      "        </div>\n" +
      "    </div>\n" +
      "    <ul ng-repeat=\"child in item.children\" ng-if=\"item.isExpanded\">\n" +
      "        <tree-item item=\"child\" item-selected=\"subItemSelected(item)\" ng-show=\"!child.isFiltered\" use-callback=\"useCallback\"\n" +
      "                   can-select-item=\"canSelectItem\" multi-select=\"multiSelect\"\n" +
      "                   on-active-item=\"activeSubItem(item, $event)\"></tree-item>\n" +
      "    </ul>\n" +
      "</li>\n"
    );

}]);
