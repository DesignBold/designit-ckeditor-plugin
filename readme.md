# Designbold designit button intergration for CKeditor 5

Designit a button allow designing image on CKeditor 5, written completely in Javascript.

For more information, check out the [proposal repo](https://github.com/designboldgit/designit-ckeditor-plugin).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites.

Adding plugins to existing builds is done through their customization. Editor builds are maintained in their respective GitHub repositories. Therefore, assuming that you want to customize the classic editor build you need to:

1 Clone the build repository.

2 Install the plugin package.

3 Add it to the build configuration.

4 Bundle the build.

### Installing

First, clone the build repository:

```
git clone -b stable https://github.com/ckeditor/ckeditor5-build-classic.git
cd ckeditor5-build-classic
npm install
```

Second, install the plugin package:

```
npm i ckeditor-designit-plugin
```

Third, edit the src/ckeditor.js file to add your plugin to the list of plugins which will be included in the build and to add your feature’s button to the toolbar:

```
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
...

// Import my plugin
import Designit from 'ckeditor-designit-plugin/designit';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	...,
	Designit
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			...,
			'Designit'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
```

Finally, if everything worked, the editor build (which is available in the build/ directory) should be updated.

You can open the sample/index.html file in your browser to see whether the plugin was installed correctly.