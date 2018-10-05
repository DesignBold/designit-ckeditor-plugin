import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import IframeView from '@ckeditor/ckeditor5-ui/src/iframe/iframeview';
import './button.js';

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg'

const Designit = 'Designit';

var startDesignTool = function(image_src, param){
    if (typeof param != "object"){
        var doc_type = "blog-graphic";
    }
    else{
        var doc_type = param.doc_type
    }
    var status = 1;
    if (image_src == ""){
        // status = 0;
        // var designit_uri = DBSDK.COLLECTION_LIST + doc_type;
        status = 1;
        var designit_uri = DBSDK.buildButtonUri(image_src,doc_type,null,null,null,null,"button");
    }
    else{
        status = 1;
        var designit_uri = DBSDK.buildButtonUri(image_src,doc_type,null,null,null,null,"button");
    }
    window.DBSDK.uuid = DBSDK.guid();
    if (status){
        DBSDK.startDesignToolExtension(designit_uri,window.DBSDK.uuid);
    }
    else{
        window.open(designit_uri,'_blank');
    }
};

export default class SampleView extends Plugin {
    init(){
        const editor = this.editor;
		const t = editor.t;

		// Add button to feature components.
        editor.ui.componentFactory.add( Designit , locale => {
            const view = new ButtonView( locale );
            const iframe_view = new IframeView( locale );

            view.set( {
                label: t('Open dialog'),
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
            	let image_src = "";
            	let param = {
            		doc_type : "blog-graphic"
            	};
            	
            	startDesignTool(image_src, param);
            } );
            return view;
        })
    }
}