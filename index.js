// Code your solution here

 function findMatching(drivers, name) {
    const foundDrivers = drivers.filter(element => element.toLowerCase() === name.toLowerCase())
    return foundDrivers
 }

 function fuzzyMatch(drivers, name) {
    const foundDrivers = drivers.filter(driver => driver.startsWith(name))
    return foundDrivers
 }

 function matchName(drivers, name) {
    const foundDrivers = drivers.filter(driver => driver.name === name)
    return foundDrivers
 }

