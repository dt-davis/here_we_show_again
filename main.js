let katabody = document.createElement('p')
let body = document.querySelector('body')
let br = document.createElement('br')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

body.append(katabody)
katabody.append('kata 1:')
for ( let counter = 1; counter <= 20; counter ++){
    katabody.append(' ' + counter.toString())
}
body.append(katabody)
katabody.append('kata 2:')
for ( let counter = 2; counter <= 20; counter += 2){
    katabody.append(' ' + counter.toString())
}
body.append(katabody)
katabody.append('kata 3:')
for ( let counter = 1; counter <= 20; counter += 2){
    katabody.append(' ' + counter.toString())
}
body.append(katabody)
katabody.append('kata 4:')
for ( let counter = 5; counter <= 100; counter += 5){
    katabody.append(' ' + counter.toString())
}
body.append(katabody)
katabody.append('kata 5:')
for ( let counter = 1; counter <= 10; counter ++){
    katabody.append(' ' + (counter*counter).toString())
}

body.append(katabody)
katabody.append('kata 6:')
for ( let counter = 20; counter > 0; counter --){
    katabody.append(' ' + counter.toString())
}

body.append(katabody)
katabody.append('kata 7:')
for ( let counter = 20; counter > 0; counter += -2){
    katabody.append(' ' + counter.toString())
}

body.append(katabody)
katabody.append('kata 8:')
for ( let counter = 19; counter > 0; counter += -2){
    katabody.append(' ' + counter.toString())
}

katabody.append('kata 9:')
for ( let counter = 100; counter > 0; counter += -5){
    katabody.append(' ' + counter.toString())
}

katabody.append('kata 10:')
for ( let counter = 10; counter > 0; counter += -1){
    katabody.append(' ' + (counter*counter).toString())
}
katabody.append('kata 11:')
for ( let counter = 0; counter < sampleArray.length; counter += 1){
    katabody.append(' ' + (sampleArray[counter]).toString())
}

katabody.append('kata 12:')
for ( let counter = 0; counter < sampleArray.length; counter += 1){
    if ((sampleArray[counter] % 2) === 0){
        katabody.append(' ' + (sampleArray[counter]).toString())
    }
}

katabody.append('kata 13:')
for ( let counter = 0; counter < sampleArray.length; counter += 1){
    if ((sampleArray[counter] % 2) != 0){
        katabody.append(' ' + (sampleArray[counter]).toString())
    }
}

katabody.append('kata 14:')
for ( let counter = 0; counter < sampleArray.length; counter += 1){
    katabody.append(' ' + (sampleArray[counter]*sampleArray[counter].toString()))
}

katabody.append('kata 15:')
let product = 0
for ( let counter = 1; counter <= 20; counter += 1){
   product += counter
}
katabody.append(' ' + product.toString())

katabody.append('kata 16:')
product = 0
for ( let counter = 0; counter < sampleArray.length; counter += 1){
   product += sampleArray[counter]
}
katabody.append(' ' + product.toString())

let search = 0

katabody.append('kata 17:')
search = sampleArray[0]
for ( let counter = 0; counter < sampleArray.length; counter += 1){
   if ( search > sampleArray[counter]){
       search = sampleArray[counter]
   }
}
katabody.append(' ' + search.toString())

katabody.append('kata 18:')
search = sampleArray[0]
for ( let counter = 0; counter < sampleArray.length; counter += 1){
   if ( search < sampleArray[counter]){
       search = sampleArray[counter]
   }
}
katabody.append(' ' + search.toString())



