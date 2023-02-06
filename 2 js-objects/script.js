const friend = {
    name: 'Laura Maria',
    age: 40,
    gender: 'female',
    location: {
        city: 'Toronto',
        country: 'Canada',
        adress:'100 Main St'
    }
}

//console.log(friend.location.country)

const friend1 = {
    name: 'Julia'
}

const friend2 = {
    name: 'Ana'
}
const friend3 = {
    name: 'Maria'
}

const friendList = [friend1, friend2, friend3]
//console.log(friendList);
/*
console.log(friendList[2].name);
console.log(friendList[x].name)   

for(x in friendList) {
} */
/* ARRAY DE OBJETOS */        /* SUPER COOL */

const friendList2 = ['Carla', 'Raquel','Julia','Rui','Maria']
const newArray = []
const newArray2 = []

for(x = 0; x < friendList2.length;x++) {
    newArray.push(friendList2[x])
}

/*OU ASSIM PARA OBJETOS*/

friendList2.forEach(item => {
    let temp = {
        name: item
    }
newArray2.push(temp)
})

//console.log(newArray2);

/* iTERATE oBJECT cONTENTS */

for(const key in friend) {
    //console.log(friend[key] + ' Esse');
}

/* console.log(Object.entries(friend));

for(const [key,value] of Object.entries(friendList)) {
    console.log(key + ' ' + Object.entries(value));
} */

/*ADD LAST NAME KEY AS SMITH VALUE IN EACH ELEMENT FROM THE FRIENDLIST ARRAY */

for(const [key, value] of Object.entries(friendList)) {
    friendList[key].lastName = 'Smith'
}
    

//console.log(friendList);

//console.log(JSON.stringify(friendList)); 

const str = '[{"name":"Julia","lastName":"Smith"},{"name":"Ana","lastName":"Smith"},{"name":"Maria","lastName":"Smith"}]'

const friends3 = JSON.parse(str)

/* for(const key of Object.entries(friends3)) {
    friends3[key].age = 35
} */

//console.log(friends3);

friends3.forEach((key, value) => {
    key.age = 38
})

friends3.push({
    "name": "Mike",
    "lastName": "Jonas",
    "age": 55
})

console.log(friends3);