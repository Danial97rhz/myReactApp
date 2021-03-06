"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_documenteditor_1 = require("@syncfusion/ej2-react-documenteditor");
var title_bar_1 = require("./title-bar");
var tool_bar_1 = require("./tool-bar");
var status_bar_1 = require("./status-bar");
var text_properties_pane_1 = require("./text-properties-pane");
var table_properties_pane_1 = require("./table-properties-pane");
var image_properties_pane_1 = require("./image-properties-pane");
var document_loader_1 = require("./document-loader");
var header_footer_pane_1 = require("./header-footer-pane");
var table_of_contents_pane_1 = require("./table-of-contents-pane");
var properties_pane_1 = require("./properties-pane");
var template_loader_1 = require("./template-loader");
require("./default.component.css");
ej2_react_documenteditor_1.DocumentEditorComponent.Inject(ej2_react_documenteditor_1.Print, ej2_react_documenteditor_1.SfdtExport, ej2_react_documenteditor_1.WordExport, ej2_react_documenteditor_1.TextExport, ej2_react_documenteditor_1.Selection, ej2_react_documenteditor_1.Search, ej2_react_documenteditor_1.Editor, ej2_react_documenteditor_1.ImageResizer, ej2_react_documenteditor_1.EditorHistory, ej2_react_documenteditor_1.ContextMenu, ej2_react_documenteditor_1.OptionsPane, ej2_react_documenteditor_1.HyperlinkDialog, ej2_react_documenteditor_1.TableDialog, ej2_react_documenteditor_1.BookmarkDialog, ej2_react_documenteditor_1.TableOfContentsDialog, ej2_react_documenteditor_1.PageSetupDialog, ej2_react_documenteditor_1.StyleDialog, ej2_react_documenteditor_1.ListDialog, ej2_react_documenteditor_1.ParagraphDialog, ej2_react_documenteditor_1.BulletsAndNumberingDialog, ej2_react_documenteditor_1.FontDialog, ej2_react_documenteditor_1.TablePropertiesDialog, ej2_react_documenteditor_1.BordersAndShadingDialog, ej2_react_documenteditor_1.TableOptionsDialog, ej2_react_documenteditor_1.CellOptionsDialog, ej2_react_documenteditor_1.StylesDialog);
// tslint:disable:max-line-length
var TableOfContentsView = (function (_super) {
    __extends(TableOfContentsView, _super);
    function TableOfContentsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newTabClick = function () {
            document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'document-editor/table-of-contents/index.html#fabric');
        };
        _this.applyPageCountAndDocumentTitle = function () {
            //Sets Document name.
            _this.titleBar.updateDocumentTitle();
            _this.statusBar.updatePageCount();
        };
        _this.updateContainerSize = function () {
            var titleBarDiv = document.getElementById('documenteditor_titlebar');
            var statusBarDiv = document.getElementById('documenteditor_statusbar');
            var toolBarDiv = document.getElementById('documenteditor_toolbar');
            if (_this.containerPanel && titleBarDiv && statusBarDiv && toolBarDiv) {
                _this.containerPanel.style.height = (window.innerHeight -
                    (titleBarDiv.offsetHeight + toolBarDiv.offsetHeight + statusBarDiv.offsetHeight)) + 'px';
            }
        };
        _this.showPropertiesPaneOnInitial = function () {
            _this.toolbar.showPropertiesPaneOnSelection();
        };
        _this.onSelectionChange = function () {
            if (_this.documenteditor.selection) {
                _this.statusBar.startPage = _this.documenteditor.selection.startPage;
                _this.statusBar.updatePageNumber();
                _this.toolbar.showPropertiesPaneOnSelection();
            }
        };
        _this.onLoadDefault = function () {
            // tslint:disable
            var defaultDocument = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Title" }, "inlines": [{ "text": "ASP.NET Core Succinctly" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "fontSize": 16.0, "fontColor": "#4472C4FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Table of Contents", "characterFormat": { "fontSize": 16.0, "fontColor": "#4472C4FF" } }] }, { "paragraphFormat": { "styleName": "TOC 1", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": " TOC \\o \"1-3\" \\h \\z " }, { "fieldType": 2 }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388455\"" }, { "fieldType": 2 }, { "text": "Chapter 1 Introduction to ASP.NET Core", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388455 \\h " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 1", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388456\"" }, { "fieldType": 2 }, { "text": "Chapter 2 What are .NET Core and ASP.NET Core?", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388456 \\h " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 2", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388457\"" }, { "fieldType": 2 }, { "text": ".NET Core", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388457 \\h " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 2", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388458\"" }, { "fieldType": 2 }, { "text": "ASP.NET Core", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388458 \\h " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 1", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388459\"" }, { "fieldType": 2 }, { "text": "Chapter 3 Getting Started with .NET Core", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388459 \\h " }, { "fieldType": 2 }, { "text": "2" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 2", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388460\"" }, { "fieldType": 2 }, { "text": "Installing .NET Core on Windows", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388460 \\h " }, { "fieldType": 2 }, { "text": "2" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 2", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388461\"" }, { "fieldType": 2 }, { "text": "Installing .NET Core on a Mac (or Linux)", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388461 \\h " }, { "fieldType": 2 }, { "text": "2" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 1", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388462\"" }, { "fieldType": 2 }, { "text": "A Look at the Future", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388462 \\h " }, { "fieldType": 2 }, { "text": "2" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "fieldType": 1 }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "name": "_Toc523387945", "bookmarkType": 0 }, { "name": "_Toc523388455", "bookmarkType": 0 }, { "text": "Chapter 1 Introduction to ASP.NET Core" }, { "name": "_Toc523387945", "bookmarkType": 1 }, { "name": "_Toc523388455", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "ASP.NET Core is the web development framework that comes together with the new .NET Core and, besides all the new features, also adopts a significantly new approach to web development. The first chapter starts by going through the history of Microsoft's web stack to show the motivations that led to this framework. Later, it moves to more practical matters, like showing you how to get started with .NET Core and describing the foundations of the framework." }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "name": "_Toc523387946", "bookmarkType": 0 }, { "name": "_Toc523388456", "bookmarkType": 0 }, { "text": "Chapter 2 What are .NET Core and ASP.NET Core?" }, { "name": "_Toc523387946", "bookmarkType": 1 }, { "name": "_Toc523388456", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Before trying to understand the reason for its existence, let's first try to define what .NET Core and ASP.NET Core are." }] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "name": "_Toc523387947", "bookmarkType": 0 }, { "name": "_Toc523388457", "bookmarkType": 0 }, { "text": ".NET Core" }, { "name": "_Toc523387947", "bookmarkType": 1 }, { "name": "_Toc523388457", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "The framework .NET Core 1.1 a is modular, cross-platform, cloud-optimized version of the .NET Framework, consisting of the CoreCLR and the implementation of the .NET Standard Library 1.6. One of the main features of this library is the ability to install only the features that are needed for the application you are building, reducing its footprint and the possibility of installing the library itself within the application. This makes it possible for applications built with different versions to co-exist on the same machine without the compatibility problems typical of the full .NET Framework." }] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "name": "_Toc523387948", "bookmarkType": 0 }, { "name": "_Toc523388458", "bookmarkType": 0 }, { "text": "ASP.NET Core" }, { "name": "_Toc523387948", "bookmarkType": 1 }, { "name": "_Toc523388458", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "ASP.NET Core is a complete rewrite of ASP.NET, built with the goal of being cross-platform, completely open-source, and without the limitations of backward compatibility. Like .NET Core, ASP.NET Core is also built with a modular approach. This means the application you build can include only the needed features without taking on additional burdens. This is made possible by the new startup and execution environment, based on the Open Web Interface for .NET (OWIN) standard. In addition, ASP.NET Core comes with many interesting features that we are going to see throughout the book, like an integrated " }, { "text": "dependency injection system and a new application framework that unifies the programming models of ASP.NET MVC and Web API." }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "name": "_Toc523387949", "bookmarkType": 0 }, { "name": "_Toc523388459", "bookmarkType": 0 }, { "text": "Chapter 3 " }, { "text": "Getting Started with .NET Core" }, { "name": "_Toc523387949", "bookmarkType": 1 }, { "name": "_Toc523388459", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Now that it is clear what ASP.NET Core and .NET Core are, and why they were created, it's time to look at how to install them and how to build a simple application with them." }] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "name": "_Toc523387950", "bookmarkType": 0 }, { "name": "_Toc523388460", "bookmarkType": 0 }, { "text": "Installing .NET Core on Windows" }, { "name": "_Toc523387950", "bookmarkType": 1 }, { "name": "_Toc523388460", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Installing on Windows is pretty easy. With Visual Studio 2017, chances are you already installed it. If not, go back to the Visual Studio Installer and make sure you have the .NET Core workload selected." }] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "name": "_Toc523387951", "bookmarkType": 0 }, { "name": "_Toc523388461", "bookmarkType": 0 }, { "text": "Installing .NET Core on a Mac (or Linux)" }, { "name": "_Toc523387951", "bookmarkType": 1 }, { "name": "_Toc523388461", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "The beauty of .NET Core is that it can also be installed on a Mac (or Linux, for that matter) without relying on third-party frameworks, as was needed before with Mono." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Each distribution of Linux has its own individual way of installing, but in the end, the process boils down to the same principles:" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Install prerequisites and configure the package manager of your distribution." }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Invoke the package manager to download and install .NET Core and its tools." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "You can read instructions specific to your distribution on the official .NET Core website. As an example, we???ll show you how to install on a Mac." }] }, { "characterFormat": { "italic": true }, "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Code Listing 3-1", "characterFormat": { "italic": true } }] }, { "rows": [{ "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": ">brew update" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": ">brew install openssl" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": ">ln -s /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib /usr/local/lib/" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": ">ln -s /usr/local/opt/openssl/lib/libssl.1.0.0.dylib /usr/local/lib/" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 467.5, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }] }], "title": null, "description": null, "tableFormat": { "allowAutoFit": true, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidthType": "Auto", "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Once all these prerequisites have been installed, you can download and install the official SDK for macOS by downloading it from the " }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \"https://www.microsoft.com/net/core\" " }, { "fieldType": 2 }, { "text": "official .NET Core website", "characterFormat": { "styleName": "Hyperlink" } }, { "fieldType": 1 }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "On Linux and Mac, you do not have Visual Studio to develop apps, but you can use the .NET Core SDK or Visual Studio Code, which is a lightweight, extensible, cross-platform text editor built by Microsoft and the community. The last chapter of this book covers in detail each of the tools with which you can build .NET Core apps." }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "name": "_Toc523387952", "bookmarkType": 0 }, { "name": "_Toc523388462", "bookmarkType": 0 }, { "text": "A Look at the Future" }, { "name": "_Toc523387952", "bookmarkType": 1 }, { "name": "_Toc523388462", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "The release of .NET Core has been a very difficult one, with many delays and changes in direction. While the framework is stable, with .NET Core 1.1 released in November 2016, the tooling is still in development." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "When we wrote this book, we relied on previews that were made available at the Connect(); event of November 2016, so some of the screenshots or procedures in the examples might be different from what is currently available." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "What can we expect for the future of .NET Core?" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "First, unlike previous frameworks, we have to expect a continuous release of enhanced tools, both for the CLI and for the tooling inside Visual Studio. Second, on the framework side, there will be the second big release of .NET Core 2.0, implementing .NET Standard 2.0." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "But rest assured that Microsoft sees .NET Core as the future of .NET for the next 10 years, so this is the right time to jump in and start learning this new technology." }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "lists": [{ "listId": 0, "abstractListId": 0 }], "abstractLists": [{ "abstractListId": 0, "levels": [{ "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "???", "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 36.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "o", "characterFormat": { "fontFamily": "Courier New" }, "paragraphFormat": { "leftIndent": 72.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "???", "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 108.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "???", "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 144.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "o", "characterFormat": { "fontFamily": "Courier New" }, "paragraphFormat": { "leftIndent": 180.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "???", "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 216.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "???", "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 252.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "o", "characterFormat": { "fontFamily": "Courier New" }, "paragraphFormat": { "leftIndent": 288.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "???", "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 324.0, "firstLineIndent": -18.0 } }] }], "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Paragraph", "name": "Heading 2", "basedOn": "Normal", "next": "Normal", "link": "Heading 2 Char", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level2" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "Heading 2 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Paragraph", "name": "List Paragraph", "basedOn": "Normal", "next": "List Paragraph", "paragraphFormat": { "leftIndent": 36.0 } }, { "type": "Character", "name": "Hyperlink", "basedOn": "Default Paragraph Font", "characterFormat": { "underline": "Single", "fontColor": "#0563C1FF" } }, { "type": "Character", "name": "Unresolved Mention", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } }, { "type": "Paragraph", "name": "Title", "basedOn": "Normal", "next": "Normal", "link": "Title Char", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Title Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" } }, { "type": "Paragraph", "name": "TOC Heading", "basedOn": "Heading 1", "next": "Normal", "paragraphFormat": { "outlineLevel": "BodyText" } }, { "type": "Paragraph", "name": "TOC 1", "basedOn": "Normal", "next": "Normal", "paragraphFormat": { "afterSpacing": 5.0 } }, { "type": "Paragraph", "name": "TOC 2", "basedOn": "Normal", "next": "Normal", "paragraphFormat": { "leftIndent": 11.0, "afterSpacing": 5.0 } }] };
            // tslint:enable        
            var waitingPopUp = document.getElementById('waiting-popup');
            var popupOverlay = document.getElementById('popup-overlay');
            waitingPopUp.style.display = 'block';
            _this.documenteditor.open(JSON.stringify(defaultDocument));
            _this.documenteditor.documentName = 'Table of Contents';
            waitingPopUp.style.display = 'none';
            popupOverlay.style.display = 'none';
            _this.documenteditor.focusIn();
            _this.fontProperties.updateStyles();
        };
        _this.onWindowResize = function () {
            _this.updateContainerSize();
        };
        return _this;
    }
    TableOfContentsView.prototype.rendereComplete = function () {
        var _this = this;
        this.containerPanel = document.getElementById('documenteditor_container_body');
        this.updateContainerSize();
        this.documenteditor.pageOutline = '#E0E0E0';
        this.documenteditor.acceptTab = true;
        this.documenteditor.resize();
        var tocProperties = new table_of_contents_pane_1.TocProperties(this.documenteditor);
        var headerFooter = new header_footer_pane_1.HeaderFooterProperties(this.documenteditor);
        this.fontProperties = new text_properties_pane_1.TextProperties(this.documenteditor, 'textProperty');
        var imageProperties = new image_properties_pane_1.ImageProperties(this.documenteditor);
        var tableProperties = new table_properties_pane_1.TableProperties(this.documenteditor, imageProperties, this.fontProperties);
        // tslint:disable-next-line:max-line-length
        var propertiesPane = new properties_pane_1.PropertiesPane(this.documenteditor, this.fontProperties, tableProperties, headerFooter, imageProperties, tocProperties);
        //Initializes document editor toolbar and events.
        // tslint:disable-next-line:max-line-length
        this.toolbar = new tool_bar_1.ToolBar(this.documenteditor, document.getElementById('documenteditor_toolbar'), propertiesPane);
        this.toolbar.documentLoader = new document_loader_1.DocumentLoader(this.documenteditor);
        this.toolbar.templateLoader = new template_loader_1.TemplateLoader();
        if (!this.toolbar.isReadOnly) {
            this.toolbar.updateUndoRedoBtn();
        }
        this.titleBar = new title_bar_1.TitleBar(document.getElementById('documenteditor_titlebar'), this.documenteditor, true);
        this.statusBar = new status_bar_1.StatusBar(document.getElementById('documenteditor_statusbar'), this.documenteditor);
        this.onLoadDefault();
        this.documenteditor.selectionChange = function () {
            setTimeout(function () { _this.onSelectionChange(); }, 20);
        };
        this.documenteditor.documentChange = function () {
            _this.toolbar.updateUndoRedoBtn();
            _this.toolbar.isContentChange = false;
            _this.applyPageCountAndDocumentTitle();
            _this.fontProperties.updateStyles();
        };
        this.documenteditor.contentChange = function () {
            _this.toolbar.isContentChange = true;
            if (!_this.toolbar.isReadOnly) {
                _this.toolbar.updateUndoRedoBtn();
            }
            //Set page count
            _this.statusBar.updatePageCount();
        };
        window.addEventListener('resize', function () { _this.onWindowResize(); });
        if (!this.toolbar.isReadOnly) {
            this.toolbar.updateUndoRedoBtn();
        }
        this.updateContainerSize();
        this.documenteditor.resize();
        this.applyPageCountAndDocumentTitle();
        this.showPropertiesPaneOnInitial();
        this.documenteditor.requestNavigate = function (args) {
            if (args.linkType !== 'Bookmark') {
                var link = args.navigationLink;
                if (args.localReference.length > 0) {
                    link += '#' + args.localReference;
                }
                window.open(link);
                args.isHandled = true;
            }
        };
        this.documenteditor.zoomFactorChange = function () {
            _this.statusBar.updateZoomContent();
        };
        this.documenteditor.viewChange = function (e) {
            _this.statusBar.updatePageNumberOnViewChange(e);
        };
    };
    TableOfContentsView.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "col-lg-12 col-sm-12 col-md-12 center" }, "Click the button to view the sample"),
                React.createElement("div", { className: "col-lg-12 col-sm-12 col-md-12 center" },
                    React.createElement("a", { className: "e-btn", id: "newTab", onClick: this.newTabClick.bind(this), target: "_blank" }, "Open in new tab")),
                React.createElement("div", { id: "wrapper" },
                    React.createElement("title", null, "Essential JS 2 for React - DocumentEditor"),
                    React.createElement("div", { id: "panel" },
                        React.createElement("div", { id: 'documenteditor_titlebar' }),
                        React.createElement("div", { id: 'documenteditor_toolbar' }),
                        React.createElement("div", { id: "documenteditor_container_body", style: { 'display': 'flex', 'position': 'relative' } },
                            React.createElement(ej2_react_documenteditor_1.DocumentEditorComponent, { id: "container", ref: function (scope) { _this.documenteditor = scope; }, style: { 'width': '100%', 'height': '100%' }, isReadOnly: false, enablePrint: true, enableSelection: true, enableEditor: true, enableEditorHistory: true, enableContextMenu: true, enableSearch: true, enableOptionsPane: true, enableBookmarkDialog: true, enableBordersAndShadingDialog: true, enableFontDialog: true, enableTableDialog: true, enableParagraphDialog: true, enableHyperlinkDialog: true, enableImageResizer: true, enableListDialog: true, enablePageSetupDialog: true, enableSfdtExport: true, enableStyleDialog: true, enableTableOfContentsDialog: true, enableTableOptionsDialog: true, enableTablePropertiesDialog: true, enableTextExport: true, enableWordExport: true })),
                        React.createElement("div", { id: "documenteditor_statusbar" })),
                    React.createElement("div", { className: "overlay", id: "popup-overlay", style: { display: 'block;' } }),
                    React.createElement("div", { id: 'waiting-popup' },
                        React.createElement("svg", { className: "circular", height: "40", width: "40" },
                            React.createElement("circle", { className: "circle-path", cx: "25", cy: "25", r: "20", fill: "none", "stroke-width": "6", "stroke-miterlimit": "10" }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This example demonstrates table of contents support in document editor. Many options are available for including table of contents such as hyperlink, page number, right-aligned tabs, and styles.")),
            React.createElement("div", { id: "description" },
                React.createElement("div", null,
                    React.createElement("p", null, "In this example, you can find table of content options in document editor."),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Include hyperlink: A link with bookmark reference to the content will be included."),
                        React.createElement("li", null, "Include page number: The page number of the content will be included."),
                        React.createElement("li", null, "Right-aligned tabs: The page number will be right-aligned to the content."),
                        React.createElement("li", null, "Heading levels: The range of heading levels to be included in the table can be customized."),
                        React.createElement("li", null, "Styles: The style for each level of the table can be customized.")),
                    React.createElement("p", { style: { 'display': 'block' } },
                        " More information about the document editor features can be found in this ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/document-editor/" }, "documentation section.")))),
            React.createElement("script", null, window.onbeforeunload = function () {
                return 'Want to save your changes?';
            })));
    };
    return TableOfContentsView;
}(sample_base_1.SampleBase));
exports.TableOfContentsView = TableOfContentsView;
