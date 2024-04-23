// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];


// const tweets = [
//   {id:'000', likes:5,tags:['js','nodejs']},
//   {id:'001', likes:2,tags:['html','css']},
//   {id:'000', likes:5,tags:['html','js','nodejs']},
//   {id:'000', likes:5,tags:['css','react']},
//   {id:'000', likes:5,tags:['js','nodejs','react']},
// ]
// const allTags = tweets.reduce( (tweet, tag) => [...tweet,...tag.tags],[] )
//
// console.log(allTags)
//
//
// //variant 1
// const tagsStats = allTags.reduce( (acc,tag) => {
//
//   !acc.hasOwnProperty(tag)?acc[tag]=1:acc[tag]+=1
// return acc
// },{})
//
// //variant 2
// // const tagsStats = allTags.reduce( (acc,tag) => {
// //
// //   return {
// //     ...acc,[tag]:acc[tag]? acc[tag] +1:1
// //   }
// // },{})
//
//
const getSortedFriends = users => users.flatMap(({friends}) => friends).filter((name,index,array) => array.indexOf(name)===index).sort()

console.log(getSortedFriends([ { name: 'Moore Hensley', email: 'moorehensley@indexia.com', eyeColor: 'blue', friends: ['Sharron Pace'], isActive: false, balance: 2811, gender: 'male' }, { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com', eyeColor: 'blue', friends: ['Briana Decker', 'Sharron Pace'], isActive: true, balance: 3821, gender: 'female' }, { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com', eyeColor: 'green', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'], isActive: false, balance: 3793, gender: 'male' }, { name: 'Elma Head', email: 'elmahead@omatom.com', eyeColor: 'green', friends: ['Goldie Gentry', 'Aisha Tran'], isActive: true, balance: 2278, gender: 'female' }, { name: 'Carey Barr', email: 'careybarr@nurali.com', eyeColor: 'blue', friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'], isActive: true, balance: 3951, gender: 'male' }, { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com', eyeColor: 'brown', friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'], isActive: false, balance: 1498, gender: 'male' }, { name: 'Sheree Anthony', email: 'shereeanthony@kog.com', eyeColor: 'brown', friends: ['Goldie Gentry', 'Briana Decker'], isActive: true, balance: 2764, gender: 'female' } ]))
const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).reduce((acc,user) => acc+=user.balance,0)



console.log(getTotalBalanceByGender([ { name: 'Moore Hensley', email: 'moorehensley@indexia.com', eyeColor: 'blue', friends: ['Sharron Pace'], isActive: false, balance: 2811, gender: 'male' }, { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com', eyeColor: 'blue', friends: ['Briana Decker', 'Sharron Pace'], isActive: true, balance: 3821, gender: 'female' }, { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com', eyeColor: 'green', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'], isActive: false, balance: 3793, gender: 'male' }, { name: 'Elma Head', email: 'elmahead@omatom.com', eyeColor: 'green', friends: ['Goldie Gentry', 'Aisha Tran'], isActive: true, balance: 2278, gender: 'female' }, { name: 'Carey Barr', email: 'careybarr@nurali.com', eyeColor: 'blue', friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'], isActive: true, balance: 3951, gender: 'male' }, { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com', eyeColor: 'brown', friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'], isActive: false, balance: 1498, gender: 'male' }, { name: 'Sheree Anthony', email: 'shereeanthony@kog.com', eyeColor: 'brown', friends: ['Goldie Gentry', 'Briana Decker'], isActive: true, balance: 2764, gender: 'female' } ],'male'))
