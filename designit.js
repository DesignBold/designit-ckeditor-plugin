import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import IframeView from '@ckeditor/ckeditor5-ui/src/iframe/iframeview';
import './button.js';
import designitCss from './css/main.css';

import imageIcon from './logo_b.svg';

const Designit = 'Designit';

export default class DesignitPlugin extends Plugin {
    init(){
        const editor = this.editor;
        const t = editor.t;

        // Add button to feature components.
        editor.ui.componentFactory.add( Designit , locale => {
            const view = new ButtonView( locale );
            const iframe_view = new IframeView( locale );

            view.set( {
                label: t('Open design tool'),
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                DBSDK.startOverlay();
            } );
            return view;
        })
    }
}