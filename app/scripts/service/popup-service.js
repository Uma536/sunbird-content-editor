EkstepEditor.popupService = new(EkstepEditor.iService.extend({
    $uibModal: undefined,
    initService: function(instance) {
        this.$uibModal = instance;
    },
    open: function(options, callback) {
        if (options && options.template) {
            var popuptemplateHolder = "<script type=\"text\/ng-template\" id=\"popuptemplate\">" + options.template + "<\/script>";
            EkstepEditor.jQuery('#popuptemplate').remove();
            EkstepEditor.jQuery('#editorContainer').append(popuptemplateHolder);
            this.$uibModal.open(options).rendered.then(function() {
                EkstepEditorAPI.dispatchEvent('popupservice:fire', callback);
            });
        }
    }
}));
