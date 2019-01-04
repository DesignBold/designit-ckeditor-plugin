# DesignBold intergration design button for CKeditor 5

DesignBold button design image on CKeditor 5, written completely by Javascript.

For more information, check out the [proposal repo](https://github.com/DesignBold/designit-ckeditor-plugin).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites.

In order to start developing CKEditor 5 you will require:

Node.js 6.9.0+
npm 4+ (note: some npm 5+ versions were known to cause problems, especially with deduplicating packages; upgrade npm when in doubt)

### Adding a plugin to a build

Adding plugins to existing builds is done through their customization. Editor builds are maintained in their respective GitHub repositories. Therefore, assuming that you want to customize the classic editor build you need to:

1 Clone the build repository.

2 Install the plugin package.

3 Add it to the build configuration.

4 Bundle the build.

### Installing

First, clone the build repository:

```
git clone -b stable https://github.com/DesignBold/designit-ckeditor-plugin.git
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

### Versioning

#### 1.0.5

- [X] Fix the problem when click button designit
- [X] Clean code

#### 1.1.0

- [X] Change process show designit tool from open new tab to show popup.
- [X] Add Feature show popular doctype
- [X] Add Feature show all doctype
- [X] Add Feature custome size
- [X] Clean code
- [X] Update readme.md

#### 1.1.1

- [X] Add feature download image
