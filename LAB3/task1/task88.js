// function getSecondsToday() {
//     let now = new Date();
//
//     // create an object using the current day/month/year
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//
//     let diff = now - today; // ms difference
//     return Math.round(diff / 1000); // make seconds
// }
//
// alert( getSecondsToday() );

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert( getSecondsToday() );