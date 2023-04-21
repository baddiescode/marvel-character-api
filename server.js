const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 2020

app.use(cors())

const hero = {
    'iron man': {
        'superPower': "Powered Armor and Technology",
        'originUniverse': 'Long Island, New York',
        'alterEgo': 'Tony Stark'
    },
    'thor':{
        'superPower': "Worthy Warrior and Weaponry",
        'originUniverse': 'Asgard, the Realm Eternal',
        'alterEgo': 'Thor Odinson' 
    },
    'hulk':{
        'superPower': "Superhuman Strength, Size and Shape Alteration, Genius Intelligence",
        'originUniverse': 'Dayton, Ohio',
        'alterEgo': 'Bruce Banner' 
    },
    'captain america':{
        'superPower': "Enhanced Strength, Speed, Accelerated Healing",
        'originUniverse': 'Brooklyn, New York',
        'alterEgo': 'Steve Rogers' 
    },
    'black widow':{
        'superPower': "Master in the Covert Arts of Espionage, Infiltration, and Subterfuge",
        'originUniverse': 'Soviet Union',
        'alterEgo': 'Natasha Romandva' 
    },
    'hawkeye':{
        'superPower': "Bow and Arrow",
        'originUniverse': 'Waverly, Iowa',
        'alterEgo': 'Clint Barton' 
    },
    'vision':{
        'superPower': "Artificial Intelligence",
        'originUniverse': 'Brooklyn, New York',
        'alterEgo': 'No other known alias' 
    },
    'dr. strange':{
        'superPower': "Magic",
        'originUniverse': 'Philadelphia, Pennsylvania',
        'alterEgo': 'Stephen Strange' 
    },
    'black panther':{
        'superPower': "Vibranium Suit",
        'originUniverse': 'Wakanda',
        'alterEgo': "T'Challa"
    },
    'ant-man':{
        'superPower': "Ability to change size at will",
        'originUniverse': 'Coral Gables, Florida',
        'alterEgo': 'Scott Lang' 
    },
    'spider-man':{
        'superPower': "Wall-climbing on the surfaces and ceilings, Precognitive spider-sense",
        'originUniverse': 'Queens, New York',
        'alterEgo': 'Peter Parker' 
    },
    'unknown':{
        'superPower': "unknown",
        'originUniverse': 'unknown',
        'alterEgo': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

// query parameter
// localhost:2020/api/:name
app.get('/api/:name',(request,response)=>{
    const heroName = request.params.name.toLowerCase()

    if( hero[heroName] ){
        response.json(hero[heroName])
    }else{
        response.json(hero['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
