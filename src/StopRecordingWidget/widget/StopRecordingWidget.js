define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

], function (declare, _WidgetBase) {
    "use strict";

    return declare("StopRecordingWidget.widget.StopRecordingWidget", [ _WidgetBase ], {

        // Parameter
        delayMicroseconds: 3000,

        // Internal variables.
        _handles: null,
        _contextObj: null,

        constructor: function () {
            this._handles = [];
        },

        postCreate: function () {
            logger.debug(this.id + ".postCreate");
        },

        update: function (obj, callback) {
            logger.debug(this.id + ".update");

            window.setTimeout(function() {
                document.title = "Stop recording...";
            }, this.delayMicroseconds);

            this._contextObj = obj;
            this._updateRendering(callback);
        },

        resize: function (box) {
            logger.debug(this.id + ".resize");
        },

        uninitialize: function () {
            logger.debug(this.id + ".uninitialize");
        },

        _updateRendering: function (callback) {
            logger.debug(this.id + "._updateRendering");
            this._executeCallback(callback, "_updateRendering");
        },

        // Shorthand for executing a callback, adds logging to your inspector
        _executeCallback: function (cb, from) {
            logger.debug(this.id + "._executeCallback" + (from ? " from " + from : ""));
            if (cb && typeof cb === "function") {
                cb();
            }
        }
    });
});

require(["StopRecordingWidget/widget/StopRecordingWidget"]);
