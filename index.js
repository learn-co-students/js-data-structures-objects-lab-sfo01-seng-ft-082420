// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
    let stig = Object.assign({}, driver)
    stig[key] = value
    return stig
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key, value) {
    let stig = Object.assign({}, driver)
    delete stig[key]
    return stig
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
    delete driver[key]
    return driver
}