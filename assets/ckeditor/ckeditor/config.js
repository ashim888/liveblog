/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.enterMode = 2; // pressing the ENTER KEY input <br/>
//    config.enterMode = CKEDITOR.ENTER_BR; //pressing the SHIFT + ENTER KEYS input <p>
    config.autoParagraph = false; // stops automatic insertion of <p> on focus
    config.shiftEnterMode = CKEDITOR.ENTER_P;
//    CKEDITOR.config.autoParagraph = false;
};
