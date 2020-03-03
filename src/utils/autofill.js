export const autofill = (fields, cb) => {
    let autofillError = false;
    Object.entries(fields).forEach(([key, value]) => {
        let querySelector = `input[name=\"${key}\"]`;
        console.log(querySelector)
        chrome.tabs.executeScript(null, {
            code: `var element = document.querySelectorAll(\'${querySelector}\');
                if(element && element.length > 0) element[0].value = \"${value()}\";`
        }, (result) => {
            if(!result) { autofillError = true; }
        });
    })

    if(!autofillError) { cb(); }
}
