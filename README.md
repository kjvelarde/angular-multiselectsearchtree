angular-multi-select-tree
=============================

A native Angular multi select tree. No JQuery.
![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=<badge_key>)
#### Demo Page:

[Demo] (http://htmlpreview.github.io/?https://github.com/kjvelarde/angular-multiselectsearchtree/blob/master/demo/index.html)

#### Features:
Very Easy to Use:
- Plug and Play component
- Tree List
- Databind
- Filter/NoFilter by search textbox
- Checkbox
- Select one only or Multiselect
- NO JQuery

#### Design details: 
Custom element using Angular Directive and Templating

#### Callbacks: 
This is your onchange :)

##### Usage:
Get this awesome component to your project by:

```sh
bower install kjvelarde-angular-multiselectsearchtree --save

# bower install long name ehhfsaduasdu lol . just kidding use the first one :)
```

Make sure to load the scripts in your html.

```html
<link rel="stylesheet" href="../dist/kjvelarde-multiselect-searchtree.min.css">
<script type="text/javascript" src="../dist/angular-multi-select-tree.min.js"></script>
<script type="text/javascript" src="../dist/angular-multi-select-tree.tpl.js"></script>

```

And Inject the module as dependency to your angular app.

```
angular.module('[YOURAPPNAMEHERE!]', ['multiselect-searchtree', '....']);
```

###### Html Structure:

```html
<multiselect-searchtree
    multi-select="true"
    data-input-model="data" 
    data-output-model="selectedItem2"
    data-callback="CustomCallback(item, selectedItems)"
    data-select-only-leafs="true">
</multiselect-searchtree>											
```

That's what all you have to do.

##### License

MIT, see [LICENSE.md](./LICENSE.md).

