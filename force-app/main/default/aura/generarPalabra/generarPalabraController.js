({
    generarPalabra : function(component, event, helper) {
        
        var action = component.get("c.getPalabra");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var palabraCorrecta = response.getReturnValue();
                console.log(palabraCorrecta);

                var appEvent = $A.get("e.c:eventos");
                appEvent.setParams({ "palabraCorrecta": palabraCorrecta });
                appEvent.fire("palabraCorrecta");
            }
        });
        $A.enqueueAction(action);
    }
})
