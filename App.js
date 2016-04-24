Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {


        //Write app code here
		this.iterationCombobox = this.add({
			xtype: 'rallyiterationcombobox'
		});
		//API Docs: https://help.rallydev.com/apps/2.0/doc/

		Rally.data.ModelFactory.getModel({
		    type: 'Task',
		    success: function(model) {
		        console.log(model);
		    }
		});
    }
});
