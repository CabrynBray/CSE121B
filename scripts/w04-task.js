/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Cabryn Bray",

    photo: "images/profile1.jpg",

    favoriteFoods: [
        "Pizza",
        "Burger",
        "Ice Cream"
    ],

    hobbies: [
        "Squash",
        "Baking",
        "Swiming"
    ],

    placesLived: [

    ],


};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: '30 Struben Ave, South Africa',
        length: '7 years'
    }
);

myProfile.placesLived.push(
    {
        place: '27 Lys Ave, South Africa',
        length: '11 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);

document.querySelector('#photo').setAttribute('alt', `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);

});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').append(li);

});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;

    let dl = document.getElementById('places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
});


