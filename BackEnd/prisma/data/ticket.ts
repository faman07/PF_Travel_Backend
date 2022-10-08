import { PrismaClient, Prisma, activityType } from '@prisma/client'
const prisma = new PrismaClient()

const company = Array.from(Array(16).keys())
const fligth = [101, 250, 125, 630, 562, 632, 588, 635, 214, 328, 653,895, 777]
const chair = Array.from(Array(200).keys())
const flyTickets: Number = 30


function randomFligth () {
    var rand = Math.floor(Math.random()*fligth.length)
    return fligth[rand]    
}

function randomChair () {
    var rand = Math.floor(Math.random()*chair.length)
    return chair[rand]  
}

function randomDate () {
    let day =  Math.floor((Math.random() * (30 - 1 + 1)) + 1);
    return (`${day}-11-2022`)
}

function randomCost () {
    return Math.floor((Math.random() * (150 - 250 + 1)) + 1);
}

function randomCompany () {
    var rand = Math.floor(Math.random()*company.length)
    return company[rand]
}


function ticketData () {
    return {
    fligthId:  String(randomFligth()),
    class:  '1',
    chair: String(randomChair()),
    date: randomDate(),
    cost:   randomCost(),
    company : {connect: {id: randomCompany()}} 
    }
}

async function main() {
    console.log(`Start Seeding...`)
    for (let i=0; i < flyTickets; i ++) {
        const data = ticketData()
        const store = await prisma.ticket.create({
            data: data,
        })
        console.log(`Created service with id: ${store.id}`)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
            process.exit(1)        
    })