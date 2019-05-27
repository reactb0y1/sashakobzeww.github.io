// Step 1: Scan for a device with 0xffe5 service
navigator.bluetooth.requestDevice({
    filters: [{ services: ["cool1"] }]
})/*
    .then(function(device) {
        // Step 2: Connect to it
        return device.gatt.connect();
    })*/

console.log("-----", );