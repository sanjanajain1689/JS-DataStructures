function randomDate() {
    let startDate = new Date("1992-01-01");
    let endDate = new Date("1993-12-31");
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
}

let birthMonthMap = new Map();

for(var i = 0; i < 50; i++) {
    
    let birthday = randomDate();
    let username = "user" + i;
    let month = birthday.getMonth() + 1;

    if(!birthMonthMap.has(month)) {
        let users = [username];
        birthMonthMap.set(month, users);
    }
    else {
        let users = birthMonthMap.get(month);
        users.push(username);
        birthMonthMap.set(month, users);
    }
}

for(let [key, value] of birthMonthMap)
    console.log("Month: " + key + ", Users: " + value.join(", "));