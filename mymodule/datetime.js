function getCurrenTime(){
    const date = new Date()
    const datetime = date.toLocaleString()
    //const year = date.getFullYear()
    ///const month = String(date.getMonth() + 1).padStart(2, '0')
    //const day = String(date.getDate()).padStart(2, '0')
    //return `${year}-${month}-${day}`
    return datetime
}
module.exports.getCurrenTime = getCurrenTime
console.log(getCurrenTime())