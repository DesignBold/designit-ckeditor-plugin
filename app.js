import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import Designit from './designit';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Paragraph, Designit ],
        toolbar: [ 'Designit' ]
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );