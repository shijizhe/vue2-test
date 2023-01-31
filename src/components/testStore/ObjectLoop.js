let obj = {
    name: 'zhangsan',
    age: 18,
    sex: 'male',
    child:{
        namec: 'zhangsan',
        agec: 18,
        sexc: 'male',
    }
}
for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
