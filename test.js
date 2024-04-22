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
// console.log(tagsStats)

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  let a = []
   numbers.forEach( num => {
     !(num%2)?a.push(num+value):a.push(num)

  })
  return a
  // Пиши код выше этой строки
}


console.log(changeEven([1, 2, 3, 4, 5], 10))