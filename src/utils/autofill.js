export const autofill = (fields, cb) => {
    let autofillError = false;
    Object.entries(fields).forEach(([key, value]) => {
        let script;
        if(value === 'SELECT') {
            let querySelector = `select[name^="${key}"]`;
            console.log(querySelector)
            script = `var select = document.querySelectorAll(\'${querySelector}\');
            if(select && select.length > 0) {
                var items = select[0].getElementsByTagName('option');
                var index = Math.floor(Math.random() * items.length);
                console.log(typeof index);
                select[0].selectedIndex = index;
            }`
        } else {
            let querySelector = `input[name=\"${key}\"]`;
            script = `var element = document.querySelectorAll(\'${querySelector}\');
            if(element && element.length > 0) element[0].value = \"${value()}\";`
        }
        chrome.tabs.executeScript(null, {
            code: script
        }, (result) => {
            if(!result) { autofillError = true; }
        });
    })

    if(!autofillError) { cb(); }
}
